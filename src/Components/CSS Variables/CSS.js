import React, { useEffect, useState } from "react";
import Card from './Components/Card/Card';





//  const Colors = () => {
    
    
    //      return (
        
        
        //     )
        
        // }
        
        const [primaryColor, setPrimaryColor] = useState();
        const [secondaryColor, setSecondaryColor] = useState();
        const [tertiaryColor, setTertiaryColor] = useState();
        
        const firstColor = primaryColor;
        const secondColor = secondaryColor;
        const thirdColor = tertiaryColor;
        
        setPrimaryColor(firstColor)
        setSecondaryColor(secondColor)
        setTertiaryColor(thirdColor)
        
        
const test  = () => {

    const Colors = () =>  {
    
        primaryColor : 'royalBlue'
        secondaryColor : 'orange'
        tertiaryColor : 'green'
        dangerColor : 'red'
        // black : 'black'
        // white : 'white'
    
    };

    return (

        <div className='test'>

        <Card thirdColor={thirdColor} />

        </div>

    )

}

export default test