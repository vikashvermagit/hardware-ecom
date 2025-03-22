import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";


function TrackOrders() {
  const router = useRouter();

  const handleTrackOrders = () => {
    router.push('/trackorderdetails');
  }
  return (
    <div className="">
      <div className="flex flex-col p-5">
        <div>
          <h1 className="text-3xl  font-bold">Track Order</h1>
          <p className="mt-4 font-semibold text-base text-[#5F6C72]">
            To track your order, please enter your order ID in the input field
            below and press the "Track Order" button. This was given to you on
            your receipt and in the confirmation email you should have received.
          </p>
        </div>
        <div className="mt-4 space-y-3">
          <div className="flex flex-col sm:flex-row">
            <div className="sm:mr-6 mb-4 sm:mb-0">
              <label className="mb-2 block font-bold text-sm">Order ID</label>
              <input
                type="text"
                placeholder="ID...."
                className="border rounded-md px-2 text-[#77878F] text-sm font-bold py-1 w-full"
              />
            </div>
            <div>
              <label className="mb-2 block font-bold text-sm">
                Billing Email
              </label>
              <input
                type="text"
                placeholder="Email address"
                className="border rounded-md px-2 text-[#77878F] text-sm font-bold py-1 w-full"
              />
            </div>
          </div>
        </div>
        <h4 className="mt-3 flex text-[#5F6C72] font-bold text-sm">
          {" "}
          <Image
            className="mr-2 "
            src={"Assets/info.svg"}
            alt={"info"}
            width={20}
            height={20}
          />
          Order ID that we sent to your email address
        </h4>
      </div>
      <button className="bg-[#006FAB] text-white py-3 font-gilroy-semibold px-4 rounded-md m-4 flex text-sm" onClick={handleTrackOrders}>
        TRACK ORDER
        <Image
          className="ml-1"
          src={"Assets/ArrowRight.svg"}
          alt={"RightArrow"}
          width={20}
          height={20}
        />
      </button>
    </div>
  );
}

export default TrackOrders;
