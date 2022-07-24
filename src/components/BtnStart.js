import { useRef, useState } from 'react';
import Unicorn from './Unicorn';
import unicorn from '../unicorn2.svg'
import './BtnStart.css' 


function BtnStart() {
    const unicornRef = useRef(null);

    const [isShown, setIsShown] = useState(false);
    const [button,setButton]=useState(true);

    const handleClick = event => {
        setIsShown(true);
        setButton(false);
    };

    function Box() {
        return (
          <div>
            <h2>Box</h2>
          </div>
        );
      }

    return(
        <div className='container'>
            
            <button className='button' 
                onMouseOver={() => {unicornRef.current.className = "unicornOut"}}
                onMouseOut={() => {unicornRef.current.className = "unicornIn"}}
                onClick={handleClick} 
               >START</button>
            {/* <img src={unicorn} className="unicorn" alt="logo" ref={unicornRef} /> */}
            < Unicorn ref={unicornRef}/>
            {isShown && <Box />}
        </div>
        
    );
} 
export default BtnStart;