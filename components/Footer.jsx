import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
    return (
        <div className=''>
            <footer className="bg-white dark:bg-gray-900 mt-5">
                <div className="mx-auto w-3/4 max-w-screen-xl ">
                    <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-10 md:grid-cols-4">
                        <div>
                            <Image src={"/Assets/logo.svg"} width={159} height={48} />
                            <ul className="text-gray-500 text-sm mt-5 dark:text-gray-400 font-medium">
                                <li className="text-xs mb-2">
                                    <span>Customer Supports:</span>
                                </li>
                                <li className="mb-2 text-lg">
                                    <span>629 555-0129</span>
                                </li>

                                <li className="text-xs mb-2">
                                    <span>4517 Washington Ave. Manchester, Kentucky 39495</span>
                                </li>

                                <li className="text-xs">
                                    <span>info@kinbo.com</span>
                                </li>
                            </ul>

                        </div>
                        <div>
                            <h2 className="mb-6 text-base font-semibold text-gray-900 uppercase dark:text-white">Top Category</h2>
                            <ul className="text-gray-500 text-xs dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Computer & Laptop</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">SmartPhone</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Headphone</Link>
                                </li>
                                <li className="mb-4 text-white  flex">
                                    <div className=" mt-2 mx-2 border-t-2 w-1/6 items-center justify-center text-left border-[#EBC80C]">

                                    </div>
                                    <Link href="#" className="hover:underline text-sm"> Accessories</Link>

                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Camera & Photo</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">TV & Homes</Link>
                                </li>
                                <li>
                                    <div className='flex justify-normal gap-1 items-center cursor-pointer '>
                                        <h1 className='text-sm text-[#EBC80C] '>Browse All Product</h1>
                                        <Image src={"/Assets/yellowarrowicon.svg"} width={20} height={20} />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className=''>
                            <h2 className="mb-4 text-base font-semibold text-gray-900 uppercase dark:text-white">Quick links</h2>
                            <ul className="text-gray-500 text-xs dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Shop Product</Link>
                                </li>
                                <li className="mb-4">
                                    <a href="#" class="hover:underline">Shoping Cart</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline"> Track Order</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline"> Customer Help</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline"> About Us</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download APP</h2>
                            <Image src={"/Assets/appstorelogo.svg"} width={176} height={69} />
                            <Image src={"/Assets/appstorelogo.svg"} width={176} height={69} className="mt-2" />
                        </div>
                    </div>

                </div>
            </footer>

        </div>
    )
}

export default Footer