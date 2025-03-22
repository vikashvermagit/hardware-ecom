import BreadCramp from '@/components/BreadCramp'
import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import Footer from '@/components/Footer'
import StepPer from '@/components/StepPer'
function index() {

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
    ];
    return (
        <div>
            <Navbar />
            <BreadCramp />
            <div className='border rounded-[4px] sm:w-1/2 mx-auto items-center sm:mt-10 mt-3'>

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
                    <StepPer />

                </div>


                <div className='m-2'>
                    <h1 className='text-lg '>Order Activity</h1>
                    <div className="flex flex-col  justify-center">
                        {cardsData.map((card, index) => (
                            <div key={index} className='flex items-center gap-3 mt-3 '>
                                <div className='bg-[#EAF7E9] p-2 border-[#D5F0D3] border-[1px] rounded-[3px]'>
                                    <Image src={card.imageSrc} width={24} height={24} alt="Check Icon" />
                                </div>
                                <div>
                                    <h1 className='text-xs'>{card.heading}</h1>
                                    <span className='text-xs text-[#77878F]'>{card.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default index