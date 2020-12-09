import React, { useEffect, useState } from "react";
import Cardheader from './Cardheader';
import styled from 'styled-components';
import Colors from '../CSS Variables/CSS';

const StyledCard = styled.div`

    background-color: ${pr => pr.theme.primaryColor};

`
const P = styled.p`

    color : ${Colors.thirdColor};

`


// ES6
const Card = ({ imageUrl, title, explanation }) => {
    return (
        <StyledCard>
            {/* <h2>NASA PHOTO OF THE DAY</h2> */}
            {/* <h2>{title}</h2> */}

            
            <Cardheader title={title} />

            <P>
                test
            </P>

            <img src={imageUrl} alt='pic'/>
            <div>{explanation}</div>
        </StyledCard>
    );
};

//ES5 
// function Card({imageUrl}) {    
//     return (
//         <div>
//             <h2>NASA PHOTO OF THE DAY</h2>
//             <h2>{title}</h2>
//             <img src={imageUrl} alt='pic'/>
//             <div>{explanation}</div>
//         </div>
//     );
// };

export default Card;