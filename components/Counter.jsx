import React from 'react'
import { useState } from 'react';

function Counter() {

    const [value, setValue] = useState(0);

    const decrement = () => {
        setValue(prevValue => Math.max(0, prevValue - 1));
    };

    const increment = () => {
        setValue(prevValue => prevValue + 1);
    };
    return (
        <div className="custom-number-input sm:h-10 sm:w-32 w-24 h-3 ">

            <div className="flex flex-row sm:gap-1 sm:h-11 sm:w-full rounded-[3px] relative bg-transparent border-[2px] ">
                <button
                    onClick={decrement}
                    className=" text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-auto sm:w-20 p-2 rounded-l cursor-pointer outline-none"
                >
                    <span className="m-auto sm:text-2xl font-thin">−</span>
                </button>
                <input
                    type="number"
                    className="outline-none  text-center justify-center w-full ml-2 font-semibold sm:text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700"
                    name="custom-input-number"
                    value={value}
                    readOnly
                />
                <button
                    onClick={increment}
                    className=" text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full sm:w-20 p-2 rounded-r cursor-pointer"
                >
                    <span className="m-auto sm:text-2xl font-thin">+</span>
                </button>
            </div>
        </div>
    )
}

export default Counter