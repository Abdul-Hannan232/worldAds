"use client"
import Image from "next/image";
import { useState } from "react";
export default function Advertise() {
  const [precision, setPrecision] = useState(false)
  const precisionOpen = () => {
    setPrecision(!precision)
    setDynamic(false)
    setScalable(false)
  }
  const [dynamic, setDynamic] = useState(false)
  const dynamicDrop = () => {
    setDynamic(!dynamic)
    setScalable(false)
    setPrecision(false)
  }
  const [scalable ,setScalable] = useState(false)
  const ScalableDrop=()=>{
    setScalable(!scalable)
    setDynamic(false)
    setPrecision(false)
  } 
  return (
    <div className="">
      <div id="advertise" className="xl:pl-32 2xl:pl-40   lg:flex lg:mt-48 mt-32 w-full background gap-24">
        <div className="-mt-14">
          <Image src="" alt="image" width={226} height={426} className="lg:w-[526px] lg:h-[726px] 2xl:w-[650px] 2xl:h-[926px]  lg:mx-0 mx-auto" />
        </div>
        <div className="lg:w-[60%] w-[90%]  lg:mx-0 mx-auto lg:mt-40 mt-10">
          <h1 className="xl:text-6xl text-5xl 2xl:text-8xl lg:text-start text-center font-medium text-[#181818]">Advertise with</h1>
          <h1 className="xl:text-6xl text-5xl 2xl:text-8xl lg:text-start text-center font-medium text-[#FC3603]">WorldAds</h1>
          <p className="xl:text-xl lg:text-lg text-sm 2xl:text-2xl lg:w-[400px] 2xl:w-[600px] mt-4 lg:text-start text-center text-[#030303]">Seize the spotlight in bustling areas with high-traffic visibility. Make your brand the center of attention with</p>
          <div className="h-[400px] overflow-scroll">
            <div className="flex items-center lg:justify-start justify-center w-full gap-5  mt-10">
              <h1 onClick={precisionOpen} className={`${precision ? "xl:text-3xl text-[#030303]" : "xl:text-2xl text-gray-400 "} cursor-pointer lg:text-2xl lg:text-start text-center  text-2xl 2xl:text-6xl xl:w-[80%] lg:w-[80%]  2xl:w-[90%] font-bold `}>Precision Targeting</h1>
              <hr className="border w-[80%] lg:block hidden  border-[#FC3603]" />
            </div>
            <div class="relative" data-twe-dropdown-ref>
  <button
    class="flex items-center rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
    type="button"
    id="dropdownMenuButton1"
    data-twe-dropdown-toggle-ref
    aria-expanded="false"
    data-twe-ripple-init
    data-twe-ripple-color="light">
    Dropdown button
    <span class="ms-2 w-2 [&>svg]:h-5 [&>svg]:w-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clip-rule="evenodd" />
      </svg>
    </span>
  </button>
  <ul
    class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
    aria-labelledby="dropdownMenuButton1"
    data-twe-dropdown-menu-ref>
    <li>
      <a
        class="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
        href="#"
        data-twe-dropdown-item-ref
        >Action</a
      >
    </li>
    <li>
      <a
        class="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
        href="#"
        data-twe-dropdown-item-ref
        >Another action</a
      >
    </li>
    <li>
      <a
        class="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
        href="#"
        data-twe-dropdown-item-ref
        >Something else here</a
      >
    </li>
  </ul>
</div>
            {/* {precision && (
              <p  style={{
                opacity: precision ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out', // Smooth transition
              }}
               className="lg:text-xl text-sm 2xl:text-2xl lg:w-80 lg:text-start w-40 lg:mx-0 mx-auto text-center mt-5"> Reach your ideal audience at the right time and place.</p>

            )} */}
            <hr className="border lg:border-[#7E7E7E33]  border-[#FC3603] lg:w-80 w-60 lg:mx-0 mx-auto my-5" />
            <div className="flex items-center lg:justify-start justify-center gap-5 w-full mt-10">
              <h1 onClick={dynamicDrop}  className={`${dynamic ? "xl:text-2xl text-[#030303]" : "xl:text-xl text-gray-400 "} lg:text-2xl cursor-pointer  text-2xl  2xl:text-6xl font-bold lg:text-start text-center  xl:w-[50%] lg:w-[45%] 2xl:w-[60%] `}>Dynamic HD Quality Ads</h1>
              <hr className="border   w-[50%] lg:block hidden 2xl:w-[400px] border-[#FC3603]" />
            </div>
          {dynamic && (
           <p className="lg:text-xl text-sm 2xl:text-2xl lg:w-80 w-52 lg:mx-0 mx-auto  lg:text-start text-center mt-5">Captivate viewers with stunning, crystal-clear advertisements.</p>

          )} 
            <hr className="border lg:border-[#7E7E7E33]  border-[#FC3603] lg:w-80 w-60 lg:mx-0 mx-auto my-5" />
            <div className="flex items-center lg:justify-start justify-center w-full mt-10">
              <h1 onClick={ScalableDrop} className={`${scalable ? "xl:text-3xl text-[#030303]" : "xl:text-2xl text-gray-400 "} cursor-pointer  xl:text-xl lg:text-3xl  text-2xl  2xl:text-6xl font-bold lg:text-start text-center  xl:w-[80%] lg:w-[60%] 2xl:w-full text-[#030303]`}>Scalable Geofenced Campaigns</h1>
              <hr className="border   w-[73%] lg:block hidden border-[#FC3603]" />
            </div>
          {scalable && (
          <p className="lg:text-xl text-sm 2xl:text-2xl  lg:text-start text-center  w-40 lg:mx-0 mx-auto   lg:w-96 mt-5">  Customize and scale your campaigns with precision.</p>

          )}  
            <hr className="border lg:border-[#7E7E7E33]  border-[#FC3603] lg:w-80 w-60 lg:mx-0 mx-auto my-5" />
            <div className="border border-gray-300 xl:mt-14 mt-10 rounded-full lg:mx-0 mx-auto  xl:w-44 w-36 ">
              <button className="text-center text-sm border xl:p-3 md:p-3 p-2 rounded-full  xl:w-[164px] w-[133px] font-medium m-1 border-[#181818]">Join waitlist</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}