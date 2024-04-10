import React from "react";

export default function Hero() {
  return (
    //bg to be changed to bg image , sizing
    <div className="w-full h-screen flex flex-col items-center justify-center text-white text-center bg-cover bg-no-repeat bg-center after:content-[''] after:absolute after:top-0 after:left-0 after:w-screen after:h-screen after:block after:bg-black after:opacity-20"
    style={{ backgroundImage: "url('assets/hero-bg.jpg')" }}
    >
      <div className="flex flex-col justify-center items-center gap-4 w-fit z-10">

        <h1 className="md:text-5xl md:pt-16 pt-10 font-fira">
          Servent of God <br></br> <b>Sr Reinolda Franziska May OSB</b>
        </h1>
        <div className="mt-1 md:mt-2 mx-auto h-1 w-11/12 bg-white" />

        <div className="flex flex-col gap-2 z-10">

        <div className="relative h-32 w-full p-8 mx-auto flex flex-col justify-center items-center text-center">

          <div
            className="absolute top-0 left-0 w-full h-full bg-contain bg-no-repeat bg-center -rotate-6"
            style={{ backgroundImage: "url('assets/heading-bg.png')" }}
          />
          <h2 className="md:text-2xl font-bold text-xs z-10">
            Called to prepare Tabernacles
          </h2>

        </div>

        <div className="mt-1 ml-auto mr-auto h-1 w-full bg-white" />

      </div>

      <button className="p-4 mt-10 bg-primary md:w-28 w-20 text-center font-gotham font-semibold text-[10px] md:text-sm hover:bg-textcolor hover:cursor-pointer z-10">
        Read more
      </button>
      </div>

      
    </div>
  );
}
