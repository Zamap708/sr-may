import React from "react";

export default function Donations() {
  return (
    <div className="relative h-screen w-full flex flex-col justify-center items-center bg-cover bg-no-repeat bg-center after:content-[''] after:absolute after:top-0 after:left-0 after:w-screen after:h-screen after:block after:bg-black after:opacity-70"
    style={{ backgroundImage: "url('assets/donation-bg.jpg')" }}>
      {/* <div className="bg-black flex flex-col md:flex-row md:flex-wrap"> */}
      <div className="h-full text-white flex flex-col justify-center items-center gap-10 z-10">
        <h1 className="w-fit text-5xl text-center">
          Sr Reinolda<br /> Fundraising
        </h1>

        <p className="w-2/3 text-center">
          Describe your project here. You may talk about the problem , the
          objective and your ideas. Expound a bit on how you solved the
          challenge and how your work helped your organization
        </p>
      </div>

      <div className="md:w-1/2 bg-bgcolor2"></div>
    </div>
    // </div>
  );
}
