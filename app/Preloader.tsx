// Preloader.js

const Preloader = () => {
    return (
      // <div className="preloader">
      //   <div className="spinner"></div>
      //   {/* You can customize the loading message or animation here */}
      //   <p>Loading...</p>
      // </div>
<div className='h-screen max-w-screen flex items-center justify-center'>

<div className='h-[320px] sm:h-[380px] p-10 w-[94vw] sm:w-[650px] shadow-lg relative flex flex-col justify-evenly '>
<img src="./assets/images/logo-circle.png"  className="w-16"/>
{/* <img src="./Group.png"  className="w-16"/> */}
<h1 className="font-semibold font1 sm:w-[70%] text-left	text-3xl sm:text-5xl">See the world your own way</h1>
<div className="h-2 sm:h-3 w-full   overflow-hidden absolute bottom-0  left-0 right-0">
      <div className="h-full bg-[#C02607] animate-left-to-right"></div>
    </div>

</div>
      {/* <div className="h-4 w-24 bg-gray-300 rounded-full overflow-hidden">
      <div className="h-full bg-blue-500 animate-left-to-right"></div>
    </div> */}

    </div>
    );
  };
  
  export default Preloader;
  