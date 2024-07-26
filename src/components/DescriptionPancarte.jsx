import React, { useState } from "react";
import "./../components/DescriptionPancarte.scss";

export function DescriptionPancarte(props){
    const [contentVisible, setContentVisible] = useState(false);
    
    const showContent = () => {
        setContentVisible(!contentVisible);
    }
    
    return (
        <div className='description__pancarte'>
            <p className='description__title'>
                <span>{props.title}</span>
                <i onClick={showContent} className={`fa-solid fa-chevron-down ${contentVisible ? 'rotated' : ''}`}></i>
            </p>
            {contentVisible && <p className='description__article__hidden'>
                {props.content} 
            </p>}
        </div>
    )}
    // import React, { useState } from "react";
    // import "./../components/DescriptionPancarte.scss";
    
    // export function DescriptionPancarte(props){
    // const [contentVisible,setContentVisible]= useState (false)
    
    // const showContent =(showContent)=>{
    //     setContentVisible(!contentVisible)
    // }
    
    //     return (
    //         <div className='description__pancarte'>
    //         <p className='description__title'>
    //           <span>{props.title}</span>
    //           <i onClick={showContent} className="fa-solid fa-chevron-down"></i>
    //         </p>
            
    //         {contentVisible && <p className='description__article__hidden'>
    //             {props.content} 
    //         </p>}
    //     </div>
    //     )
    // }