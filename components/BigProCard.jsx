import React from "react";
import Image from "next/image";

function BigProCard() {
  return (
    <div className="">
      <div className="bg-white shadow-[0px_4px_16px_0px_rgba(239,239,239)] ml-4 sm:ml-0 w-11/12 h-full p-1 items-center border-[0.1rem] rounded-[15px] ">
        <Image
          src={"/Assets/xoimg.png"}
          width={300}
          height={293.43}
          className="sm:mx-auto"
        />
        <h1 className="mx-4 mt-7 text-base font-bold line-clamp-2">
          {" "}
          Xbox Series S - 512GB SSD Console with Wireless Controller - EU
          Versio...
        </h1>

        <div className="gap-2 mt-3 flex mx-6 text-center items-center line-clamp-3">
          <h2 className="text-sm font-normal text-[#ADB7BC] line-through">
            $43.534
          </h2>
          <h2 className="text-sm text-[#2DA5F3] font-bold">$43.534</h2>
        </div>

        <h2 className="mx-4 mt-3 text-sm text-[#5F6C72] font-semibold line-clamp-3">
          Games built using the Xbox Series X|S development kit showcase
          unparalleled load times, visuals.
        </h2>

        <div className="flex sm:gap-2 gap-10 items-center justify-center m-5 mx-auto ">
          <Image src={"/Assets/blackhearticon.svg"} width={35} height={35} />
          <div>
            <button className="bg-[#006FAB] gap-1 text-white px-2.5 py-2.5 rounded flex  text-xs items-center ">
              <Image
                src={"/Assets/cart2icon.svg"}
                width={16}
                height={16}
                className=""
              />
              ADD TO ENQUERY
            </button>
          </div>

          <Image
            src={"/Assets/eyeicon.svg"}
            width={35}
            height={35}
            className="bg-[#006FAB1A] rounded-[2px] p-2"
          />
        </div>
      </div>
    </div>
  );
}

export default BigProCard;
