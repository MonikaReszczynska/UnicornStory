import { useRef } from 'react';
import image1 from './image1.jpg'
import image2 from './image2.jpg'
import './slider.css'



function Slider() {
    const containerRef = useRef(null);

    return(
        <div className='container'>

            <button className='button button-start' onClick={()=>{containerRef.current.scrollBy({left:-100, top: 0, behavior: "smooth"})}}></button>
            <div className='row' ref={containerRef}>
    
                <img src={image1} className="bg-image column" alt="logo" />
            
            </div> 
            
        </div>
        
    );
} 
export default Slider;