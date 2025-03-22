import React from 'react'
import Image from 'next/image'
function FunctionsCard() {
    return (
        <div className='hidden sm:block'>
            <div className='sm:w-3/4 mx-auto my-5  flex shadow-[0px_4px_16px_0px_rgba(239,239,239)] rounded-[10px] justify-between overflow-x-hidden'>
                <div className='bg-white text-black flex w-72 h-20 rounded-[10px]  mx-auto  '>
                    <Image src={"/Assets/fasteddelivery.svg"}
                        width={30} height={33.39}
                        className='mx-6' />
                    <div className=' flex-col my-auto font-semibold'>
                        <h1 className='text-xs '>FASTED DELIVERY</h1>

                        <h2 className='text-xs text-gray-400 font-semibold'>
                            Delivery in 24/H
                        </h2>
                    </div>
                </div>

                <div className="inline-block h-[56px] min-h-[0.5em] w-0.5 self-stretch bg-gray-200  my-auto mx-auto"></div>

                <div className='bg-white text-black flex w-72 h-20 rounded-[10px] mx-auto  '>
                    <Image src={"/Assets/Trophy.svg"}
                        width={30} height={33.39}
                        className='mx-6' />
                    <div className=' flex-col my-auto font-medium'>
                        <h1 className='text-xs'>24 HOUR RETURN</h1>

                        <h2 className='text-xs text-gray-400 font-semibold'>
                            100% money-back guarantee
                        </h2>
                    </div>
                </div>

                <div className="inline-block h-[56px] min-h-[0.5em] w-0.5 self-stretch bg-gray-200  my-auto mx-auto"></div>
                <div className='bg-white text-black flex w-72 h-20 rounded-[10px]  mx-auto  '>
                    <Image src={"/Assets/CreditCard.svg"}
                        width={30} height={33.39}
                        className='mx-6' />
                    <div className=' flex-col my-auto font-medium'>
                        <h1 className='text-xs  '>SECURE PAYMENT</h1>

                        <h2 className='text-xs text-gray-400 font-semibold'>
                            Your money is safe
                        </h2>
                    </div>
                </div>

                <div className="inline-block h-[56px] min-h-[0.5em] w-0.5 self-stretch bg-gray-200  my-auto mx-auto"></div>
                <div className='bg-white text-black flex w-72 h-20 rounded-[10px]  mx-auto  '>
                    <Image src={"/Assets/Headphones.svg"}
                        width={30} height={33.39}
                        className='mx-6' />
                    <div className=' flex-col my-auto font-medium'>
                        <h1 className='text-xs'>SUPPORT 24/7</h1>

                        <h2 className='text-xs text-gray-400 font-semibold'>
                            Live contact/message
                        </h2>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default FunctionsCard