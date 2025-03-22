"use client";
import { AuthContext, UserAuth } from "@/context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { useState } from "react";

function Navbar() {
  const [showLogin, setLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { user } = useContext(AuthContext);

  const handleUserClick = () => {
    if (user) {
      router.push("/accountdashboard");
    } else {
      setLogin(true);
    }
  };

  const toggleDropdown = () => { 
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="bg-[#003964] text-white py-2 px-3 w-[100vw]">
        <div className=" flex  sm:w-3/4 sm:mx-auto  sm:flex-row justify-between items-center">
          <h1 className="sm:text-sm text-xs font-normal sm:px-5 text-center sm:text-left">
            Welcome to Pro H-Ware Systems eCommerce store.
          </h1>
          <div className="flex sm:flex-row gap-2 sm:gap-5 mt-2 sm:mt-0">
            <div className="flex gap-1 items-center justify-center sm:justify-start">
              <span className="sm:text-[14px] text-[10px]">EN</span>
              <Image
                src="/Assets/downarrowicon.svg"
                width={12}
                height={12}
                alt="Dropdown arrow"
              />
            </div>
            <div className="flex gap-1 items-center justify-center sm:justify-start">
              <span className="sm:text-[14px] text-[10px]">INR</span>
              <Image
                src="/Assets/downarrowicon.svg"
                width={12}
                height={12}
                alt="Dropdown arrow"
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" items-center sm:w-3/4 sm:mx-auto  ">
        {/*middleheader*/}

        <div className=" sm:px-5 flex justify-between sm:gap-9 gap-3 items-center sm:py-5 py-2 px-4">
          <div className="mt-2 sm:mt-0">
            <Image src={"/Assets/prologo.png"} width={119} height={48}  />
          </div>
          <div className="w-1/2">
            <div className="flex">
              <div className="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block shadow-[0px_4px_16px_0px_rgba(0,111,171,0.25)] px-8 py-2.5 w-full z-20 text-sm text-black rounded-lg dark:text-black"
                  placeholder="Search for anything..."
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-black focus:outline-none"
                  style={{
                    right: "0.1rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }} // Adjust positioning
                >
                  <Image
                    src={"/Assets/searchicon.svg"}
                    alt="Search"
                    width={12}
                    height={12}
                  />
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-between sm:gap-3 gap-1">
            <Image src={"/Assets/carticon.svg"} width={26} height={26} />
            <Image src={"/Assets/hearticon.svg"} width={26} height={26} />
            <Image
              src={"/Assets/usericon.svg"}
              width={26}
              height={26}
              onClick={handleUserClick}
              className="cursor-pointer"
            />
          </div>
        </div>

        {/*bottom header*/}

        <div className="flex items-center justify-between sm:gap-9 px-5 w-full overflow-auto ">
          <div className="flex justify-between sm:gap-6 gap-3  text-xs  text-[#5F6C72] font-medium">
            <div>
              {" "}
              <span className="line-clamp-1 sm:line-clamp-none "> Post Railing System </span>
            </div>
            <div>
              {" "}
              <h1 className="line-clamp-1 sm:line-clamp-none"> SS Post </h1>
            </div>
            <div>
              {" "}
              <h1 className="line-clamp-1 sm:line-clamp-none"> Spigot System </h1>
            </div>
            <div>
              {" "}
              <h1 className="line-clamp-1 sm:line-clamp-none"> Stud System </h1>
            </div>
            <div>
              {" "}
              <h1 className="line-clamp-1 sm:line-clamp-none"> Terrace Railing </h1>
            </div>
            <div>
              {" "}
              <h1 className="line-clamp-1 sm:line-clamp-none"> Wall Grabrail </h1>
            </div>
            <div>
              {" "}
              <h1 className="line-clamp-1 sm:line-clamp-none"> Wall Grabrail </h1>
            </div>
          </div>

          <div className="flex gap-2">
            <Image
              src={"Assets/locationicon.svg"}
              alt={"nejfn"}
              width={20}
              height={20}
            />
            <Link href={"/"}>
              <h2 className="text-[12px] sm:text-[16px] underline text-blue-600 font-normal">
                Location
              </h2>
            </Link>
          </div>
        </div>

      </div>
      <hr className="mt-5"></hr>
    </>
  );
}

export default Navbar;
