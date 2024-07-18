import React from "react";
import "./../components/DescriptionPancarte.scss";

export function DescriptionPancarte(){
    return (
        <div className='description__pancarte'>
        <p className='description__title'>
          <span>Description</span>
          <i className="fa-solid fa-chevron-up"></i>
        </p>
        <p className='description__article'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit 
            magnam odio rem totam molestiae minima fuga qui, temporibus 
            delectus cumque illum omnis tempora eius vel tempore rerum 
            molestias atque nam iure sequi optio nostrum unde quam quasi. 
        </p>
    </div>
    )
}