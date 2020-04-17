// Write your Character component here
import React, {useState, useEffect} from "react";
import axios from "axios";
import RmChar from "./RmChar"

export default function Character () {

    let [rmChar, setRmChar] = useState([]);

    useEffect(() => {

        axios

        .get("https://rickandmortyapi.com/api/character/")

        .then(res => {
            let data = res.data.results;
            //console.log(res.data.results);
            setRmChar(data);
        })

        .catch(error => {
            console.log(error)
        })

    }, [])

    return(
        <div>
            {/* Get each character and render them using RmChar */}
            {rmChar.map( (char, index) => {
                return <RmChar key={index} name={char.name} species={char.species} status={char.status} type={char.type} />
            })}
        </div>
    )
}