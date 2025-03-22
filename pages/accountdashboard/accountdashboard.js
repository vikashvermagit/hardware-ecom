import React from "react";
import Link from "next/link";
import Image from "next/image";
import AccountDashboard from "@/components/AccountDashboard";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import DashboardOrders from "@/components/DashboardOrders";
import TrackOrders from "@/components/TrackOrders";
import ShoppingCart from "@/components/shoppingcart";
import DashboardSettings from "@/components/DashboardSettings";
import MyCreditWallet from "@/components/MyCreditWallet";

export default function accountdashboard() {
  const [side, setSideName] = useState("dashboard");
  const [isHidden, setIsHidden] = useState(true);

  const toggleDiv = () => {
    setIsHidden(!isHidden);
  };

  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: "/Assets/stackicon.svg",
      side: "dashboard",
    },
    {
      id: 2,
      name: "Order History",
      icon: "/Assets/storefront.svg",
      side: "orderhistory",
    },
    {
      id: 3,
      name: "Track Order",
      icon: "/Assets/location2icon.svg",
      side: "trackorder",
    },
    {
      id: 4,
      name: "Shopping Cart",
      icon: "/Assets/carticon2.svg",
      side: "shoppingcart",
    },
    {
      id: 5,
      name: "My Credit Wallet",
      icon: "/Assets/crediticon.svg",
      side: "mycreditwallet",
    },
    {
      id: 6,
      name: "Settings",
      icon: "/Assets/settingicon.svg",
      side: "setting",
    },
    {
      id: 7,
      name: "Log-out",
      icon: "/Assets/logouticon.svg",
      side: "logout",
    },
  ];

  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, [path]);

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

  return (
    <div>
      <div className="sm:hidden">
        <Image src={"Assets/menu.svg"} width={20} height={20} onClick={toggleDiv} className='' />
      </div>
      <div className="flex sm:w-3/4 sm:mx-auto sm:justify-between mt-5 ">
        <div className={`${isHidden ? 'hidden sm:block' : 'block '} border rounded-[3px] shadow-md h-1/2 sm:w-1/5 py-5 bg-white absolute sm:relative`}>
          {menuList.map((menu) => (
            <div key={menu.id} onClick={() => setSideName(menu.side)}>
              <div
                className={`flex items-center gap-3 text-md sm:px-4 py-2  text-slate-500 hover:bg-[#006FAB] hover:w-full hover:text-white font-medium text-sm cursor-pointer ${side === menu.side ? "bg-[#006FAB] text-white" : ""
                  } `}
              >
                <img
                  src={menu.icon}
                  alt={`${menu.name} icon`}
                  className="w-5 h-5"
                />
                {menu.name}
              </div>
            </div>
          ))}
        </div>

        <div className=" rounded-[4px] sm:w-3/4 w-11/12 mx-auto items-center ">
          {side === "dashboard" && (
            <>
              <AccountDashboard side={side} setSideName={setSideName} />
            </>
          )}

          {side === "orderhistory" && (
            <>
              <DashboardOrders />
            </>
          )}

          {side === "trackorder" && (
            <>
              <TrackOrders />
            </>
          )}
          {side === "shoppingcart" && (
            <>
              <ShoppingCart />
            </>
          )}
          {side === "setting" && (
            <>
              <DashboardSettings />
            </>
          )}
          {side === "mycreditwallet" && (
            <>
              <MyCreditWallet />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
