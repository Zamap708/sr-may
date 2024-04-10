import React from "react";

export default function Timelines() {
  return (
    <div className="min-h-screen w-full p-10 bg-bgcolor2">
      <div className="h-full w-full flex flex-col text-center text-white">
        <div className="w-full h-full flex justify-center items-center">
          <h1 className="text-5xl text-heading">
            Biographical &<br></br>Cause Timelines
          </h1>
        </div>

        <div className=" lg:gap-x-8 flex flex-col justify-center items-center md:flex-row md:flex-wrap max-h-full pt-8">
          <div className="w-full h-96 md:w-1/2 lg:w-1/5 px-4 py-10 bg-bgcolor">
            <div className="w-full h-2/6"></div>
            <div className="w-full h-4/6 flex flex-col justify-center items-center gap-2 text-heading p-4">
              <h3 className="text-2xl font-bold mt-2">
                Your Article Title Goes Here
              </h3>
              <p className="text-lg">
              Five to six lines of body copy to support the heading. Five to six lines of body copy to support the heading. Five to six lines of body copy.
              </p>
            </div>
          </div>

          <div className="w-full h-96 md:w-1/2 lg:w-1/5 px-4 py-10 bg-bgcolor">
            <div className="w-full h-2/6"></div>
            <div className="w-full h-4/6 flex flex-col justify-center items-center gap-2 text-heading p-4">
              <h3 className="text-2xl font-bold mt-2">
                Your Article Title Goes Here
              </h3>
              <p className="text-lg">
              Five to six lines of body copy to support the heading. Five to six lines of body copy to support the heading. Five to six lines of body copy.
              </p>
            </div>
          </div>

          <div className="w-full h-96 md:w-1/2 lg:w-1/5 px-4 py-10 bg-bgcolor">
            <div className="w-full h-2/6"></div>
            <div className="w-full h-4/6 flex flex-col justify-center items-center gap-2 text-heading p-4">
              <h3 className="text-2xl font-bold mt-2">
                Your Article Title Goes Here
              </h3>
              <p className="text-lg">
              Five to six lines of body copy to support the heading. Five to six lines of body copy to support the heading. Five to six lines of body copy.
              </p>
            </div>
          </div>

          <div className="w-full h-96 md:w-1/2 lg:w-1/5 p-4  bg-bgcolor">
            <div className="w-full h-2/6"></div>
            <div className="w-full h-4/6 flex flex-col justify-center items-center gap-2 text-heading p-4">
              <h3 className="text-2xl font-bold mt-2">
                Your Article Title Goes Here
              </h3>
              <p className="text-lg">
              Five to six lines of body copy to support the heading. Five to six lines of body copy to support the heading. Five to six lines of body copy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
