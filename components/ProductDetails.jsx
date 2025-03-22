import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
import Link from 'next/link';
import Footer from './Footer';

function ProductDetails() {
    const [activeTab, setActiveTab] = useState('Description');

    const tabs = [
        { name: 'Description' },
        { name: 'Specifications' },

    ];
    return (
        <div className=' '>
            <div className='flex pt-10 p-10 w-4/6 mx-auto'>
                <Image src={"/Assets/productimg.png"} width={300} height={300} />
                <div className='p-10'>
                    <div className='flex justify-between gap-4'>

                        <div>
                            for title , price, brand
                        </div>

                        <div>
                            for in stock, category
                        </div>

                    </div>

                    <div className="mt-5 mx-auto border-t-2 w-full items-center justify-center text-center border-gray-300"></div>


                    <div>
                        <div className='flex justify-between'>

                            for quantity, buy now , add to cart
                        </div>

                        <div>
                            share product
                        </div>
                    </div>
                </div>
            </div>

            <div className='border w-3/4 mx-auto items-center text-center rounded-[5px] '>


                <div className="text-sm  font-normal  text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700">

                    <ul className="flex justify-center mt-3">
                        {tabs.map((tab) => (
                            <li key={tab.name} className="me-2">
                                <Link href="#" legacyBehavior>
                                    <a
                                        onClick={() => setActiveTab(tab.name)}
                                        className={`inline-block px-4 pb-2 border-b-2 rounded-t-lg ${activeTab === tab.name
                                            ? 'text-black border-orange-500'
                                            : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
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

                <div className='flex justify-between m-8'>

                    <div className='w-2/5'>
                        <h1 className='text-sm font-bold text-left'> Description </h1>
                        <p className='text-xs mt-3 text-left '>The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast. M1 Pro takes the exceptional performance of the M1 architecture to a whole new level for pro users.</p>
                    </div>

                    <div>
                        <h1 className='text-sm font-bold text-left'>Feature</h1>

                        <div className='flex gap-1 items-center pt-2 pl-1  '>
                            <Image src={"/Assets/truckicon.svg"} width={24} height={24} />
                            <span className='text-xs'>Free 1 Year Warranty</span>
                        </div>

                        <div className='flex gap-1 items-center  pt-1 pl-1 '>
                            <Image src={"/Assets/truckicon.svg"} width={24} height={24} />
                            <span className='text-xs'>Free Shipping & Fasted Delivery</span>
                        </div>

                        <div className='flex gap-1 items-center pt-1 pl-1 '>
                            <Image src={"/Assets/truckicon.svg"} width={24} height={24} />
                            <span className='text-xs'>Free 1 Year Warranty</span>
                        </div>

                        <div className='flex gap-1 items-center pt-1 pl-1 '>
                            <Image src={"/Assets/truckicon.svg"} width={24} height={24} />
                            <span className='text-xs'>Free 1 Year Warranty</span>
                        </div>



                    </div>

                    <div className='flex justify-between gap-3'>
                        <div className="inline-block h-36 min-h-[0.5em] w-0.5 self-stretch bg-gray-200  my-auto mx-auto"></div>

                        <div>
                            <h1 className='text-sm font-bold text-left'>shipping information</h1>
                            <div className='flex mt-2'>
                                <span className='text-sm font-medium'>Courior</span>
                                <span className='text-sm'>: 2 - 4 days, free shipping</span>
                            </div>

                            <div className='flex mt-2'>
                                <span className='text-sm font-medium'>Courior</span>
                                <span className='text-sm'>: 2 - 4 days, free shipping</span>
                            </div>

                            <div className='flex mt-2'>
                                <span className='text-sm font-medium'>Courior</span>
                                <span className='text-sm'>: 2 - 4 days, free shipping</span>
                            </div>

                            <div className='flex mt-2'>
                                <span className='text-sm font-medium'>Unishop Global Export:</span>
                                <span className='text-sm'>:  3 - 4 days, $39.00</span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default ProductDetails