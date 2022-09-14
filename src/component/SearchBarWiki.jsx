import { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {

    const [term,setTerm]=useState("React")
    const [results,setResults]=useState([]);
    console.log(results)

    useEffect(()=>{


        // 3 ravesh dare farghi nemikone:
        // ravesh aval pishnahad khode react:
        const search = async()=>{
            
         const {data} = await axios.get("https://en.wikipedia.org/w/api.php",{
                params:{
                    action:"query",
                    list:"search",
                    origin:"*",
                    format:"json",
                    srsearch:term,
                },
            });

            setResults(data.query.search)
        };
          

            if(term && !results.length){
                search()
            }else{
                const timeoutId= setTimeout(()=>{
                    if(term){
                        search();
                    }
                },1000);
    
                return()=>{
                    clearTimeout(timeoutId)
                }

            }
       
       

       // ravesh 2:
    //    (async()=>{
    //         await axios.get("jhjhb")
    //     })();

        // ravesh 3:
        // axios.get()
        // .then(())

        

    },[term])

    const renderedResults = results.map((result) => {
        return (
            <div className="item" key={result.pageid} >
                <div className="right floated content">
                    <a href={`https://en.wikipedia.org?curid=${result.pageid}`}
                     className="ui button" style={{color:"blue"}}>Read More</a>
                </div>
                <div className="content" >
                    <div className="header" >
                        {result.title}</div>
                   
                    <span dangerouslySetInnerHTML={{ __html:result.snippet}}></span>
                </div>
            </div>
          );
    })



    
    return ( 
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input className="input" value={term}
                     onChange={(e)=>setTerm(e.target.value) } />

                </div>
            
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
           
        </div>
     );
}
 
export default Search;