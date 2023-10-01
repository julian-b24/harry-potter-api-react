import React, { useState } from "react";
import storage from "../firebaseConfig.js";
import { Button } from "@mui/material";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function TestDetails() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please choose a file first!");
      return;
    }

    const storageRef = ref(storage, `/characters-imgs/test.jpg`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (err) => console.log(err),
      () => {
        alert("Upload successful!");
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
        });
      }
    );
  };

  return (
    <div>
      <h3>File Upload using React!</h3>
      <div>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <Button
          onClick={() => {
            handleUpload();
          }}
        >
          Upload!
        </Button>
      </div>
    </div>
  );
}

export default TestDetails;
