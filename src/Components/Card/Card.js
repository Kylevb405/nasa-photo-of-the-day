import React, { useEffect, useState } from "react";

// ES6
const Card = ({ imageUrl, title, explanation }) => {
    return (
        <div>
            <h2>NASA PHOTO OF THE DAY</h2>
            <h2>{title}</h2>
            <img src={imageUrl} alt='pic'/>
            <div>{explanation}</div>
        </div>
    );
};

//ES5 
// function Card({imageUrl}) {    
//     return(
//         <div>
//             <h2>NASA PHOTO OF THE DAY</h2>
//             <img src={imageUrl} alt='pic'/>
//         </div> 
//     )
// }

export default Card;