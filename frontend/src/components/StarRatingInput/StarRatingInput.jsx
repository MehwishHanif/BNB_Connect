import { FaStar } from 'react-icons/fa6';
import { useState, useEffect } from 'react';
import './StatRatingInput.css';

function StarRatingInput({ rating, disabled, onChange }){
    const [activeRating, setActiveRating] = useState(parseInt(rating));
    
    useEffect(()=>{
        setActiveRating(rating);
    }, [rating]);

    return (
        <div className="rating-input">
        <div 
          className={activeRating >= 1 ? "filled": "empty"}
          onMouseEnter={() => !disabled && setActiveRating(1) } 
          onMouseLeave={() => !disabled && setActiveRating(rating)} 
          onClick={ () => onChange(1)}
        >
          <FaStar />
        </div>
        <div className={activeRating >= 2 ? "filled": "empty"} 
        onMouseEnter={() => !disabled && setActiveRating(2)} 
        onMouseLeave={() => !disabled && setActiveRating(rating) }
        onClick={ () => onChange(2)}>
          <FaStar />
        </div>
        <div className={activeRating >= 3 ? "filled": "empty"} 
        onMouseEnter={() => !disabled && setActiveRating(3)} 
        onMouseLeave={() => !disabled && setActiveRating(rating) } 
        onClick={() => onChange(3)}>
          <FaStar />
        </div>
        <div className={activeRating >= 4 ? "filled": "empty"}  
         onMouseEnter={() => !disabled && setActiveRating(4)} 
         onMouseLeave={() => !disabled && setActiveRating(rating) } 
         onClick={() => onChange(4)}>
          <FaStar />
        </div>
        <div className={activeRating >= 5 ? "filled": "empty"}  
        onMouseEnter={() => !disabled && setActiveRating(5)} 
        onMouseLeave={() => !disabled && setActiveRating(rating) } 
        onClick={() => onChange(5)}>
          <FaStar />
        </div>
      </div>
    );

}

export default StarRatingInput;