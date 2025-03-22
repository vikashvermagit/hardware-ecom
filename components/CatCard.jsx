import React from "react";
import Image from "next/image";

function CatCard({ imageSrc, productName }) {


  return (

    <div className="flex items-center">
      <div className="bg-white shadow-[0px_4px_16px_0px_rgba(0,111,171,0.25)] rounded-[10px] border-[1px] p-4 ">
        <Image src={imageSrc} width={138} height={148} className="" alt="Product Image" />
        <h1 className="mx-auto text-base mb-1 font-bold">{productName}</h1>
      </div>
    </div>

  )
}

export default CatCard;
