import React, { useState } from 'react';
import Accordion from '../component/Accordion';
import Search from "../component/SearchBarWiki";
import DropDown from "../component/Dropdown"
import Translate from '../component/Translate';
import Route from '../component/Route';
import { Routes } from 'react-router';
import MainRouter from '../component/MainRouter';
import {BrowserRouter} from "react-router-dom";
import Header from '../component/Header';




const items =[
    {
        title:"What is a hook in React?",
        content:" Hooks are the functions which React state and lifecycle features from function components."
    },
    {
        title:"Is React hook good",
        content:" Hooks are the functions which React state."
    },
    {
        title:"What is a hook in React?",
        content:"lifecycle features from function components."
    }
  ]
  

const options =[
    {
        label:"The Color Red",
        value:"red"
    
    },
    {
        label:"The Color Green",
        value:"green"
    
    },
    {
        label:"The Color Blue",
        value:"blue"
    
    }
  ]





function SearchWiki (){

    const[selected,setSelected]=useState(options[0]);
    const[showDropDown,setShowDropDown]=useState(true)

    return ( 
        <div>
            <Header/>
          
         
           
             <Route  path="/">
                 <Accordion items={items}/>
             </Route>
             
           <Route path="/list" element
           >
                 <Search/>
           </Route>
        
            
         
            <Route path="/DropDown">
            <button onClick={()=>setShowDropDown(!showDropDown)}>Toggle DropDown</button>
            {showDropDown?
                     <DropDown 
                     label="Select a color"
                     selected={selected}
                     onSelectedChange={setSelected}
                     options={options}/>
                     :null}

            </Route> 

            <Route path="/Translate">
                <Translate/>
                
            </Route>
            
            
          
           
        </div>
     );
}
 
export default SearchWiki;