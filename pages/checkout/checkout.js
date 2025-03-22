import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function checkout() {
  const [shipToDifferentAddress, setShipToDifferentAddress] = useState(false);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    companyname: "",
    address: "",
    country: "",
    state: "",
    city: "",
    zipcode: "",
    email: "",
    phonenumber: "",
  });

  const [emailError, setEmailError] = useState("");

  const handleEmail = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value && !emailRegex.test(value)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const router = useRouter();

  const handlePlaceOrder = () => {
    router.push("/success");
  };
  return (
    <div className=" sm:w-3/4 mx-auto">
      <div className="flex py-4 px-5 bg-[#F2F4F5] " aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse ">
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

      <div className="lg:flex lg:space-x-5 md:space-x-5 mt-6 ">
        <div className="bg-white border border-1 rounded-md border-[#E4E7E9] p-6">
          <h2 className="text-lg font-bold mb-4">Billing Information</h2>
          <div className="lg:grid md:grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="username"
                className="block  mb-2 text-[#191C1F]  text-sm font-bold"
              >
                User name
              </label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  id="firstname"
                  placeholder="First name"
                  value={data.firstname}
                  onBlur={(e) =>
                    setData({
                      ...data,
                      firstname: e.target.value,
                    })
                  }
                  className="flex-1 border  border-[#E4E7E9] text-sm text-[#77878F] font-bold rounded-md h-[44px] w-[206px] p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 size-1/2"
                />
                <input
                  type="text"
                  id="lastname"
                  placeholder="Last name"
                  value={data.lastname}
                  onBlur={(e) =>
                    setData({
                      ...data,
                      lastname: e.target.value,
                    })
                  }
                  className="flex-1 border border-[#E4E7E9] text-sm text-[#77878F] font-bold rounded-md h-[44px] p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 size-1/2"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="companyName"
                className="block text-[#191C1F]  text-sm font-bold mb-2 mt-2 md:mt-0 lg:md-0 "
              >
                Company Name (Optional)
              </label>
              <input
                type="text"
                id="companyName"
                placeholder=""
                value={data.companyname}
                onBlur={(e) =>
                  setData({
                    ...data,
                    companyname: e.target.value,
                  })
                }
                className="border border-[#E4E7E9] text-sm text-[#77878F] font-bold rounded-md h-[44px] w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="address"
              className="block text-[#191C1F]  text-sm font-bold mb-2"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              placeholder=""
              value={data.address}
              onBlur={(e) =>
                setData({
                  ...data,
                  address: e.target.value,
                })
              }
              className="border border-[#E4E7E9] text-sm text-[#77878F] font-bold rounded-md h-[44px] p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
          </div>
          <div className="lg:grid md:grid grid-cols-4 gap-4 mt-4">
            <div>
              <label
                htmlFor="country"
                className="block text-[#191C1F]  text-sm font-bold mb-2"
              >
                Country
              </label>
              <select
                id="country"
                value={data.country}
                onBlur={(e) =>
                  setData({
                    ...data,
                    country: e.target.value,
                  })
                }
                className="border border-[#E4E7E9] text-sm text-[#77878F] font-bold rounded-md h-[44px] p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              >
                <option value="" selected disabled>
                  Select...
                </option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                {/* Add country options here */}
              </select>
            </div>
            <div>
              <label
                htmlFor="region"
                className="block text-[#191C1F]  text-sm font-bold mb-2 mt-2 md:mt-0 lg:md-0"
              >
                Region/State
              </label>
              <select
                id="region"
                value={data.state}
                onBlur={(e) =>
                  setData({
                    ...data,
                    state: e.target.value,
                  })
                }
                className="border border-[#E4E7E9] text-sm text-[#77878F] font-bold rounded-md h-[44px] p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              >
                <option value="" selected disabled>
                  Select...
                </option>
                {/* Add region/state options here */}
              </select>
            </div>
            <div>
              <label
                htmlFor="city"
                className="block text-[#191C1F]  text-sm font-bold mb-2 mt-2 md:mt-0 lg:md-0"
              >
                City
              </label>
              <select
                id="city"
                value={data.city}
                onBlur={(e) =>
                  setData({
                    ...data,
                    city: e.target.value,
                  })
                }
                className="border border-[#E4E7E9] text-sm text-[#77878F] font-bold rounded-md h-[44px] p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              >
                <option value="">Select...</option>
                {/* Add city options here */}
              </select>
            </div>
            <div>
              <label
                htmlFor="zipCode"
                className="block text-[#191C1F]  text-sm font-bold mb-2 mt-2 md:mt-0 lg:md-0"
              >
                Zip Code
              </label>
              <input
                type="text"
                id="zipcode"
                placeholder="Zip Code"
                value={data.zipcode}
                onChange={(e) => {
                  const input = e.target.value;
                  const zipCode = input.replace(/\D/g, "");
                  const maxLength = 6; // Example: for 5-digit zip code
                  const formattedZipCode = zipCode.slice(0, maxLength);
                  setData({
                    ...data,
                    zipcode: formattedZipCode,
                  });
                }}
                className="border border-[#E4E7E9] text-sm text-[#77878F] font-bold rounded-md h-[44px] p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label
                htmlFor="email"
                className="block text-[#191C1F]  text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={data.email}
                onChange={handleEmail}
                className={`border border-[#E4E7E9] text-sm text-[#77878F] font-bold rounded-md h-[44px] p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full  ${
                  emailError ? "border-red-500" : ""
                }`}
              />
              {emailError && (
                <p className="text-red-500 text-xs mt-1">{emailError}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-[#191C1F] text-sm font-bold mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phonenumber"
                placeholder="Phone Number"
                maxLength={10}
                value={data.phonenumber}
                onChange={(e) => {
                  const input = e.target.value;
                  const phoneNumber = input.replace(/\D/g, "");
                  setData({
                    ...data,
                    phonenumber: phoneNumber,
                  });
                }}
                className="border border-[#E4E7E9] text-sm text-[#77878F] font-bold rounded-md h-[44px] p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              id="shipToDifferentAddress"
              checked={shipToDifferentAddress}
              onChange={() =>
                setShipToDifferentAddress(!shipToDifferentAddress)
              }
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <label
              htmlFor="shipToDifferentAddress"
              className="ml-2 text-sm text-[text-[#191C1F] font-bold]"
            >
              Ship into different address
            </label>
          </div>
          <div className="mt-4">
            <label
              htmlFor="orderNotes"
              className="block text-[#191C1F] font-bold mb-2 text-lg mt-7"
            >
              Additional Information
            </label>
            <div>
              <label
                htmlFor="orderNotes"
                className="block text-[#191C1F] text-sm mb-2 font-bold mt-7"
              >
                Order Notes (Optional)
              </label>
              <textarea
                id="orderNotes"
                placeholder="Notes about your order, e.g. special notes for delivery"
                className="border border-[#E4E7E9] text-sm text-[#77878F] font-bold rounded-md h-[124px] p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              ></textarea>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white border border-1 rounded-md border-[#E4E7E9] p-6 md:mt-10 mt-6 lg:mt-0">
            <h2 className="text-lg font-bold mb-4">Order Summary</h2>

            <div className="flex items-center mb-4">
              <Image
                src="/images/camera.jpg"
                alt="Canon EOS 1500D DSLR Camera Body"
                width={64}
                height={64}
                className="mr-4"
              />
              <div>
                <p className="text-gray-800 font-bold text-sm">
                  Canon EOS 1500D DSLR Camera Body+ 18-...
                </p>
                <p className="text-gray-600">1 x $70</p>
              </div>
            </div>

            <div className="flex items-center mb-4">
              <Image
                src="/images/headphones.jpg"
                alt="Wired Over-Ear Gaming Headphones"
                width={64}
                height={64}
                className="mr-4"
              />
              <div>
                <p className="text-gray-800 font-bold text-sm">
                  Wired Over-Ear Gaming Headphones with U...
                </p>
                <p className="text-gray-600">3 x $250</p>
              </div>
            </div>

            <div className=" pt-4">
              <div className="flex justify-between mb-2">
                <p className="text-[#5F6C72] text-sm font-bold">Sub-total</p>
                <p className="text-[#191C1F] text-sm font-bold">$320</p>
              </div>
              <div className="flex justify-between mb-2">
                <p className="text-[#5F6C72] text-sm font-bold">Shipping</p>
                <p className="text-[#191C1F] text-sm font-bold">Free</p>
              </div>
              <div className="flex justify-between mb-2">
                <p className="text-[#5F6C72] text-sm font-bold">Discount</p>
                <p className="text-[#191C1F] text-sm font-bold">$24</p>
              </div>
              <div className="flex justify-between mb-4">
                <p className="text-[#5F6C72] text-sm font-bold">Tax</p>
                <p className="text-[#191C1F] text-sm font-bold">$61.99</p>
              </div>
              <div className="flex justify-between font-semibold border-t border-[#E4E7E9] pt-4">
                <p className="text-[#191C1F] text-base font-bold">Total</p>
                <p className="text-gray-800 font-bold text-base">$357.99 USD</p>
              </div>
            </div>

            <button
              className="bg-[#006FAB] text-white font-semibold p-4 rounded w-full mt-4 flex justify-center "
              onClick={handlePlaceOrder}
            >
              PLACE ORDER
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
    </div>
  );
}
