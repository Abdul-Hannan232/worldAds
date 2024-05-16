import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Main = () => {
    return (
        <>
            <div className=' rounded-b-[60px] lg:h-[85vh] h-[41vh]  gradient-color max-w-screen  flex flex-col justify-between'>
                <div className=' lg:w-[81%] mx-auto mt-32  max-w-screen rounded-b-[60px] max-w-screen  flex flex-col justify-between'>
                    <div className='lg:flex  justify-between  gap-20 w-full mx-auto'>
                        <div>
                            <div className="my-4">
                                <h1 className="lg:text-5xl text-2xl  lg:w-[650px] lg:mx-0 mx-5 lg:text-start text-center text-white font1 ">Empowering Connections Through Digital Out-of-Home Advertising</h1>
                                <p className='text-white text-center lg:hidden block my-4 lg:mt-14 sm:text-left font-light lg:mx-0 mx-5 lg:text-lg text-xs  lg:w-[400px]'>At Worldads, we&apos;re revolutionizing location-based advertising by harnessing the power of smart rooftop digital screens. Our innovative platform delivers programmatic advertisements that are not only precise but also captivating, tailored to the vehicle&apos;s exact location and time.</p>
                            </div>
                            <div className="relative lg:w-[550px] lg:mx-0 mx-5 rounded-[100px] mt-10">
                                <input type="text" id="default-search" className="block w-full lg:p-5 p-3  -10 lg:text-sm text-xs text-gray-900 bg-[#FFFFFF1A] border border-white focus:ring-white focus:border-white rounded-[100px] placeholder:text-[#FFFFFF80] " placeholder="Enter your email address" required />
                                <button type="submit" className=" absolute end-1 top-1 font-bold bg-white hover:bg-white-800 focus:ring-4 font-bold focus:outline-none focus:ring-none font-medium rounded-[100px] lg:text-sm text-xs lg:px-8 px-5 lg:py-4 py-2">Join waitlist</button>
                            </div>
                            <div className='lg:mt-40 my-10 lg:mx-0 mx-5 flex  items-center lg:justify-start justify-center lg:gap-4 gap-2'>
                                <img src="./assets/images/discord.png" className='lg:mb-2 ' />
                                <div>
                                    <p className="text-white lg:text-lg sm:text-sm">Stay updated.</p>
                                    <Link href="https://twitter.com/worldadsio" target="_blank">
                                        <p className="text-white lg:text-lg lg:mt-0 lg:-mt-1  -mt-2 sm:text-xs font-bold">Join our discord community</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='text-white text-center lg:block hidden  my-4 lg:mt-14 sm:text-left font-light lg:mx-0 mx-5 lg:text-lg text-sm  lg:w-[400px]'>At Worldads, we&apos;re revolutionizing location-based advertising by harnessing the power of smart rooftop digital screens. Our innovative platform delivers programmatic advertisements that are not only precise but also captivating, tailored to the vehicle&apos;s exact location and time.</p>
                            <img src="./arrow1.png" className=" hidden lg:block h-32 lg:h-auto  ml-40 " />
                            <Image src="/assets/images/world.png" alt="image" width={565} height={565} className="lg:-mt-10 lg:-ml-60 mt-10 " />
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main
