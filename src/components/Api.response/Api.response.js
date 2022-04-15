
import React, {useEffect} from "react"
import { ResultSpan } from "./Api.response.style"

export default function SearchPageResponse(developers){

useEffect(() => {screenResponse(developers)})

function screenResponse(developers){ 
    
    if(developers.name){
        return(
            <>
            <ResultSpan>Nome: {developers.name}</ResultSpan>
            <ResultSpan>DC: {developers.dc}</ResultSpan>
            <ResultSpan>Inovation Studio: {developers.istudio}</ResultSpan>
            <ResultSpan>Idade: {developers.age}</ResultSpan>
            <ResultSpan>Cargo: {developers.position}</ResultSpan>
            </>      
        )
    }else{
        return(
            <>
                <ResultSpan>O usuário buscado não existe, por favor tente novamente!</ResultSpan>
                </>
        )
    }
}
return (
    <>
        {screenResponse(developers)}
    </>
);
};