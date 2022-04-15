import {useEffect, useState} from "react"
import axios from "axios"
import SearchPageResponse from "../Api.response/Api.response"

export default function ListDevelopers(search){
 
const [developers, setDevelopers] = useState([])

useEffect(() =>{
        axios.get('https://developers-api.glitch.me/api')
        .then(response=>{
            const resp = response.data
            const match = resp.developers.filter(developer => developer.name === search)
            setDevelopers(match[0])
        })
    },[])
    console.log(developers)
 SearchPageResponse(developers);
}