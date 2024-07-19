import React from "react";
import "./../components/DescriptionPancarte.scss";

export function DescriptionPancarte(props){
    return (
        <div className='description__pancarte'>
        <p className='description__title'>
          <span>{props.title}</span>
          <i className="fa-solid fa-chevron-up"></i>
        </p>
        <p  className='description__article'>
            {props.content} 
        </p>
    </div>
    )
}