import Image from "next/image";
import Header from "./component/Header"
import Main from "./component/Main";
import NavContent from "./component/NavContent";
import Advertise from "./component/advertise"
import Footer from "./component/footer"
import NodeOperator  from "./component/nodeOperator"
import RideEarn from "./component/rideEarn"
export default function Home() {
  return (
    <>
      <div>
        <Header />
        <Main />
        <div className="lg:flex w-[80%] mt-80 mx-auto items-end justify-between">
          <div >
            <Image src="/Group 1.png" alt="Image" width={203} height={207} className="lg:w-[493px] lg:h-[497px] lg:mx-0 mx-auto " />
          </div>
        
        </div>
     <RideEarn/>
      <Advertise/>
      <Footer/>
      </div>
    </>
  );
}