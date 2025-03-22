import React from 'react'
import Image from 'next/image'

function NewsLetter() {
    return (

        <div className='bg-[#006FAB] w-full'>

            <div className=' flex-col w-3/4 mx-auto text-center items-center justify-center mt-5 p-5'>
                <h1 className='text-3xl text-white mt-10'>Subscribe to our newsletter</h1>

                <div className='text-center justify-center items-center w-1/2 mx-auto my-5'>

                    <p className='text-sm font-normal text-white'>
                        rurt rt re er we rwr werf erfwerwqe rer rf  aertwer gfwerwqr werfgerf wer gfwerwqr werfgerf aret wer gfwerwqr werfgerf hwer gfwer
                    </p>

                </div>

                <div className="mx-auto mt-8 relative bg-white dark:bg-gray-50 w-1/2 flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-[5px] gap-2 shadow-2xl focus-within:border-gray-300">
                    <input id='searchinput' placeholder='Email' className="px-3 py-1 w-[614px] rounded-md flex-1 outline-none bg-white dark:bg-gray-50 " />
                    <button type='submit' className="w-full md:w-auto px-6 py-2 bg-black border-black text-white fill-white active:scale-95 duration-100 border  overflow-hidden relative rounded-[5px] ">

                        <span className="flex items-center transition-all opacity-1">
                            <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto"> subcribe</span>
                        </span>
                    </button>
                </div>

                <div className="mt-7 mx-auto border-t-2 w-1/2 items-center justify-center text-center border-gray-300"></div>

                <div className='flex justify-between w-2/3 mx-auto mt-7 px-12'>

                    <Image src={"/Assets/googleicon.svg"} width={72} height={23.48} />
                    <Image src={"/Assets/googleicon.svg"} width={72} height={23.48} />
                    <Image src={"/Assets/googleicon.svg"} width={72} height={23.48} />
                    <Image src={"/Assets/googleicon.svg"} width={72} height={23.48} />
                    <Image src={"/Assets/googleicon.svg"} width={72} height={23.48} />
                </div>

            </div>

        </div>
    )
}

export default NewsLetter