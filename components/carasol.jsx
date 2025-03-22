import React, { useState, useRef, useEffect } from "react";
import { useDrag } from "@use-gesture/react";
import Image from "next/image";
import CatCard from "./CatCard"; // Adjust the import based on your file structure

const ProductCarousel = ({ product }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const handlePrevClick = () => {
    if (sliderRef.current) {
      const newIndex = Math.max(0, activeIndex - 1);
      setActiveIndex(newIndex);
      sliderRef.current.scrollTo({
        left: sliderRef.current.clientWidth * newIndex,
        behavior: "smooth",
      });
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      const newIndex = Math.min(product.length - 1, activeIndex + 1);
      setActiveIndex(newIndex);
      sliderRef.current.scrollTo({
        left: sliderRef.current.clientWidth * newIndex,
        behavior: "smooth",
      });
    }
  };

  const bind = useDrag((state) => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= state.movement[0];
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const newIndex = Math.round(
          sliderRef.current.scrollLeft / sliderRef.current.clientWidth
        );
        setActiveIndex(newIndex);
      }
    };

    if (sliderRef.current) {
      sliderRef.current.addEventListener("scroll", handleScroll);
      return () => {
        sliderRef.current.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div
      id="animation-carousel"
      className="relative w-3/4 mx-auto sm:px-5 sm:pl-9  overflow-hidden"
      data-carousel="static"
    >
      <div
        ref={sliderRef}
        className="relative flex overflow-x-auto scroll-smooth scrollable-component"
        style={{
          width: "100%",
          display: "flex",
          scrollSnapType: "x mandatory",
        }}
        {...bind()}
      >
        {product.map((product, index) => (
          <div
            key={index}
            className="flex-none w-11/12 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 sm:p-2"
            style={{ scrollSnapAlign: "start" }}
          >
            <CatCard
              key={product.id}
              imageSrc={product.imageSrc}
              productName={product.productName}
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 left-0 flex items-center justify-center h-full sm:px-4 cursor-pointer group"
        onClick={handlePrevClick}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#006FAB] group-hover:bg-[#2184b9]">
          <Image
            src="/Assets/leftarrowicon.svg"
            width={24}
            height={24}
            alt="Left Arrow"
            className="text-white"
          />
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-50 flex items-center justify-center h-full px- cursor-pointer group focus:outline-none"
        onClick={handleNextClick}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#006FAB] group-hover:bg-[#2184b9]">
          <Image
            src="/Assets/rightarrowicon.svg"
            width={24}
            height={24}
            alt="Right Arrow"
            className="text-white"
          />
          <span className="sr-only">Next</span>
        </span>
      </button>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center  ">
        {product.map((_, index) =>
          index % 5 == 0 ? (
            <div
              key={index}
              className={`w-2 h-2 mx-1 rounded-full ${
                index === activeIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></div>
          ) : (
            <></>
          )
        )}
      </div>
    </div>
  );
};

export default ProductCarousel;
