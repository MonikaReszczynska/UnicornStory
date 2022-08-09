import { useRef } from 'react';
import Unicorn from './Unicorn';
import './BtnStart.css' 


const UnicornBtn = (props) => {
    const unicornRef = useRef(null);
    
    return(
        <div className='container'>
            
            <button className='button' 
                onMouseOver={() => {unicornRef.current.className = "unicornOut"}}
                onMouseOut={() => {unicornRef.current.className = "unicornIn"}}
                onClick={props.onClick} 
               >START</button>
            < Unicorn ref={unicornRef}/>            
        </div>
        
    );
} 
export default UnicornBtn;