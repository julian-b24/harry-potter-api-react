
import axios from '../../config/axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function PotionDetails() {

    const { id } = useParams()
    const [potion, setPotion] = useState(null)

    const getPotion = () => {
        try {
            const response = axios.get('/potions/' + id)
            setPotion(response.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => { getPotion() }, []);


    return (
        <>
            <p>{potion.attributes.slug}</p>
            <p>{potion.attributes.characteristics}</p>
            <p>{potion.attributes.difficulty}</p>
            <p>{potion.attributes.effect}</p>
            <p>{potion.attributes.image}</p>
            <p>{potion.attributes.inventors}</p>
            <p>{potion.attributes.ingredients}</p>
            <p>{potion.attributes.name}</p>
            <p>{potion.attributes.side_effects}</p>
            <p>{potion.attributes.time}</p>
            <p>{potion.attributes.wiki}</p>
        </>

    )
}

export default PotionDetails