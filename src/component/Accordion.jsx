import React,{useState} from "react";


const Accordion = ({items}) => {

    const[activeIndex,setActiveIndex]=useState(null)

    const onTitleClick=(index)=>{
        setActiveIndex(index)
    }


    const renderItems=items.map((item,index)=>{

        const active = index===activeIndex?"active":"";

        // if(index===activeIndex){
        //     active="active"
        // }else{
        //     active=""
        // }

        return <React.Fragment  key={item.title}>
                
                <div  onClick={()=>onTitleClick(index)}  className={`title ${active}`}>
                <i className="dropdown icon"></i>
                    {item.title}

                </div>
                <div className={`content ${active}`}>
                    {item.content}

                </div>


            </React.Fragment>
        

    })
    return (  
        <div className="ui styled accordion">
            {renderItems}
            
        </div>
    );
}
 
export default Accordion;


 
 ;
