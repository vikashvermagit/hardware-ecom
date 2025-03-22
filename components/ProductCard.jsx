import React from 'react'
import Image from 'next/image'

function ProductCard({ imageSrc, title, oldPrice, newPrice }) {
    return (
        <div className='group'>
            <div className='bg-white border mx-auto rounded-[5px] relative'>
                <div className='relative overflow-hidden'>
                    <Image
                        src={imageSrc}
                        width={202}
                        height={172}
                        className='mx-auto object-cover p-2'
                        alt={title}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-11/12 h-full mx-2 mt-4">
                            <div className="absolute inset-0 bg-black/20 rounded-[2px] p-5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <Image
                                    src="/Assets/whitehearticon.svg"
                                    width={34}
                                    height={34}
                                    className='bg-[#006FAB] rounded-full p-2'
                                    alt="Heart Icon"
                                />
                                <Image
                                    src="/Assets/blackcarticon.svg"
                                    width={34}
                                    height={34}
                                    className='bg-white rounded-full p-2'
                                    alt="Cart Icon"
                                />
                                <Image
                                    src="/Assets/eyeicon.svg"
                                    width={34}
                                    height={34}
                                    className='bg-white rounded-full p-2'
                                    alt="Eye Icon"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <h1 className='mx-4 text-xs font-normal line-clamp-2 my-3'>
                    {title}
                </h1>

                <div className='gap-2 flex mx-4 mb-4 text-center line-clamp-3'>
                    <h2 className='text-sm font-normal text-[#ADB7BC] line-through'>
                        ${oldPrice}
                    </h2>
                    <h2 className='text-sm text-[#2DA5F3] font-normal'>
                        ${newPrice}
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default ProductCard