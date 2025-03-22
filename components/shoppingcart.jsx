import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCartContext } from "@/context/cartcontext";
import { useRouter } from "next/router";

const products = [
  {
    id: 1,
    name: "Wireless Gaming Headset",
    price: 150,
    image: "/images/headphones.jpg",
    quantity: 1,
  },
  {
    id: 1,
    name: "Wireless Gaming Headset",
    price: 150,
    image: "/images/headphones.jpg",
    quantity: 1,
  },
];

export default function ShoppingCart() {
  const { cart, removeItem } = useCartContext();
  const [quantity1, setQuantity1] = useState(1);
  const [quantity2, setQuantity2] = useState(1);

  console.log(cart);

  const handleQuantityChange = (productId, action) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        if (action === "increment") {
          return { ...product, quantity: product.quantity + 1 };
        } else if (action === "decrement" && product.quantity > 1) {
          return { ...product, quantity: product.quantity - 1 };
        }
      }
      return product;
    });
  };

  const subTotal = 3320;
  const shipping = 0;
  const discount = 0;
  const tax = 419.79;
  const total = subTotal + shipping + tax;

  const router = useRouter();

  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <div>
      <div className="sm:flex space-x-4 p-2">
        <div className="border rounded-lg  size-auto  sm:w-[872px] overflow-auto w-[370px]">
          <h2 className="text-lg font-bold mb-4 pl-4 pt-4">Shopping Card</h2>
          <div className="grid grid-cols-5 gap-2 lg:mb-4 bg-[#F2F4F5]  border border-1 border-[#E4E7E9]">
            <div className="col-span-2 text-xs text-[#475156] font-bold  p-2 ">
              PRODUCTS
            </div>
            <div className="text-xs text-[#475156] font-bold p-2">PRICE</div>
            <div className="text-xs text-[#475156] font-bold p-2">QUANTITY</div>
            <div className="text-xs text-[#475156] font-bold p-2">
              SUB-TOTAL
            </div>
          </div>
          <div className="flex flex-col space-y-4 pl-4">
            {cart.map((curElem) => {
              return (
                <>
                  <div className="lg:grid grid-cols-5 gap-4 items-center">
                    <div className="col-span-2 lg:flex items-center ">
                      <i
                        class="bi bi-x-circle cursor-pointer"
                        onClick={() => removeItem(curElem.id)}
                      ></i>

                      <div className="ml-4 ">
                        <h3 className=" w-full">{curElem.name}</h3>
                      </div>
                    </div>

                    <div>{curElem.price}</div>

                    <div className="flex items-center space-x-2 ">
                      <button
                        className="bg-gray-100 hover:bg-gray-300 text-[#475156] font-semibold py-1 px-2 rounded-md"
                        onClick={() => handleQuantityChange(1, "decrement")}
                      >
                        -
                      </button>
                      <span className="text-gray-800 font-semibold">
                        {quantity1}
                      </span>
                      <button
                        className="bg-gray-100 hover:bg-gray-300 text-gray-800 font-semibold py-1 px-2 rounded-md"
                        onClick={() => handleQuantityChange(1, "increment")}
                      >
                        +
                      </button>
                    </div>
                    <div className="">${curElem.price * quantity1}</div>
                  </div>
                </>
              );
            })}

            <div>
              {products.map((product) => (
                <div
                  key={product.id}
                  className="grid grid-cols-5 gap-4 items-center"
                >
                  <div className="col-span-2 lg:flex items-center ">
                    <i className="">
                      <Image
                        className="mt-3 lg:mt-0"
                        src={"Assets/XCircle.svg"}
                        alt={"XCircle"}
                        width={30}
                        height={20}
                      />
                    </i>
                    <div>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-14 h-16 object-cover rounded-md"
                      />
                      <div className="ml-4">
                        <h3 className="text-sm font-bold">{product.name}</h3>
                      </div>
                    </div>

                  </div>
                  <div className="text-[#475156] text-sm font-bold">
                    ${product.price}
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      className="bg-gray-100 hover:bg-gray-300 text-gray-800 font-semibold py-1 px-2 rounded-md"
                      onClick={() =>
                        handleQuantityChange(product.id, "decrement")
                      }
                    >
                      -
                    </button>
                    <span className="text-[#191C1F] font-semibold">
                      {product.quantity}
                    </span>
                    <button
                      className="bg-gray-100 hover:bg-gray-300 text-gray-800 font-semibold py-1 px-2 rounded-md"
                      onClick={() =>
                        handleQuantityChange(product.id, "increment")
                      }
                    >
                      +
                    </button>
                  </div>
                  <div className="font-bold text-sm text-[#191C1F]">
                    ${product.price * product.quantity}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex  justify-between pl-4 pr-4 py-4  border-t mt-4 rounded-sm">
            <Link href={"/"}>
              <button className="text-sm border border-[#2DA5F3] text-[#2DA5F3] font-semibold py-2 px-4 flex">
                <Image
                  className="mr-1"
                  src={"Assets/ArrowLeft.svg"}
                  alt={"RightArrow"}
                  width={20}
                  height={20}
                />{" "}
                RETURN TO SHOP
              </button>
            </Link>
            <button className="border border-[#2DA5F3] text-[#2DA5F3] font-semibold py-2 px-4 flex text-sm items-center">
              UPDATE CART
            </button>
          </div>
        </div>

        <div className="border border-1 rounded-lg p-4 lg:size-3/5  mt-6 md:mt-0 lg:mt-0 md:size-2/5">
          <h2 className="text-lg font-bold text-[#191C1F]">Card Totals</h2>
          <div className="space-y-2">
            <div className="flex justify-between mt-4">
              <span className=" text-[#5F6C72] text-sm font-bold">
                Sub-total
              </span>
              <span className="text-[#191C1F] text-sm font-bold">
                ${subTotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#5F6C72] text-sm font-bold">Shipping</span>
              <span className="text-[#191C1F] text-sm font-bold">Free</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#5F6C72] text-sm font-bold">Discount</span>
              <span className="text-[#191C1F] text-sm font-bold">
                -${discount.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#5F6C72] text-sm font-bold">Tax</span>
              <span className="text-[#191C1F] text-sm font-bold">
                ${tax.toFixed(2)}
              </span>
            </div>
          </div>
          <div className="border-t border-gray-300 mt-4 pt-4 flex justify-between">
            <span className="font-bold text-[#191C1F] text-base">Total</span>
            <span className="font-bold text-[#191C1F] text-base">
              ${total.toFixed(2)} USD
            </span>
          </div>

          <button
            className="bg-[#006FAB] text-white font-semibold py-3 w-full mt-5 flex justify-center rounded-sm text-xs items-center "
            onClick={handleCheckout}
          >
            PROCEED TO CHECKOUT
            <Image
              className=""
              src={"Assets/ArrowRight.svg"}
              alt={"RightArrow"}
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
