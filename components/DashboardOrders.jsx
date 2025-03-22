import { React, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function DashboardOrders() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const router = useRouter();

  const handleViewDetails = () => {
    router.push("/dashboardorderhistory");
  };

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
      status: "COMPLETED",
      statusColor: "font-bold text-[#2DB224]",
      date: "Feb 2, 2019 19:28",
      total: "$2,300 (5 Products)",
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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = orders.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(orders.length / itemsPerPage)) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div>
      <div className="bg-white  rounded-md border font-gilroy-bold font-semibold ">
        <div className="flex justify-between items-center m-3.5">
          <h2 className="text-sm  ">ORDER HISTORY</h2>
        </div>
        <div className="overflow-x-auto mt-5">
          <table className="lg:w-full">
            <thead>
              <tr className="bg-gray-100 text-xs ">
                <th className="py-2.5 px-4 text-left">ORDER ID</th>
                <th className="py-2.5 px-4 text-left">STATUS</th>
                <th className="py-2.5 px-4 text-left">DATE</th>
                <th className="py-2.5 px-4 text-left">TOTAL</th>
                <th className="py-2.5 px-4 text-left">ACTION</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {currentItems.map((order, index) => (
                <tr key={index} className={index % 2 === 0 ? "" : ""}>
                  <td className="py-2 px-4 text-[#191C1F]">{order.id}</td>
                  <td className="py-2 px-4">
                    <span
                      className={`px-2 py-1 rounded-full  ${order.statusColor}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-2 px-4 text-[#5F6C72]">{order.date}</td>
                  <td className="py-2 px-4 text-[#475156]">{order.total}</td>
                  <td className="py-2 px-4">
                    <div
                      className="text-[#2DA5F3] flex cursor-pointer text-sm"
                      onClick={handleViewDetails}
                    >
                      View Details
                      <Image
                        className="ml-1"
                        src={"Assets/ArrowRightsmallblue.svg"}
                        alt={"RightArrow"}
                        width={16}
                        height={16}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-4 bottom-0 left-0 right-0 bg-white p-4">
          <div className="flex items-center">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="mx-1 px-3 py-1 rounded-md  disabled:cursor-not-allowed"
            >
              <Image
                src="/Assets/prev-arrow.svg"
                alt="Previous"
                width={40}
                height={40}
              />
            </button>
            <div className="flex">
              {Array.from(
                { length: Math.ceil(orders.length / itemsPerPage) },
                (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => handlePageChange(i + 1)}
                    className={`mx-1 px-3 py-1 rounded-3xl w-12 h-12 ${
                      currentPage === i + 1
                        ? "bg-[#006FAB] text-white"
                        : "bg-white border border-1 border-[#E4E7E9]"
                    }`}
                  >
                    {i + 1}
                  </button>
                )
              )}
            </div>
            <button
              onClick={handleNextPage}
              disabled={currentPage === Math.ceil(orders.length / itemsPerPage)}
              className="mx-1 px-3 py-1 rounded-3xl disabled:cursor-not-allowed"
            >
              <Image
                src="/Assets/next-arrow.svg"
                alt="Next"
                width={40}
                height={40}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardOrders;
