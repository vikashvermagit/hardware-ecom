import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function MyCreditWallet() {
  const creditLimit = "100000";
  const creditUsed = "20000";
  const availableCredit = creditLimit - creditUsed;
  return (
    <div className=" w-full">
      <div className="bg-white  rounded-md border border-[#E4E7E9]">
        <div className="flex justify-between items-center ">
          <h2 className="text-sm font-bold pl-4">MY CREDIT WALLET</h2>
          <Link className="text-blue-500 hover:text-blue-600  " href="/orders">
            <div>
              <Image
                src="Assets/paybutton.svg"
                alt="Logo"
                width={189}
                height={54}
              />
            </div>
          </Link>
        </div>

        <div className="sm:flex border-t p-4">
          <div className="sm:w-[350px] h-[200px]  bg-gray-900 rounded-lg overflow-hidden shadow-lg">
            <div className="px-6 py-4 bg-gray-800">
              <div className="flex items-center ">
                <div className="text-white sm:text-base text-sm">
                  PRO H-WARE <br></br>CREDIT WALLET
                </div>
                <Image
                  className="ml-10"
                  src="/Assets/proh 1.svg"
                  alt="Logo"
                  width={145}
                  height={71}
                />
              </div>
              <div className="sm:mt-14 mb-2 text-gray-400 mt-10">
                4145 895XX XXXX 9873
              </div>
              <div className="text-white font-semibold">Samantha Bowman</div>
            </div>
          </div>

          <div className="bg-white p-4  ">
            <div className="mb-4">
              <h2 className="text-xs font-bold mt-2">My Credit Limit</h2>
              <p className="text-sm font-bold mt-2">
                ₹{creditLimit.toLocaleString()}
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xs font-semibold">Credit Used</h3>
              <p className="text-sm font-bold mt-2">
                ₹{creditUsed.toLocaleString()}
              </p>
            </div>
            <div>
              <h3 className="text-xs font-semibold">Available Credit</h3>
              <p className="text-sm font-bold mt-2">
                ₹{availableCredit.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
