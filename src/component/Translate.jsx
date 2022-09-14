import { useState } from 'react';
import Dropdown from "./Dropdown";
import Convert from './Convert';

const Option =[
    {
        label:"Persian",
        value:"fa"
    },
    {
        label:"Afrikans",
        value:"af"
    },
    {
        label:"Arabic",
        value:"ar"
    },
    {
        label:"Hindi",
        value:"hi"
    },
    
]




const Translate = () => {

    const[language,setLanguage]=useState(Option[0]);
    const[text,setText]=useState("")
    return ( 
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label htmlFor="">Enter Text</label>
                    <input value={text} onChange={(e)=>setText(e.target.value)}/>
                </div>
            </div>
            <Dropdown
            label="Select a language"
            options={Option}
            selected={language}
            onSelectedChange={setLanguage}/>
            <h3 className='ui header'>Output</h3>
            <Convert text={text} language={language}></Convert>
            
        </div>
     );
}
 



export default Translate;