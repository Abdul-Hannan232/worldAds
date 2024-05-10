import Image from "next/image";
import Header from "./component/Header"
import Main from "./component/Main";
import NavContent from "./component/NavContent";
import Advertise from "./component/advertise"
import Footer from "./component/footer"
import NodeOperator from "./component/nodeOperator"
import RideEarn from "./component/rideEarn"
export default function Home() {
  return (
    <>
      <div>
        <Header />
        <Main />

        <NodeOperator />
        <RideEarn />
        <Advertise />
        <Footer />
      </div>
    </>
  );
}