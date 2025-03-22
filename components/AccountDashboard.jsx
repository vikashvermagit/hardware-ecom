import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

function AccountDashboard({ side, setSideName }) {

  const router = useRouter();

  const orders = [
    {
      id: "#96459761",
      status: "IN PROGRESS",
      statusColor: "font-bold text-[#006FAB]",
      date: "Dec 30, 2019 05:18",
      total: "$1,500 (5 Products)",
    },
    {
      id: "#71667167",
      status: "COMPLETED",
      statusColor: "font-bold text-[#2DB224]",
      date: "Feb 2, 2019 19:28",
      total: "$80 (1 Products)",
    },
    {
      id: "#95214362",
      status: "CANCELLED",
      statusColor: "font-bold text-[#EE5858]",
      date: "Mar 20, 2019 23:14",
      total: "$160 (3 Products)",
    },
    {
      id: "#71667167",
      status: "COMPLETED",
      statusColor: "font-bold text-[#2DB224]",
      date: "Feb 2, 2019 19:28",
      total: "$80 (1 Products)",
    },
    {
      id: "#51746385",
      status: "COMPLETED",
      statusColor: "font-bold text-[#2DB224]",
      date: "Feb 2, 2019 19:28",
      total: "$2,300 (5 Products)",
    },
    {
      id: "#51746385",
      status: "CANCELLED",
      statusColor: "font-bold text-[#EE5858]",
      date: "Dec 30, 2019 07:52",
      total: "$70 (1 Products)",
    },
    {
      id: "#67397174",
      status: "COMPLETED",
      statusColor: "font-bold text-[#2DB224]",
      date: "Dec 7, 2019 23:24",
      total: "$220 (1 Products)",
    },
  ];

  const handleEditAccount = () => {
    setSideName("setting");
  };
  return (
    <div className="">

      <div className=" sm:px-4">
        <div className="sm:max-w-4xl sm:mx-auto">
          <h1 className="text-xl font-bold mb-2">Hello, Samantha Bowman</h1>
          <p className="text-[#475156] lg:pr-56 text-sm line-clamp-3">
            From your account dashboard, you can easily check &amp; view your
            Recent Orders, manage your Shipping and Billing Addresses and edit
            your Password and Account Details.
          </p>
        </div>
      </div>

      <div className="bg-white pt-6 pb-4 rounded-lg flex">
        <div className="flex sm:items-center justify-between mb-6"></div>
        <div className="sm:flex space-x-5 w-full items-center">
          <div className="pr-4 border p-3 border-1 border-[#E4E7E9] rounded-md w-full">
            <h3 className="text-sm font-bold pb-2  border-b border-[#E4E7E9]">
              ACCOUNT INFO
            </h3>
            <div className="flex items-center mt-4 ">
              <div className=" rounded-full">
                <Image
                  src="/images/profile.jpg"
                  alt="Profile Picture"
                  width={48}
                  height={48}
                  objectFit="cover"
                  className=""
                />
              </div>
              <div className="ml-5 ">
                <h2 className="text-base font-bold  ">Kevin Gilbert</h2>
                <p className="text-[#5F6C72] text-sm">Dhaka-1207Bangladesh</p>
              </div>
            </div>
            <p className=" mt-5">
              <span className="font-bold text-sm">Email: </span>
              <span className="text-[#5F6C72] text-sm font-bold">
                kevin.gilbert@gmail.com
              </span>
            </p>
            <p className="mt-2">
              <span className="font-bold text-sm">Sec Email : </span>
              <span className="text-[#5F6C72] text-sm font-bold">
                kevin.gilbert@gmail.com
              </span>
            </p>
            <p className=" mb-4">
              <span className="font-bold text-sm">Phone</span>
              <span className="text-[#5F6C72] text-sm font-bold">
                : +1-202-555-0118
              </span>
            </p>
            <button
              className="border border-[#D5EDFD] text-[#2DA5F3] px-4 py-3 text-sm font-bold"
              onClick={handleEditAccount}
            >
              EDIT ACCOUNT
            </button>
          </div>
          <div className="pr-4 mt-5 sm:mt-0 border p-3 border-1 border-[#E4E7E9] rounded-md w-full">
            <h3 className="text-sm font-bold pb-2  border-b border-[#E4E7E9]">
              BILLING ADDRESS
            </h3>
            <p className="text-l font-bold mb-4 mt-4">Kevin Gilbert</p>
            <p className="text-[#5F6C72] text-sm mb-2">
              East Tejturi Bazar, Word No. 04, Road No. 13 <br /> House no. 12/D
              C, Flat No. 5D, <br /> Dhaka - 1200, Bangladesh
            </p>
            <p className=" mb-2">
              <span className="font-bold text-sm">Phone Number</span>
              <span className="text-[#5F6C72] text-sm font-bold">
                : +1-202-555-0118
              </span>
            </p>
            <p className=" mb-4">
              <span className="font-bold text-sm">Email</span>:
              <span className="text-[#5F6C72] text-sm font-bold">
                {" "}
                kevin.gilbert@gmail.com
              </span>
            </p>
            <button
              className="border border-[#D5EDFD] text-[#2DA5F3] px-4 py-3 text-sm font-bold"
              onClick={handleEditAccount}
            >
              EDIT ADDRESS
            </button>
          </div>

          <div className="flex flex-col mt-4 w-full">
            <div className="bg-[#EAF6FE] text-[#475156] px-4  py-4 m-2 flex space-x-3">
              <div className="flex flex-row">
                <Image
                  className="mr-1"
                  src={"Assets/Icon1.svg"}
                  alt={"RightArrow"}
                  width={40}
                  height={40}
                />
                <div className=" flex flex-col text-[#475156] text-sm ml-3">
                  <span className="font-bold text-xl">154</span> Total Orders
                </div>
              </div>
            </div>
            <div className="bg-[#FFF3EB] text-[#191C1F] px-4 py-4 m-2 flex space-x-3">
              <div className="flex flex-row">
                <Image
                  className="mr-1"
                  src={"Assets/Icon2.svg"}
                  alt={"RightArrow"}
                  width={40}
                  height={40}
                />
                <div className=" flex flex-col text-[#475156] text-sm ml-3">
                  <span className="font-bold text-xl">05</span> Pending Orders
                </div>
              </div>
            </div>
            <div className="bg-[#EAF7E9] text-[#191C1F] px-4 py-4 m-2 flex space-x-3">
              <div className="flex flex-row">
                <Image
                  className="mr-1"
                  src={"Assets/Icon3.svg"}
                  alt={"RightArrow"}
                  width={40}
                  height={40}
                />
                <div className=" flex flex-col text-[#475156] text-sm ml-3">
                  <span className="font-bold text-xl">149</span> Total Orders
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border border-1 border-[#E4E7E9] ">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-sm font-semibold ">MY CREDIT WALLET</h2>
          <div
            className="text-[#006FAB] flex cursor-pointer"
            onClick={() => setSideName("mycreditwallet")}
          >
            Know More
            <Image
              className="ml-1"
              src={"Assets/ArrowRightblue.svg"}
              alt={"RightArrow"}
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="sm:w-[350px] h-[200px]  bg-gray-900 rounded-lg overflow-hidden shadow-lg">
          <div className="px-6 py-4 bg-gray-800">
            <div className="flex items-center ">
              <div className="text-white text-base">
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
            <div className="mt-14 mb-2 text-gray-400">4145 895XX XXXX 9873</div>
            <div className="text-white font-semibold">Samantha Bowman</div>
          </div>
        </div>
      </div>

      <div className="bg-white  rounded-lg border border-gray-200 mt-4">
        <div className="flex justify-between items-center m-4">
          <h2 className="text-sm font-semibold">RECENT ORDER</h2>
          <div
            className="text-[#006FAB] flex text-sm cursor-pointer"
            onClick={() => setSideName("orderhistory")}
          >
            View All
            <Image
              className="ml-1"
              src={"Assets/ArrowRightblue.svg"}
              alt={"RightArrow"}
              width={16}
              height={16}
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="lg:w-full">
            <thead>
              <tr className="bg-gray-100 text-xs">
                <th className="py-2 px-4 text-left">ORDER ID</th>
                <th className="py-2 px-4 text-left">STATUS</th>
                <th className="py-2 px-4 text-left">DATE</th>
                <th className="py-2 px-4 text-left">TOTAL</th>
                <th className="py-2 px-4 text-left">ACTION</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {orders.map((order, index) => (
                <tr key={index} className={index % 2 === 0 ? "" : ""}>
                  <td className="py-2 px-4">{order.id}</td>
                  <td className="py-2 px-4">
                    <span
                      className={`px-2 py-1 rounded-full  ${order.statusColor}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-2 px-4">{order.date}</td>
                  <td className="py-2 px-4">{order.total}</td>
                  <td className="py-2 px-4">
                    <Link
                      className="text-[#2DA5F3] flex"
                      href={`/dashboardorderhistory`}
                    >
                      View Details
                      <Image
                        className="ml-1"
                        src={"Assets/ArrowRightsmallblue.svg"}
                        alt={"RightArrow"}
                        width={16}
                        height={16}
                      />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AccountDashboard;
