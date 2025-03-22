import ProductCard2 from "@/components/ProductCard2";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import BreadCramp from "@/components/BreadCramp";
import RadioButtons from "@/components/RadioButtons";
import DualRangeSlider from "@/components/DualRangeSlider";
import { useState } from "react";
import NewsLetter from "../../components/NewsLetter";
import Footer from "@/components/Footer";
import CheckBox from "@/components/CheckBox";
import { useRouter } from "next/router";
import ProductCard from "@/components/ProductCard";

function index() {
  const [isOpen, setIsOpen] = useState(false);
  const [minvalue, setMinValue] = useState(0);
  const [maxvalue, setMaxValue] = useState(0);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const category = [
    "Electronics Devices",
    "Computer & Laptop",
    "Computer Accessories",
    "SmartPhone",
    "SmartPhone",
    "Mobile Accessories",
    "Gaming Console",
    "Camera & Photo",
  ];

  const products = [
    {
      imageSrc: "/images/headphones.jpg",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
    },
    {
      imageSrc: "/images/headphones.jpg",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
    },
    {
      imageSrc: "/images/headphones.jpg",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
    },
    {
      imageSrc: "/images/headphones.jpg",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
    },
    {
      imageSrc: "/images/headphones.jpg",
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
      imageSrc: "/images/headphones.jpg",
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
      imageSrc: "/images/headphones.jpg",
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
      imageSrc: "/images/headphones.jpg",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
    },
    {
      imageSrc: "/images/headphones.jpg",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
    },
    {
      imageSrc: "/images/headphones.jpg",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
    },
    {
      imageSrc: "/images/headphones.jpg",
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
      imageSrc: "/images/headphones.jpg",
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
      imageSrc: "/Assets/mobileimg.png",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
    },
    {
      imageSrc: "/images/headphones.jpg",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
    },
    {
      imageSrc: "/images/headphones.jpg",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
    },
    {
      imageSrc: "/images/headphones.jpg",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
    },
    {
      imageSrc: "/images/headphones.jpg",
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
      imageSrc: "/images/headphones.jpg",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
    },
    {
      imageSrc: "/images/headphones.jpg",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
    },
    {
      imageSrc: "/images/headphones.jpg",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
    },
    {
      imageSrc: "/images/headphones.jpg",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon Earbuds Earbuds",
      oldPrice: "43.534",
      newPrice: "39.99",
    },
    {
      imageSrc: "/images/headphones.jpg",
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
  ];

  const router = useRouter();

  const handleProduct = () => {
    router.push("/productdetails");
  };

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 2 * 8; // Set the number of products per page

  // Calculate the index of the first and last product on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Calculate the total number of pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="sm:items-center ">
      <Navbar />

      <div className="flex justify-between sm:w-3/4 mx-auto p-1">
        {/*Left Part*/}
        <div className="sm:w-1/4">
          {/*catagory*/}
          <div>
            <h1 className="text-sm font-medium">CATEGORY</h1>
            <RadioButtons category={category} />
          </div>

          <div className="mt-4  border-t-2 w-4/3 mr-3  border-gray-300"></div>

          {/*Price Range*/}
          <div className="mt-5">
            <span className="text-sm font-medium ">PRICE RANGE</span>

            <DualRangeSlider />

            <div className="flex">
              <div></div>

              <div></div>
            </div>
          </div>

          <div className="mt-3  border-t-2 w-4/3 mr-3  border-gray-300"></div>

          {/*popular Brands*/}

          <div className="mt-5">
            <span className="text-sm font-medium"> POPULARS BRANDS </span>

            <div className="flex gap-11 mt-3 mr-7">
              <CheckBox />
              <CheckBox />
            </div>
            <div className="flex gap-11  mr-7">
              <CheckBox />
              <CheckBox />
            </div>
            <div className="flex gap-11 mr-7">
              <CheckBox />
              <CheckBox />
            </div>
            <div className="flex gap-11 mr-7">
              <CheckBox />
              <CheckBox />
            </div>
            <div className="flex gap-11 mr-7">
              <CheckBox />
            </div>
          </div>

          <div className="  border-t-2 w-4/3 mr-3  border-gray-300"></div>
        </div>

        {/*right Part*/}
        <div className="sm:w-3/4">
          <div className="sm:flex justify-between mt-2">
            {/*search bar*/}
            <div className="flex sm:w-1/2">
              <div className="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block border px-8 py-2.5 w-full z-20 text-sm text-black rounded-[2px] dark:text-black"
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

            {/*drop down*/}

            <div className="sm:flex items-center gap-2 mt-3 sm:mt-0">
              <span className="text-sm font-medium">Sort by :</span>
              <div className="relative text-left">
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  className="text-[#475156] bg-transparent border focus:outline-none  font-normal rounded-[2px] text-sm px-5 py-2.5 text-center inline-flex items-center"
                  type="button"
                  onClick={toggleDropdown}
                >
                  Most Popular
                  <Image
                    src="/Assets/graydownarrowicon.svg"
                    alt="Dropdown Icon"
                    width={13}
                    height={16}
                    className=" ms-3"
                  />
                </button>

                {isOpen && (
                  <div
                    id="dropdown"
                    className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute right-0 mt-2"
                  >
                    <ul
                      className="py-2 text-sm  text-black dark:text-black"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-100 dark:hover:text-black"
                        >
                          Aluminium Railing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-100 dark:hover:text-black"
                        >
                          Stainless Steel Railing
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="bg-[#F2F4F5] p-3 px-4 mt-5 rounded-[5px] flex justify-between overflow-auto">
            <div className="flex gap-3">
              <span className="sm:text-sm text-xs text-[#5F6C72] ">Active Filters:</span>
              <div className="flex gap-1 items-center">
                <span className="sm:text-sm text-xs">Electronics Devices</span>
                <Image src={"/Assets/crossicon.svg"} width={12} height={12} />
              </div>
              <div className="flex gap-1 items-center">
                <span className="sm:text-sm text-xs">5 Star Rating</span>
                <Image src={"/Assets/crossicon.svg"} width={12} height={12} />
              </div>
            </div>
            <div className="flex justify-between gap-2 text-sm">
              <span className=" font-normal sm:text-sm text-xs">65,859</span>
              <span className="text-[#5F6C72] font-normal sm:text-sm text-xs">Result found</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-4 grid-cols-2 gap-3 mt-5 " onClick={handleProduct}>
            {currentProducts.map((product, index) => (
              <ProductCard2
                key={index}
                imageSrc={product.imageSrc}
                title={product.title}
                oldPrice={product.oldPrice}
                newPrice={product.newPrice}
              />
            ))}
          </div>


          <div className="flex justify-center mt-4">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="px-2.5 rounded-full py-2 mx-1 border border-[#006FAB] disabled:opacity-50"
            >
              <Image src={"Assets/ArrowLeft.svg"} width={20} height={20} />

            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageClick(i + 1)}
                className={`px-4 py-2 mx-2 rounded-full ${currentPage === i + 1 ? 'bg-[#006FAB] text-white' : 'border border-[#006FAB]'}`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-2.5 py-2 mx-2 border border-[#006FAB] rounded-full disabled:opacity-50 hover:bg-blue-500"
            >
              <Image src={"/Assets/bluerightarrowicon.svg"} width={20} height={20} />
            </button>
          </div>

        </div>
      </div>

      <div className="bg-[#006FAB] sm:w-full">
        <div className=" flex-col w-3/4 mx-auto text-center items-center justify-center mt-5 p-5">
          <h1 className="text-3xl text-white mt-10">
            Subscribe to our newsletter
          </h1>

          <div className="text-center justify-center items-center w-1/3 mx-auto my-3">
            <p className="text-xs font-normal text-white">
              Praesent egestas. Donec vehicula tempor libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
            </p>
          </div>

          <div className="mx-auto mt-8 relative bg-white dark:bg-gray-50 w-1/2 flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-[5px] gap-2 shadow-2xl focus-within:border-gray-300">
            <input
              id="searchinput"
              placeholder="Email"
              className="px-3 py-1 w-[614px] rounded-md flex-1 outline-none bg-white dark:bg-gray-50 "
            />
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-2 bg-blue-500 text-white fill-white active:scale-95 duration-100 border  overflow-hidden relative rounded-[3px] "
            >
              <span className="flex items-center transition-all opacity-1">
                <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto ">
                  {" "}
                  subcribe
                </span>
                <Image src={"/Assets/whiterightarrowicon.svg"} width={15} height={15} className='ml-2' />
              </span>
            </button>
          </div>

          <hr className="mt-5 w-1/3 mx-auto"></hr>
          <div className="flex justify-center gap-6 items-center w-2/3 mx-auto mt-7 px-12 ">
            <Image src={"/Assets/googleicon.svg"} width={72} height={23.48} />
            <Image src={"/Assets/googleicon.svg"} width={72} height={23.48} />
            <Image src={"/Assets/googleicon.svg"} width={72} height={23.48} />
            <Image src={"/Assets/googleicon.svg"} width={72} height={23.48} />
            <Image src={"/Assets/googleicon.svg"} width={72} height={23.48} />
          </div>
        </div>
      </div>
      <Footer />
    </div >
  );
}

export default index;
