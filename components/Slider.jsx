import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react';

const images = [
    { src: '/Assets/slider.svg', alt: 'Slide 1' },
    { src: '/Assets/mobileimg.png', alt: 'Slide 2' },
    // Add more images as needed
];

function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change slide every 3 seconds
        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };
    return (

        <div id="default-carousel" className=" w-3/4 mx-auto" data-carousel="slide">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96 border m-5">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            layout="fill"
                            objectFit="cover"
                            className="absolute block w-full h-full"
                        />
                    </div>
                ))}

                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                                }`}
                            aria-current={index === currentIndex}
                            aria-label={`Slide ${index + 1}`}
                            onClick={() => goToSlide(index)}
                        ></button>
                    ))}
                </div>
            </div>
            {/* Slider indicators */}

        </div>


    )
}

export default Slider
