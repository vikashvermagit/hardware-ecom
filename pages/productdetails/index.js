import BreadCramp from "@/components/BreadCramp";
import Navbar from "@/components/Navbar";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Footer from "@/components/Footer";
import Counter from "@/components/Counter";
import { useRouter, useSearchParams } from "next/navigation";
import useProducts from "@/hooks/useProducts";
import { useCartContext } from "@/context/cartcontext";

function index() {
  const { addToCart } = useCartContext();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("Description");
  const { currentproduct, fetchcurrentProduct } = useProducts();
  const product_id = useSearchParams().get("id");
  console.log(product_id);
  console.log(currentproduct);

  useEffect(() => {
    if (product_id) {
      fetchcurrentProduct(product_id);
    }
  }, [product_id]);

  const tabs = [{ name: "Description" }, { name: "Specifications" }];

  return (
    <div className="w-[100vw]" >
      <Navbar />
      <BreadCramp />

      {/*Product Detail*/}
      <div className="sm:flex pt-10 sm:p-10 p-5 sm:w-3/4 mx-auto ">
        <Image src={"/images/headphones.jpg"} width={300} height={300} />
        <div className="sm:ml-16 mt-9 ">
          <div className="flex justify-between sm:gap-16">
            <div className="flex-row">
              <h1 className="text-base font-bold">{currentproduct?.name}</h1>

              <div className="flex mt-3 ">
                <span className="text-[#5F6C72] text-sm ">Sku </span>
                <span className="text-[#191C1F] text-sm  ">
                  {" "}
                  : A12B42VH
                </span>
              </div>

              <div className="flex mt-3">
                <span className="text-[#5F6C72] text-sm font-medium">
                  Brand
                </span>
                <span className="text-[#191C1F] text-sm font-medium">
                  : Pro H-Ware Systems
                </span>
              </div>

              <div className="flex gap-2 mt-3 font-medium">
                <span className="text-[#2DA5F3] text-lg">
                  {currentproduct?.price}
                </span>
                <span className="text-[#5F6C72] text-lg line-through">
                  $1999.00
                </span>
              </div>
            </div>

            <div>
              <div className="flex mt-8">
                <span className="text-[#5F6C72] text-sm font-medium">
                  Availability
                </span>
                <span className="text-[#2DB224] text-sm font-medium">
                  : In Stock
                </span>
              </div>

              <div className="flex mt-2">
                <span className="text-[#5F6C72] text-sm font-medium">
                  Category
                </span>
                <span className="text-[#191C1F] text-sm font-medium">
                  : {currentproduct?.category}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-5 mx-auto border-t-2 w-full items-center justify-center text-center border-gray-300"></div>

          <div>
            <div className="flex justify-between gap-3 mt-8">
              <div>
                <Counter />
              </div>

              <div
                onClick={() => {
                  addToCart(currentproduct), router.push("/shoppingcart");
                }}
              >
                <button className="bg-[#006FAB] text-white sm:text-sm text-xs sm:px-9 py-3 px-2 sm:py-3 rounded flex gap-2 sm:items-center sm:justify-center">
                  ADD TO CART
                  <Image
                    src={"/Assets/cart2icon.svg"}
                    width={20}
                    height={20}
                    className="my-auto sm:ml-8"
                  />
                </button>
              </div>

              <div>
                <button className="bg-transparent text-[#006FAB] sm:text-xs border-[2px] border-[#006FAB] sm:px-7 sm:py-3 px-1 py-2 rounded flex gap-2">
                  BUY NOW
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <h1 className="text-sm font-medium">share product :</h1>
              <Image src={"/Assets/copyicon.svg"} width={24} height={24} />
              <Image src={"/Assets/facebookicon.svg"} width={22} height={22} />
              <Image src={"/Assets/twittericon.svg"} width={22} height={22} />
              <Image src={"/Assets/pinterest.svg"} width={22} height={22} />
            </div>
          </div>
        </div>
      </div>

      {/*Product Information*/}
      <div className="border sm:w-3/4 p-1 mx-auto items-center text-center rounded-[5px] ">
        <div className="text-sm  font-normal  text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex justify-center mt-3">
            {tabs.map((tab) => (
              <li key={tab.name} className="me-2">
                <Link href="#" legacyBehavior>
                  <a
                    onClick={() => setActiveTab(tab.name)}
                    className={`inline-block px-4 pb-2 border-b-2 rounded-t-lg ${activeTab === tab.name
                      ? "text-black border-orange-500"
                      : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                      }`}
                  >
                    {tab.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className=" mx-auto border-t-2 w-full items-center justify-center text-center border-gray-300"></div>

        <div className="sm:flex sm:justify-between m-8">
          <div className="sm:w-2/5">
            <h1 className="text-sm font-bold text-left"> Description </h1>
            <p className="text-xs mt-3 text-left ">
              The most powerful MacBook Pro ever is here. With the blazing-fast
              M1 Pro or M1 Max chip — the first Apple silicon designed for pros
              — you get groundbreaking performance and amazing battery life. Add
              to that a stunning Liquid Retina XDR display, the best camera and
              audio ever in a Mac notebook, and all the ports you need. The
              first notebook of its kind, this MacBook Pro is a beast. M1 Pro
              takes the exceptional performance of the M1 architecture to a
              whole new level for pro users.
            </p>
          </div>

          <div>
            <h1 className="text-sm font-bold text-left mt-3 sm:mt-0">Feature</h1>

            <div className="flex gap-1 items-center pt-2 pl-1  ">
              <Image src={"/Assets/truckicon.svg"} width={24} height={24} />
              <span className="text-xs">Free 1 Year Warranty</span>
            </div>

            <div className="flex gap-1 items-center  pt-1 pl-1 ">
              <Image src={"/Assets/truckicon.svg"} width={24} height={24} />
              <span className="text-xs">Free Shipping & Fasted Delivery</span>
            </div>

            <div className="flex gap-1 items-center pt-1 pl-1 ">
              <Image src={"/Assets/truckicon.svg"} width={24} height={24} />
              <span className="text-xs">Free 1 Year Warranty</span>
            </div>

            <div className="flex gap-1 items-center pt-1 pl-1 ">
              <Image src={"/Assets/truckicon.svg"} width={24} height={24} />
              <span className="text-xs">Free 1 Year Warranty</span>
            </div>
          </div>

          <div className="flex justify-between gap-3">
            <div className=" hidden sm:block h-36 min-h-[0.5em] w-0.5 self-stretch bg-gray-200  my-auto mx-auto"></div>

            <div>
              <h1 className="text-sm font-bold text-left mt-4 sm:mt-0">
                shipping information
              </h1>
              <div className="flex mt-2">
                <span className="text-sm font-medium">Courior</span>
                <span className="text-sm">: 2 - 4 days, free shipping</span>
              </div>

              <div className="flex mt-2">
                <span className="text-sm font-medium">Courior</span>
                <span className="text-sm">: 2 - 4 days, free shipping</span>
              </div>

              <div className="flex mt-2">
                <span className="text-sm font-medium">Courior</span>
                <span className="text-sm">: 2 - 4 days, free shipping</span>
              </div>

              <div className="flex mt-2">
                <span className="text-sm font-medium">
                  Unishop Global Export
                </span>
                <span className="text-sm">: 3 - 4 days, $39.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Products*/}
      <div className="sm:w-3/4 sm:mx-auto  sm:flex justify-between sm:my-16 my-5 mx-5">
        {/*RELATED PRODUCT*/}
        <div className="text-left text-base">
          <h1 className="text-sm">RELATED PRODUCT</h1>
          <div className="bg-white text-black border flex w-60  h-20 rounded-[5px]  sm:mx-auto mt-3 ">
            <Image
              src={"/Assets/mobileimg.png"}
              width={80}
              height={80}
              className="mx-3"
            />
            <div className=" flex-col my-auto mr-3">
              <h1 className="text-xs  font-normal line-clamp-2">
                Bose Sport Earbuds - Wireless Earphones - Bluetooth In in this
                tttt
              </h1>

              <h2 className="text-xs text-[#2DA5F3] mt-2">$1,500</h2>
            </div>
          </div>

          <div className="bg-white text-black border flex w-60  h-20 rounded-[5px]  sm:mx-auto mt-3 ">
            <Image
              src={"/Assets/mobileimg.png"}
              width={80}
              height={80}
              className="mx-3"
            />
            <div className=" flex-col my-auto mr-3">
              <h1 className="text-xs  font-normal line-clamp-2">
                Bose Sport Earbuds - Wireless Earphones - Bluetooth In in this
                tttt
              </h1>

              <h2 className="text-xs text-[#2DA5F3] mt-2">$1,500</h2>
            </div>
          </div>

          <div className="bg-white text-black border flex w-60  h-20 rounded-[5px]  sm:mx-auto mt-3 ">
            <Image
              src={"/Assets/mobileimg.png"}
              width={80}
              height={80}
              className="mx-3"
            />
            <div className=" flex-col my-auto mr-3">
              <h1 className="text-xs  font-normal line-clamp-2">
                Bose Sport Earbuds - Wireless Earphones - Bluetooth In in this
                tttt
              </h1>

              <h2 className="text-xs text-[#2DA5F3] mt-2">$1,500</h2>
            </div>
          </div>
        </div>

        {/*PRODUCT ACCESSORIES*/}
        <div className="text-left text-base my-5 sm:my-0">
          <h1 className="text-sm">PRODUCT ACCESSORIES</h1>
          <div className="bg-white text-black border flex w-60  h-20 rounded-[5px]  sm:mx-auto mt-3 ">
            <Image
              src={"/Assets/mobileimg.png"}
              width={80}
              height={80}
              className="mx-3"
            />
            <div className=" flex-col my-auto mr-3">
              <h1 className="text-xs  font-normal line-clamp-2">
                Bose Sport Earbuds - Wireless Earphones - Bluetooth In in this
                tttt
              </h1>

              <h2 className="text-xs text-[#2DA5F3] mt-2">$1,500</h2>
            </div>
          </div>

          <div className="bg-white text-black border flex w-60  h-20 rounded-[5px]  sm:mx-auto mt-3 ">
            <Image
              src={"/Assets/mobileimg.png"}
              width={80}
              height={80}
              className="mx-3"
            />
            <div className=" flex-col my-auto mr-3">
              <h1 className="text-xs  font-normal line-clamp-2">
                Bose Sport Earbuds - Wireless Earphones - Bluetooth In in this
                tttt
              </h1>

              <h2 className="text-xs text-[#2DA5F3] mt-2">$1,500</h2>
            </div>
          </div>

          <div className="bg-white text-black border flex w-60  h-20 rounded-[5px]  sm:mx-auto mt-3 ">
            <Image
              src={"/Assets/mobileimg.png"}
              width={80}
              height={80}
              className="mx-3"
            />
            <div className=" flex-col my-auto mr-3">
              <h1 className="text-xs  font-normal line-clamp-2">
                Bose Sport Earbuds - Wireless Earphones - Bluetooth In in this
                tttt
              </h1>

              <h2 className="text-xs text-[#2DA5F3] mt-2">$1,500</h2>
            </div>
          </div>
        </div>

        {/*APPLE PRODUCT*/}
        <div className="text-left text-base my-5 sm:my-0">
          <h1 className="text-sm">APPLE PRODUCT</h1>
          <div className="bg-white text-black border flex w-60  h-20 rounded-[5px]  sm:mx-auto mt-3 ">
            <Image
              src={"/Assets/mobileimg.png"}
              width={80}
              height={80}
              className="mx-3"
            />
            <div className=" flex-col my-auto mr-3">
              <h1 className="text-xs  font-normal line-clamp-2">
                Bose Sport Earbuds - Wireless Earphones - Bluetooth In in this
                tttt
              </h1>

              <h2 className="text-xs text-[#2DA5F3] mt-2">$1,500</h2>
            </div>
          </div>

          <div className="bg-white text-black border flex w-60  h-20 rounded-[5px]  sm:mx-auto mt-3 ">
            <Image
              src={"/Assets/mobileimg.png"}
              width={80}
              height={80}
              className="mx-3"
            />
            <div className=" flex-col my-auto mr-3">
              <h1 className="text-xs  font-normal line-clamp-2">
                Bose Sport Earbuds - Wireless Earphones - Bluetooth In in this
                tttt
              </h1>

              <h2 className="text-xs text-[#2DA5F3] mt-2">$1,500</h2>
            </div>
          </div>

          <div className="bg-white text-black border flex w-60  h-20 rounded-[5px]  sm:mx-auto mt-3 ">
            <Image
              src={"/Assets/mobileimg.png"}
              width={80}
              height={80}
              className="mx-3"
            />
            <div className=" flex-col my-auto mr-3">
              <h1 className="text-xs  font-normal line-clamp-2">
                Bose Sport Earbuds - Wireless Earphones - Bluetooth In in this
                tttt
              </h1>

              <h2 className="text-xs text-[#2DA5F3] mt-2">$1,500</h2>
            </div>
          </div>
        </div>

        {/*FEATURED PRODUCTS*/}
        <div className="text-left text-base my-5 sm:my-0">
          <h1 className="text-sm">FEATURED PRODUCTS</h1>
          <div className="bg-white text-black border flex w-60  h-20 rounded-[5px]  sm:mx-auto mt-3 ">
            <Image
              src={"/Assets/mobileimg.png"}
              width={80}
              height={80}
              className="mx-3"
            />
            <div className=" flex-col my-auto mr-3">
              <h1 className="text-xs  font-normal line-clamp-2">
                Bose Sport Earbuds - Wireless Earphones - Bluetooth In in this
                tttt
              </h1>

              <h2 className="text-xs text-[#2DA5F3] mt-2">$1,500</h2>
            </div>
          </div>

          <div className="bg-white text-black border flex w-60  h-20 rounded-[5px]  sm:mx-auto mt-3 ">
            <Image
              src={"/Assets/mobileimg.png"}
              width={80}
              height={80}
              className="mx-3"
            />
            <div className=" flex-col my-auto mr-3">
              <h1 className="text-xs  font-normal line-clamp-2">
                Bose Sport Earbuds - Wireless Earphones - Bluetooth In in this
                tttt
              </h1>

              <h2 className="text-xs text-[#2DA5F3] mt-2">$1,500</h2>
            </div>
          </div>

          <div className="bg-white text-black border flex w-60  h-20 rounded-[5px]  sm:mx-auto mt-3 ">
            <Image
              src={"/Assets/mobileimg.png"}
              width={80}
              height={80}
              className="mx-3"
            />
            <div className=" flex-col my-auto mr-3">
              <h1 className="text-xs  font-normal line-clamp-2">
                Bose Sport Earbuds - Wireless Earphones - Bluetooth In in this
                tttt
              </h1>

              <h2 className="text-xs text-[#2DA5F3] mt-2">$1,500</h2>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default index;
