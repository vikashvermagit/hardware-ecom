import Image from "next/image";
import { Inter } from "next/font/google";
import CatCard from "@/components/CatCard";
import BigProCard from "@/components/BigProCard";
import FeatureCards from "@/components/FeatureCards";
import Slider from "@/components/Slider";
import React, { useRef } from "react";
import FunctionsCard from "@/components/FunctionsCard";
import { useState, useEffect } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import useProducts from "@/hooks/useProducts";
import useCategories from "@/hooks/useCategories";
import Navbar from "@/components/Navbar";
import ProductCarousel from "@/components/carasol";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { categories, fetchCategories } = useCategories();
  const { products, fetchProducts } = useProducts();
  const sliderRef = useRef(null);
  const routerr = useRouter();
  const [filtereditem, setfiltereditem] = useState();
  const [filtereditemii, setfiltereditemii] = useState();
  // console.log(categories);
  // console.log(products);

  const handleBrowsAll = () => {
    routerr.push("/products");
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const [activeTab, setActiveTab] = useState("All Product");

  const router = useRouter("All Product");

  const handleTabClick = () => { };

  const tabs = [
    {
      name: "All Product",
      category: "all",
    },
    {
      name: "Smart Phone",
      category: "smartphone",
    },

    {
      name: "Laptop",
      category: "laptop",
    },
    {
      name: "Headphone",
      category: "headphones",
    },
    {
      name: "TV",
      category: "tv",
    },
  ];
  const tabs2 = [
    {
      name: "All Product",
      category: "all",
    },
    {
      name: "Keyboard & Mouse",
      category: "keyboardmouse",
    },

    {
      name: "Headphone",
      category: "headphones",
    },
    {
      name: "Webcam",
      category: "webcam",
    },
    {
      name: "Printer",
      category: "printer",
    },
  ];

  const product = [
    { id: 1, imageSrc: "/Assets/productimg.png", productName: "Base Channel" },
    { id: 2, imageSrc: "/images/headphones.jpg", productName: "HeadPhone" },
    { id: 3, imageSrc: "/images/headphones.jpg", productName: "Product 1" },
    { id: 3, imageSrc: "/Assets/mobileimg.png", productName: "Product 1" },
    { id: 4, imageSrc: "/Assets/productimg.png", productName: "Product 1" },
    { id: 5, imageSrc: "/Assets/productimg.png", productName: "Product 1" },
    { id: 6, imageSrc: "/images/headphones.jpg", productName: "Product 1" },
    { id: 7, imageSrc: "/Assets/mobileimg.png", productName: "Product 1" },
    { id: 8, imageSrc: "/Assets/mobileimg.png", productName: "Product 1" },
    { id: 10, imageSrc: "/Assets/mobileimg.png", productName: "Product 1" },
    { id: 11, imageSrc: "/Assets/mobileimg.png", productName: "Product 1" },

    // Add more product objects as needed
  ];

  const products2 = [
    {
      imageSrc: "/Assets/mobileimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
    },
    {
      imageSrc: "/Assets/mobileimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
    },
    {
      imageSrc: "/Assets/mobileimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
    },
    {
      imageSrc: "/Assets/mobileimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
    },

    {
      imageSrc: "/Assets/productimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
    },

    {
      imageSrc: "/Assets/xoimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
    },
    {
      imageSrc: "/Assets/xoimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
    },

    {
      imageSrc: "/Assets/xoimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
    },
  ];
  const products3 = [
    {
      imageSrc: "/Assets/mobileimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
      category: "smartphone",
    },
    {
      imageSrc: "/Assets/mobileimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
      category: "smartphone",
    },
    {
      imageSrc: "/Assets/mobileimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
      category: "smartphone",
    },
    {
      imageSrc: "/Assets/mobileimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
      category: "smartphone",
    },

    {
      imageSrc: "/Assets/productimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
      category: "smartphone",
    },

    {
      imageSrc: "/Assets/xoimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
      category: "printer",
    },
    {
      imageSrc: "/Assets/xoimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
      category: "printer",
    },
    {
      imageSrc: "/Assets/xoimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
      category: "printer",
    },
    {
      imageSrc: "/Assets/xoimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
      category: "printer",
    },
    {
      imageSrc: "/Assets/xoimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
      category: "printer",
    },
    {
      imageSrc: "/Assets/xoimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
      category: "headphones",
    },
    {
      imageSrc: "/Assets/xoimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
      category: "headphones",
    },
    {
      imageSrc: "/Assets/xoimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
      category: "headphones",
    },
    {
      imageSrc: "/Assets/xoimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
      category: "headphones",
    },
    {
      imageSrc: "/Assets/xoimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
      category: "headphones",
    },

    {
      imageSrc: "/Assets/xoimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
      category: "tv",
    },
    {
      imageSrc: "/Assets/xoimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
      category: "tv",
    },
    {
      imageSrc: "/Assets/xoimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
      category: "tv",
    },
    {
      imageSrc: "/Assets/xoimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
      category: "tv",
    },
    {
      imageSrc: "/Assets/xoimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
      category: "tv",
    },
    {
      imageSrc: "/Assets/xoimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
      category: "laptop",
    },
    {
      imageSrc: "/Assets/xoimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
      category: "laptop",
    },
    {
      imageSrc: "/Assets/xoimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
      category: "laptop",
    },
    {
      imageSrc: "/Assets/xoimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
      category: "laptop",
    },
    {
      imageSrc: "/Assets/xoimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
      category: "laptop",
    },
    {
      imageSrc: "/Assets/xoimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
      category: "webcam",
    },
    {
      imageSrc: "/Assets/xoimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
      category: "webcam",
    },
    {
      imageSrc: "/Assets/xoimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
      category: "webcam",
    },
    {
      imageSrc: "/Assets/xoimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
      category: "webcam",
    },
    {
      imageSrc: "/Assets/xoimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
      category: "webcam",
    },
    {
      imageSrc: "/Assets/xoimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
      category: "keyboardmouse",
    },
    {
      imageSrc: "/Assets/xoimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
      category: "keyboardmouse",
    },
    {
      imageSrc: "/Assets/xoimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
      category: "keyboardmouse",
    },
    {
      imageSrc: "/Assets/xoimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
      category: "keyboardmouse",
    },
    {
      imageSrc: "/Assets/xoimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
      category: "keyboardmouse",
    },
  ];

  const FilterItem = (category) => {
    const updateditemdata = products3.filter((curElem, index) => {
      if (category === "all") {
        return products3;
      } else {
        return curElem.category === category;
      }
    });

    setfiltereditem(updateditemdata);
  };

  const FilterItemii = (category) => {
    const updateditemdataii = products3.filter((curElem, index) => {
      if (category === "all") {
        return products3;
      } else {
        return curElem.category === category;
      }
    });

    setfiltereditemii(updateditemdataii);
  };

  return (
    <div className=" w-[100vw] overflow-hidden ">
      <Navbar />
      <Slider />

      {/*Shop with Categories*/}

      <div className=" text-center  ">
        <h1 className="font-bold text-3xl p-5">Shop with Categories</h1>

        <ProductCarousel product={product}></ProductCarousel>
      </div>

      {/*function card*/}

      <div>
        <FunctionsCard />
      </div>

      {/*Best Deals*/}

      <div className=" sm:mx-auto sm:w-3/4 flex  justify-between p-4">
        <h1 className="sm:text-[24px] text-[20px] font-bold ">Best Deals</h1>
        <div className="flex justify-normal sm:justify-between sm:gap-2 gap-1 items-center cursor-pointer ">
          <h1 className="text-[12px] sm:text-[12px] text-[#2DA5F3] font-bold">
            Browse All Product
          </h1>
          <Image
            src={"/Assets/bluerightarrowicon.svg"}
            width={20}
            height={20}
          />
        </div>
      </div>

      <div className="sm:flex sm:w-3/4 mx-auto h-fit ">
        <BigProCard />

        <div className="grid justify-between justify-items-end grid-cols-2 p-4 sm:p-0 sm:grid-cols-4 xl:grid-cols-4 lg: gap-y-10 gap-4">
          {products2.map((product, index) => (
            <FeatureCards
              key={index}
              imageSrc={product.imageSrc}
              title={product.title}
              oldPrice={product.oldPrice}
              newPrice={product.newPrice}
            />
          ))}
        </div>
      </div>

      {/*Featured Products */}
      <div className="flex justify-normal sm:w-3/4 mx-auto sm:pt-20 pt-4">
        <div className="sm:mx-5 w-3/5 object-cover hidden sm:block ">
          <Image
            src="/Assets/bannerimg.svg"
            width={312}
            height={16}
            alt="Banner Image"
            className=""
          />
        </div>

        <div className="p-4">
          <div className=" flex justify-between w-full align-text-top ">
            <h1 className="sm:text-xl text-xs font-bold ">Featured Products</h1>
            <div className="flex justify-between items-center gap-4">
              <div className="text-[10px] sm:text-[14px] font-bold text-center text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex justify-center items-center gap-4 h-[40px] ">
                  {tabs.map((tab) => (
                    <li
                      key={tab.name}
                      className="flex justify-between flex-col w-fit"
                    >
                      <div
                        onClick={() => FilterItem(tab.category)}
                        legacyBehavior
                      >
                        <span
                          onClick={() => setActiveTab(tab.name)}
                          className={`inline-block pb-1 border-b-2 cursor-pointer rounded-t-lg ${activeTab === tab.name
                            ? "text-black border-orange-500"
                            : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                            }`}
                        >
                          {tab.name}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="flex justify-between gap-2 items-center cursor-pointer mb-2"
                onClick={handleBrowsAll}
              >
                <h1 className="text-[10px] sm:text-[14px] text-[#2DA5F3] font-bold line-clamp-1">
                  Browse All Product
                </h1>
                <Image
                  src="/Assets/bluerightarrowicon.svg"
                  width={20}
                  height={20}
                  alt="Arrow Icon"
                />
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-4 grid-cols-2 grid-rows-2 gap-3 ">
            {filtereditem?.map((product, index) => (
              <ProductCard
                key={index}
                imageSrc={product.imageSrc}
                title={product.title}
                oldPrice={product.oldPrice}
                newPrice={product.newPrice}
              />
            ))}
          </div>
        </div>
      </div>

      {/*Banner*/}

      <div className="sm:w-3/4 mx-auto">
        <Image
          src={"/Assets/banner2img.svg"}
          width={1300}
          height={424}
          className="sm:m-5 p-3 sm:pt-20 pt-4"

        />
      </div>

      {/*Computer Accessories */}

      <div className="flex justify-between sm:w-3/4 mx-auto sm:pt-16 p-5">
        <div className="">
          <div className=" flex justify-between w-full items-center gap-2 ">
            <h1 className="sm:text-xl text-[12px] font-bold">Featured Products</h1>
            <div className="flex justify-between items-center gap-4">
              <div className="sm:text-xs text-[10px] font-bold text-center  text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex justify-center items-center gap-4 h-[50px]">
                  {tabs2.map((tab) => (
                    <li
                      key={tab.name}
                      className="flex justify-between flex-col w-fit "
                    >
                      <div
                        onClick={() => FilterItemii(tab.category)}
                        legacyBehavior
                      >
                        <span
                          onClick={() => setActiveTab(tab.name)}
                          className={`inline-block  pb-1 border-b-2 cursor-pointer rounded-t-lg ${activeTab === tab.name
                            ? "text-black border-orange-500"
                            : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                            }`}
                        >
                          {tab.name}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="flex justify-between items-center cursor-pointer mb-2"
                onClick={handleBrowsAll}
              >
                <h1 className="text-xs text-[#2DA5F3] font-bold line-clamp-1">
                  Browse All Product
                </h1>
                <Image
                  src="/Assets/bluerightarrowicon.svg"
                  width={20}
                  height={20}
                  alt="Arrow Icon"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 sm:pt-0">
            {filtereditemii?.map((product, index) => (
              <ProductCard
                key={index}
                imageSrc={product.imageSrc}
                title={product.title}
                oldPrice={product.oldPrice}
                newPrice={product.newPrice}
              />
            ))}
          </div>
        </div>

        <div className="ml-5 w-3/5 object-cover hidden sm:block ">
          <Image
            src="/Assets/bannerimg.svg"
            width={312}
            height={716}
            alt="Banner Image"
            className=""
          />
        </div>
      </div>

      {/*Banner*/}

      <div className="sm:w-3/4 sm:mx-auto sm:p-0 m-5 sm:m-0 ">
        <Image
          src={"/Assets/banner2img.svg"}
          width={1300}
          height={424}
          className="sm:m-5 pt-20"
        />
      </div>

      {/*News Letter*/}

      <div className="pt- w-full mx-auto items-center">
        <div className="  mx-auto bg-[#F2F4F5] py-10 text-center  items-center">
          <h1 className="text-3xl font-bold">News Letter</h1>
          <div className="mx-auto mt-5 flex w-3/4 gap-2 overflow-auto sm:overflow-hidden">
            <div className="bg-white mx-auto h-1/2 rounded-[10px] p-5 m-5 border-[0.1rem] items-center ">
              <Image
                src={"/Assets/cardimg.jpg"}
                width={360}
                height={248}
                objectFit
                className="rounded-[5px] "
              />

              <div className="flex gap-5 pt-4 ">
                <div className="flex gap-1 items-center justify-center">
                  <Image src={"/Assets/user2icon.svg"} width={24} height={24} />
                  <span className="text-sm font-bold">Sanket</span>
                </div>

                <div className="flex gap-1">
                  <Image
                    src={"/Assets/Calendericon.svg"}
                    width={24}
                    height={24}
                  />
                  <span className="text-sm font-bold">19/02/2024</span>
                </div>
              </div>

              <span className="text-lg font-bold line-clamp-2 text-left mt-3">
                Cras nikaj fr89 fnfij r9ifir fiur89fr iuhursl dolor, accumsan et
                metus sit amet, vulputate condimentum dolor.
              </span>
              <span className="text-xs text-gray-500 font-bold line-clamp-3 text-left mt-3">
                Cras nikajfr89fnfijr9ifirfiur89friuhursl dolor, accumsan et
                metus sit amet, vulputate condimentum dolor.
              </span>

              <button className="flex text-[14px] font-bold text-[#006FAB] mt-5 items-center gap-2 bg-transparent border-[0.2rem] border-[#E6F1F7] rounded-[10px] px-4 py-2">
                READ MORE
                <Image
                  src={"/Assets/bluedarkarrowicon.svg"}
                  width={20}
                  height={20}
                />
              </button>
            </div>

            <div className="bg-white mx-auto h-1/2 rounded-[10px] p-5 m-5 border-[0.1rem] items-center ">
              <Image
                src={"/Assets/cardimg.jpg"}
                width={360}
                height={248}
                objectFit
                className="rounded-[5px] "
              />

              <div className="flex gap-5 pt-4 ">
                <div className="flex gap-1 items-center justify-center">
                  <Image src={"/Assets/user2icon.svg"} width={24} height={24} />
                  <span className="text-sm font-bold">Sanket</span>
                </div>

                <div className="flex gap-1">
                  <Image
                    src={"/Assets/Calendericon.svg"}
                    width={24}
                    height={24}
                  />
                  <span className="text-sm font-bold">19/02/2024</span>
                </div>
              </div>

              <span className="text-lg font-bold line-clamp-2 text-left mt-3">
                Cras nikaj fr89 fnfij r9ifir fiur89fr iuhursl dolor, accumsan et
                metus sit amet, vulputate condimentum dolor.
              </span>
              <span className="text-xs text-gray-500 font-bold line-clamp-3 text-left mt-3">
                Cras nikajfr89fnfijr9ifirfiur89friuhursl dolor, accumsan et
                metus sit amet, vulputate condimentum dolor.
              </span>

              <button className="flex text-[14px] font-bold text-[#006FAB] mt-5 items-center gap-2 bg-transparent border-[0.2rem] border-[#E6F1F7] rounded-[10px] px-4 py-2">
                READ MORE
                <Image
                  src={"/Assets/bluedarkarrowicon.svg"}
                  width={20}
                  height={20}
                />
              </button>
            </div>

            <div className="bg-white mx-auto h-1/2 rounded-[10px] p-5 m-5 border-[0.1rem] items-center ">
              <Image
                src={"/Assets/cardimg.jpg"}
                width={360}
                height={248}
                objectFit
                className="rounded-[5px] "
              />

              <div className="flex gap-5 pt-4 ">
                <div className="flex gap-1 items-center justify-center">
                  <Image src={"/Assets/user2icon.svg"} width={24} height={24} />
                  <span className="text-sm font-bold">Sanket</span>
                </div>

                <div className="flex gap-1">
                  <Image
                    src={"/Assets/Calendericon.svg"}
                    width={24}
                    height={24}
                  />
                  <span className="text-sm font-bold">19/02/2024</span>
                </div>
              </div>

              <span className="text-lg font-bold line-clamp-2 text-left mt-3">
                Cras nikaj fr89 fnfij r9ifir fiur89fr iuhursl dolor, accumsan et
                metus sit amet, vulputate condimentum dolor.
              </span>
              <span className="text-xs text-gray-500 font-bold line-clamp-3 text-left mt-3">
                Cras nikajfr89fnfijr9ifirfiur89friuhursl dolor, accumsan et
                metus sit amet, vulputate condimentum dolor.
              </span>

              <button className="flex text-[14px] font-bold text-[#006FAB] mt-5 items-center gap-2 bg-transparent border-[0.2rem] border-[#E6F1F7] rounded-[10px] px-4 py-2">
                READ MORE
                <Image
                  src={"/Assets/bluedarkarrowicon.svg"}
                  width={20}
                  height={20}
                />
              </button>
            </div>



          </div>
        </div>
      </div>

      {/*subscribe newsletter*/}

      <div className="bg-[#006FAB] w-full">
        <div className=" flex-col w-3/4 mx-auto text-center items-center justify-center mt-5 p-5">
          <h1 className="sm:text-3xl   text-base text-white sm:mt-10">
            Subscribe to our newsletter
          </h1>

          <div className="text-center justify-center items-center sm:w-1/3 w-3/4 mx-auto sm:my-3 my-1.5">
            <p className="sm:text-xs font-normal text-white text-xs">
              Praesent egestas. Donec vehicula tempor libero et cursus. Donec
              non quam urna. Quisque vitae porta ipsum.
            </p>
          </div>

          <div className="mx-auto mt-8 relative bg-white dark:bg-gray-50 w-full md:w-1/2 flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-[5px] gap-2 shadow-2xl focus-within:border-gray-300">
            <input
              id="searchinput"
              placeholder="Email"
              className="px-3 py-1 w-full md:w-auto flex-1 rounded-md outline-none bg-white dark:bg-gray-50"
            />
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-2 bg-blue-500 text-white fill-white active:scale-95 duration-100 border overflow-hidden relative rounded-[3px]"
            >
              <span className="flex items-center transition-all opacity-1">
                <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                  subscribe
                </span>
                <Image
                  src={"/Assets/whiterightarrowicon.svg"}
                  width={15}
                  height={15}
                  className="ml-2"
                />
              </span>
            </button>
          </div>

          <hr className="mt-5 w-1/3 mx-auto"></hr>

          <div className="grid sm:grid-cols-3 justify-center gap-6 items-center w-3/4 mx-auto mt-7 px-12">
            <Image src={"/Assets/googleicon.svg"} width={72} height={23.48} />
            <Image src={"/Assets/googleicon.svg"} width={72} height={23.48} />
            <Image src={"/Assets/googleicon.svg"} width={72} height={23.48} />
            <Image src={"/Assets/googleicon.svg"} width={72} height={23.48} />
            <Image src={"/Assets/googleicon.svg"} width={72} height={23.48} />
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
