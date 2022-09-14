import { useState,useEffect } from "react";
import { setCORS } from "google-translate-api-browser";
const Convert = ({language,text}) => {
    const translate = setCORS("https://cors-anywhere.herokuapp.com/");
    const[translated,setTranslated]=useState("");
    const [finalText,setFinalText]=useState(text);

    useEffect(()=>{
        const timerId=setTimeout(() => {
            setFinalText(text)
        }, 1000);
        return ()=>{
            clearTimeout(timerId);
        }

    },[text])
   
        useEffect(()=>{
            translate(`${text}`,{to: `${language.value}`})
            .then(res=>{
                setTranslated(res.text)
            })
            .catch(err=>{
                console.log(err);
            }) 
        },[language,text]);
        return  (
            <div>
            <h1 className="ui header">{translated}</h1>
            </div>
        )
        
}
 
export default Convert;