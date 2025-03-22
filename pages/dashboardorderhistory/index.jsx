import Navbar from '@/components/Navbar'
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import BreadCramp from '@/components/BreadCramp';
import ShoppingCart from '@/components/shoppingcart';
import DashboardOrders from '@/components/DashboardOrders';
import AccountDashboard from '@/components/AccountDashboard';
import TrackOrders from '@/components/TrackOrders';
import StepPer from '@/components/StepPer';
import { useRouter } from 'next/router';


function dashboardorderhistory() {

    const router = useRouter();

    const cardsData = [
        {
            imageSrc: "/Assets/checkicon.svg",
            heading: "Your order has been delivered. Thank you for shopping at Clicon!",
            date: "23 Jan, 2021 at 7:32 PM"
        },
        {
            imageSrc: "/Assets/usericon.svg",
            heading: "Our delivery man (John Wick) Has picked-up your order for delvery. ",
            date: "23 Jan, 2021 at 7:32 PM"
        },
        {
            imageSrc: "/Assets/locationicon.svg",
            heading: "Our delivery man (John Wick) Has picked-up your order for delvery. ",
            date: "23 Jan, 2021 at 7:32 PM"
        },
        {
            imageSrc: "/Assets/mapicon.svg",
            heading: "Our delivery man (John Wick) Has picked-up your order for delvery. ",
            date: "23 Jan, 2021 at 7:32 PM"
        },
        {
            imageSrc: "/Assets/checkcircleicon.svg",
            heading: "Our delivery man (John Wick) Has picked-up your order for delvery. ",
            date: "23 Jan, 2021 at 7:32 PM"
        },
        {
            imageSrc: "/Assets/noteicon.svg",
            heading: "Our delivery man (John Wick) Has picked-up your order for delvery. ",
            date: "23 Jan, 2021 at 7:32 PM"
        },
    ];

    const products = [
        {
            id: 1,
            imageSrc: "/Assets/productimg.png",
            title: "Stainless steel Railings",
            subtitle: "Stainless steel",
            price: 500,
            quantity: 1,
            total: 1230,
        },
        {
            id: 1,
            imageSrc: "/Assets/productimg.png",
            title: "Stainless steel Railings",
            subtitle: "Stainless steel",
            price: 500,
            quantity: 1,
            total: 1230,
        },
    ];

    return (
        <div>
            <Navbar />
            <BreadCramp  />

            <div className=' sm:w-3/4 mx-auto border mt-5'>

                <div className='mx-5 mt-2 flex gap-3'>
                    <Image src={"/Assets/backicon.svg"} width={24} height={24} onClick={() => router.back()} className="cursor-pointer" />
                    <h1>Order Details</h1>
                </div>
                <hr className='my-2'></hr>


                <div className='border-[1px] flex items-center justify-between border-[#F7E99E] rounded-[4px] bg-[#FDFAE7] m-5 '>

                    <div className='m-3'>
                        <h1 className='m-2 text-xl'>#87854516</h1>
                        <div className='sm:flex gap-3 m-2 text-sm mt-2 sm:mt-0'>
                            <span>4 Products</span>
                            <p>Order Placed in 17 Jan, 2021 at 7:32 PM</p>
                        </div>
                    </div>

                    <div className='m-3 text-2xl font-medium'>
                        <h1>$1199.00</h1>
                    </div>

                </div>

                <div className='m-5'>
                    <span className='text-sm'>Order expected arrival 23 Jan, 2021</span>
                </div>

                <StepPer />

                <hr className='mt-2'></hr>
                <div className='m-5'>
                    <h1 className='text-lg font-medium '>Order Activity</h1>
                    <div className="flex flex-col  justify-center">
                        {cardsData.map((card, index) => (
                            <div key={index} className='flex items-center gap-3 mt-3 '>
                                <div className='bg-[#EAF7E9] p-2 border-[#D5F0D3] border-[1px] rounded-[3px]'>
                                    <Image src={card.imageSrc} width={24} height={24} alt="Check Icon" />
                                </div>
                                <div>
                                    <h1 className='text-sm font-medium'>{card.heading}</h1>
                                    <span className='text-sm font-medium text-[#77878F]'>{card.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                <hr className='my-2'></hr>
                <h1 className='m-5 text-lg font-medium'>Product (02)</h1>

                <div>
                    <div className='border w-full bg-[#E4E7E9] flex justify-between '>
                        <div className='w-1/2 mx-5'>
                            <h1 className=' my-2 text-sm font-medium'>PRODUCTS</h1>
                        </div>

                        <div className='flex w-1/2 border font-medium justify-between mr-16 items-center text-sm'>
                            <span>PRICE</span>
                            <span>QUANTITY</span>
                            <span>SUB-TOTAL</span>
                        </div>

                    </div>

                    {products.map((product) => (

                        <div>

                            <div className='flex  items-center'>
                                <div className='flex gap-1  items-center  w-1/2'>
                                    <Image src={product.imageSrc} width={80} height={80} className='m-5' />

                                    <div>
                                        <h1 className='text-[#2DA5F3] font-medium text-xs'>{product.title}</h1>
                                        <h1 className='text-sm font-medium'>{product.subtitle}</h1>
                                    </div>
                                </div>


                                <div className='flex w-1/2 font-medium mr-16 p-6 justify-between items-center text-sm'>
                                    <span>${product.price}</span>
                                    <span>x{product.quantity}</span>
                                    <span>${product.total}</span>
                                </div>
                            </div>
                            <hr className='my-2 mx-8'></hr>

                        </div>
                    ))}


                </div>


                <hr className='my-2'></hr>


                <div className='sm:flex'>

                    <div className='sm:w-1/3 sm:m-5 m-3 mt-0'>
                        <h1 className='mt-3 mb-3 text-lg font-medium'>Billing Address</h1>
                        <span className='text-sm font-medium'>kevin baet</span>
                        <p className='mt-3 mb-3 font-medium text-[#5F6C72] text-sm'>East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh</p>
                        <div className=' text-sm'>
                            <span className='font-medium' >Phone number : </span>
                            <span className='font-medium text-[#5F6C72]'>+91 9569823657</span>
                        </div>
                        <div className='text-sm'>
                            <span className='font-medium' >Email Address : </span>
                            <span className='font-medium text-[#5F6C72]'>kevin@gmail.com</span>
                        </div>
                    </div>

                    <div className="inline-block h-[180px] min-h-[0.5em] w-0.5 self-stretch bg-gray-200  sm:my-auto mx-auto"></div>


                    <div className='sm:w-1/3 m-5 '>
                        <h1 className='sm:mt-3 mb-3 text-lg font-medium'>Shipping Address</h1>
                        <span className='text-sm font-medium'>kevin baet</span>
                        <p className='mt-3 mb-3 font-medium text-[#5F6C72] text-sm'>East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh</p>
                        <div className=' text-sm'>
                            <span className='font-medium' >Phone number : </span>
                            <span className='font-medium text-[#5F6C72]'>+91 9569823657</span>
                        </div>
                        <div className='text-sm'>
                            <span className='font-medium' >Email Address : </span>
                            <span className='font-medium text-[#5F6C72]'>kevin@gmail.com</span>
                        </div>
                    </div>

                    <div className="inline-block h-[180px] min-h-[0.5em] w-0.5 self-stretch bg-gray-200  my-auto mx-auto"></div>

                    <div className='sm:w-1/3 m-5 '>
                        <h1 className='sm:mt-3 mb-3 text-lg font-medium'>Order Notes</h1>
                        <p className='mt-3 mb-3 font-medium text-[#5F6C72] text-sm'>Donec ac vehicula turpis. Aenean sagittis est eu arcu ornare, eget venenatis purus lobortis. Aliquam erat volutpat. Aliquam magna odio.</p>

                    </div>

                </div>


            </div>

            <Footer />
        </div>
    )
}

export default dashboardorderhistory;
