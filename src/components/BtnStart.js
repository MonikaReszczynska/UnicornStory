import { useState } from 'react';
import UnicornBtn from './UnicornBtn';
import Screen from './Screen';
import './BtnStart.css' 

let data = require("./ScreensData.json"); 



function BtnStart() {
    const [isShown, setIsShown] = useState(false);
    const [count, setCount] = useState(0);

    const handleClick = event => {
        setIsShown(true);
    };

    const counter = (id) => {
        // setCount( count = 5)
        // setCount(5)
        console.log(id)
        console.log(data[count])
      setCount(data[count].options[id].nextId);
    }

    return(
        <div className='container'>
            
            {!isShown && <UnicornBtn onClick={handleClick} />}
            {isShown && <Screen onClick={counter} count={count} />}
        </div>
        
    );
} 
export default BtnStart;