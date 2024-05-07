import React from 'react'

const Main = () => {
    return (
        <>
        <div className='gradient-color min-h-[115vh]  w-screen rounded-b-[60px] pt-40 px-5  sm:px-16 pb-14 relative  flex flex-col justify-between'>

            <div className="lg:flex lg:items-center lg:gap-x-[45px]">

                <div className="my-4">
                    <h1 className="text-5xl text-white font1 ">Empowering Connections Through Digital Out-of-Home Advertising</h1>



                </div>

                <div className='my-4'>

                    <p className='text-white text-left font-light text-lg  lg:w-[400px]'>At Worldads, we're revolutionizing location-based advertising by harnessing the power of smart rooftop digital screens. Our innovative platform delivers programmatic advertisements that are not only precise but also captivating, tailored to the vehicle's exact location and time.</p>
                </div>
            </div>

            <div class="relative lg:w-[550px]  rounded-[100px] mt-24">

                <input type="text" id="default-search" className="block w-full p-5  ps-10 text-sm text-gray-900 bg-[#FFFFFF1A] border border-white focus:ring-white focus:border-white rounded-[100px] placeholder:text-[#FFFFFF80] " placeholder="Enter your email address" required />
                <button type="submit" className=" absolute end-1 bottom-1 font-bold bg-white hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-none font-medium rounded-[100px] text-sm px-8 py-4 ">Join waitlist</button>
            </div>

            
            <img src="./assets/images/vector.png" className="text-white absolute -bottom-[22%] right-60" />

<div className="flex items-center mt-10 ">
<img src="./assets/images/discord.png" />
<div>
<p className="text-white">Stay updated.</p> 
<p className="text-white font-bold">Join our discord community</p>
</div>

</div>
        </div>
</>
    )
}

export default Main
