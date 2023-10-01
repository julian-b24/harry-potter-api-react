import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import storage from "../firebaseConfig.js";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  listAll,
} from "firebase/storage";

function TestDetails() {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

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

  const fetchImage = () => {
    const storageRef = ref(storage, "/characters-imgs");

    // getDownloadURL(storageRef).then((url) => {
    //   setImageUrl(url);
    //   console.log(url);
    // });

    listAll(storageRef)
      .then((res) => {
        // Buscar el archivo por nombre.
        console.log(res);
        const imageFile = res.items.find((item) => item.name.includes("test"));

        if (imageFile) {
          // Obtener la URL de descarga del archivo encontrado.
          getDownloadURL(imageFile).then((url) => {
            setImageUrl(url);
            console.log(url);
          });
        } else {
          console.log("Archivo no encontrado");
        }
      })
      .catch((error) => {
        console.error("Error al buscar la imagen:", error);
      });
  };

  useEffect(() => {
    fetchImage();
  }, []);

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
      <img src={imageUrl} alt="" />
    </div>
  );
}

export default TestDetails;
