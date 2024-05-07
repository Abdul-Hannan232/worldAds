import Image from "next/image";
import Header from "./component/Header"
import Main from "./component/Main";
import NavContent from "./component/NavContent";
export default function Home() {
  return (
    <>
      <div>
        {/* <Header /> */}
        {/* <Main /> */}
        <div className="lg:flex w-[80%] mt-20 mx-auto items-end justify-between">
          <div >
            <Image src="/Group 1.png" alt="Image" width={203} height={207} className="lg:w-[493px] lg:h-[497px] lg:mx-0 mx-auto " />
          </div>
          <div className="xl:w-[500px] md:w-[400px] lg:mt-0 mt-10 lg:mx-0 mx-auto">
            <h1 className="xl:text-6xl md:text-5xl text-3xl font-medium lg:text-start text-center text-[#181818]">Node operators</h1>
            <p className="xl:text-xl lg:text-sm text-md font-light lg:w-auto md:w-80  lg:text-sm md:text-md text-xs  lg:mx-0 mx-auto text-[#030303] lg:text-start text-center mt-5">Become a cornerstone of digital advertising. Own a smart digital screen and start earning as advertisers choose your prime ad slots.</p>
            <div className="border border-gray-300 xl:mt-14 mt-10 rounded-full lg:mx-0 mx-auto  xl:w-44 w-36 ">
              <button className="text-center text-sm border xl:p-3 md:p-3 p-2 rounded-full  xl:w-[164px] w-[133px] font-medium m-1 border-[#181818]">Join waitlist</button>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col-reverse  w-[80%] mt-20 mx-auto items-end justify-between">
          <div className="xl:w-[410px] md:w-[400px] lg:mt-0 mt-10 lg:mx-0 mx-auto">
            <h1 className="xl:text-6xl md:text-5xl text-3xl font-medium lg:text-start text-center text-[#181818]">Ride & Earn</h1>
            <p className="xl:text-lg lg:w-auto md:w-80  lg:text-sm md:text-md text-xs font-light lg:w-auto  lg:mx-0 mx-auto text-[#030303] lg:text-start text-center mt-5">Transform every journey into a profitable venture. Our Smart Rooftop Digital Screens turn miles into money, making every trip count.</p>
            <div className="border border-gray-300 xl:mt-14 mt-10 rounded-full lg:mx-0 mx-auto  xl:w-44 w-36 ">
              <button className="text-center text-sm border xl:p-3 md:p-3 p-2 rounded-full  xl:w-[164px] w-[133px] font-medium m-1 border-[#181818]">Join waitlist</button>
            </div>
          </div>
          <div >
            <Image src="/GroupCroped.png" alt="Image" width={453} height={357} className="lg:w-[563.48px] lg:h-[450.27px] lg:mx-0 mx-auto " />
          </div>
        </div>
        {/* <div className="pl-32  flex mt-48 w-full background gap-24">
          <div className="-mt-14">
            <Image src="/Group 25.png" alt="image" width={526} height={726} />
          </div>
          <div className="w-[60%] mt-40">
            <h1 className="text-6xl font-medium text-[#181818]">Advertise with</h1>
            <h1 className="text-6xl font-medium text-[#FC3603]">WorldAds</h1>
            <p className="text-xl w-[400px] mt-4 text-[#030303]">Seize the spotlight in bustling areas with high-traffic visibility. Make your brand the center of attention with</p>
            <div className="flex items-center w-full gap-5  mt-10">
              <h1 className="text-4xl w-[70%] font-medium text-[#030303]">Precision Targeting</h1>
              <hr className="border w-full  border-[#FC3603]" />
            </div>
            <p className="text-xl w-80 mt-5"> Reach your ideal audience at the right time and place.</p>
            <hr className="border border-[#7E7E7E33] w-80 my-5" />
            <div className="flex items-center gap-5 w-full mt-10">
              <h1 className="text-4xl font-medium w-[50%] text-[#030303]">Dynamic HD Quality Ads</h1>
              <hr className="border  w-[370px] border-[#FC3603]" />
            </div>
            <p className="text-xl w-80 mt-5">Captivate viewers with stunning, crystal-clear advertisements.</p>
            <hr className="border border-[#7E7E7E33] w-80 my-5" />
            <div className="flex items-center w-full mt-10">
              <h1 className="text-4xl font-medium  w-[80%] text-[#030303]">Scalable Geofenced Campaigns</h1>
              <hr className="border  w-full border-[#FC3603]" />
            </div>
            <p className="text-xl w-96 mt-5">  Customize and scale your campaigns with precision.</p>
            <hr className="border border-[#7E7E7E33] w-80 my-5" />
            <div className="border border-gray-300 xl:mt-14 mt-10 rounded-full lg:mx-0 mx-auto  xl:w-44 w-36 ">
              <button className="text-center text-sm border xl:p-3 md:p-3 p-2 rounded-full  xl:w-[164px] w-[133px] font-medium m-1 border-[#181818]">Join waitlist</button>
            </div>
          </div>

        </div> */}
      </div>
    </>
  );
}