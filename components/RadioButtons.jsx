import React from 'react'
import { useState } from 'react';

function RadioButtons ({category}) {
    const [selected, setSelected] = useState(null);

    const handleChange = (event) => {
        setSelected(event.target.id);
    };
    return (
        <div>
            {category.map((option, index) => (
                <div key={index} className="flex items-center mt-4">
                    <input
                        id={`radio-${index}`}
                        type="radio"
                        name="custom-radio"
                        className="w-4 h-4 text-blue-600  bg-gray-100 border-gray-300 focus:outline-none focus:ring-0"
                        checked={selected === `radio-${index}`}
                        onChange={handleChange}
                    />
                    <label
                        htmlFor={`radio-${index}`}
                        className={`ms-2 text-sm font-medium ${selected === `radio-${index}` ? `text-black` : 'text-black dark:text-[#475156]'}`}
                    >
                        {option}
                    </label>
                </div>
            ))}
        </div>
    )
}

export default RadioButtons