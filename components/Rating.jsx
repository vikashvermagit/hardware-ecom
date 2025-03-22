import React, { useState } from 'react';
import Image from 'next/image';

const Rating = () => {
    const [rating, setRating] = useState(0);

    const handleRating = (value) => {
        setRating(value);
    };

    return (
        <div className="flex flex-row-reverse justify-end items-center ">
            <span className='text-xs ml-1'>(554)</span>
            {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                    <label
                        key={starValue}
                        htmlFor={`hs-ratings-readonly-${starValue}`}
                        className={`cursor-pointer ${rating >= starValue ? 'text-blue-400' : 'text-gray-300'
                            }`}
                    >
                        <input
                            id={`hs-ratings-readonly-${starValue}`}
                            type="radio"
                            className="peer hidden"
                            name="hs-ratings-readonly"
                            value={starValue}
                            onClick={() => handleRating(starValue)}
                        />
                        <Image src={"/Assets/star.svg"}
                            width={12}
                            height={12}
                            alt="star"
                            className="flex-shrink-0 ml-1"
                        />
                        
                    </label>
                    
                );
            })}
            
        </div>
    );
};

export default Rating;
