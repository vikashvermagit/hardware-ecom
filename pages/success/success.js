"Use Client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function success() {

  const router = useRouter();
  return (
    <div className="">
      <div className="flex py-4 px-5 bg-[#F2F4F5] " aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse w-3/4 mx-auto">
          <li className="inline-flex items-center">
            <Link href="#" passHref>
              <div className="inline-flex items-center text-xs font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-[#5F6C72]">
                <Image
                  src="/Assets/homeicon.svg"
                  alt="Home"
                  width={13}
                  height={14}
                  className="me-2.5"
                />
                Home
              </div>
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <Image
                src="/Assets/carerighticon.svg"
                alt="Arrow"
                width={4}
                height={8}
                className="rtl:rotate-180 mx-1"
              />
              <Link href="#" passHref>
                <div className="inline-flex items-center text-xs font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-[#5F6C72]">
                  Shopping Cart
                </div>
              </Link>
            </div>
          </li>

          <div className="flex items-center">
            <Image
              src="/Assets/carerighticon.svg"
              alt="Arrow"
              width={4}
              height={8}
              className="rtl:rotate-180 mx-1"
            />
            <Link href="#" passHref>
              <div className="inline-flex items-center text-xs font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-[#5F6C72]">
                Checkout
              </div>
            </Link>
          </div>
        </ol>
      </div>

      <div className="flex flex-col items-center justify-center mt-10 p-10 ">
        <Image
          src="/images/CheckCircle.png"
          alt="Success Icon"
          width={64}
          height={64}
          className="mb-4"
        />
        <h2 className="text-2xl font-bold mb-2 text-center">
          Your order is successfully placed
        </h2>
        <p className="text-[#5F6C72]  mb-6 font-bold text-sm text-center">
          Pellentesque sit lectus nec torto tristique consequat quis dictum
          duis. Donec volutpat mollis nulla non facilisis.
        </p>
        <div className="lg:flex md:flex space-x-4 ">
          <button className="bg-white text-[#006FAB] border-opacity-10 border border-[#006FAB] font-semibold p-3 rounded-md flex text-sm " onClick={() => router.push('/accountdashboard')}>
            <Image
              className="mr-1"
              src={"Assets/Stack.svg"}
              alt={"RightArrow"}
              width={20}
              height={20}
            />{" "}
            GO TO DASHBOARD
          </button>
          <button className="bg-[#006FAB] text-white font-semibold p-3 rounded-md flex mt-4 lg:mt-0 md:mt-0" onClick={() => router.push('/dashboardorderhistory')}>
            VIEW ORDER
            <Image
              className="ml-1"
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
