import Image from 'next/image'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import imageone from '@/public/Assets/splashimageone.svg'
import imagetwo from '@/public/Assets/splashimagetwo.svg'


export default function Home() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const buttonHandler = () => {
        let btn = document.getElementById("btn");
        btn.addEventListener('click', function () {
            btn.style.backgroundColor = "#459ECF"
        })
        setTimeout(() => {
            btn.style.backgroundColor = ""
        }, 400);
    }

    return (
        <>
            <div className='main w-screen h-[100vh]'>
                {/* Slider */}
                <div className='w-full overflow-hidden pb-6 pt-6'>
                    <Slider {...settings}>
                        <div className=''>
                            <div className='flex flex-col justify-center items-center'>
                                <h1 className='text-[30px] leading-10 tracking-[3%] text-center text-[#003964] font-normal'>Welcome to</h1>
                                <Image src={"/Assets/splashsliderimage.jpg"} alt='' width={268} height={127} className='object-cover w-[268px] h-[127px]' />
                            </div>
                            <Image src={imageone} alt='' width={300} height={400} className='w-screen h-[350px] object-cover ' />
                        </div>

                        <div className=''>
                            <div className='flex flex-col justify-center items-center gap-5'>
                                <h1 className='text-[30px] leading-10 tracking-[1px]  text-center text-[#000000] font-normal'>Buy Quality <br /> Hardware Materials</h1>
                                <p className='text-[15px] leading-[18px] text-center tracking-[1px] font-normal text-[#868889]'>Any Size, Variant, Quality.</p>
                            </div>
                            <Image src={imagetwo} alt='' width={300} height={400} className='w-screen h-[350px] object-cover object-center mt-20' />
                        </div>
                    </Slider>
                </div>

                <div className='px-4 mt-2 absolute bottom-5 w-full'>
                    <button type='button' id='btn' className='w-full drop-shadow-[0_10px_20px_rgba(0,111,171,0.25)]  bg-[#006FAB] text-[15px] leading-[18px] text-center font-normal text-[#FFFFFF] h-[60px] rounded-lg transition-all duration-300 ease-in-out' onClickCapture={buttonHandler}>Get Started</button>
                </div>
            </div>
        </>
    )
}
