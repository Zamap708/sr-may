import Image from "next/image";
import React from "react";

export default function Cause() {
  return (
    <div className="min-h-screen h-screen bg-bgcolor flex flex-col gap-2 md:flex-row p-10">
      <div className="relative md:w-2/5 h-full">
        <Image
          src={"/assets/cause-image.jpg"}
          alt="Sr Reinolda May, Servant of God, OSB"
          fill={true}
          objectFit='contain'
        />
      </div>

      <div className="flex flex-col md:w-3/5 h-full gap-4 p-6">
        <div className="w-full flex flex-col justify-center items-center text-center">
          <h1 className=" text-2xl md:text-5xl font-bold font-fira text-heading">
            CAUSE OF BEATIFICATION & CANONIZATION OF THE
          </h1>
          <h2 className="text-1xl md:text-4xl p-2 text-heading border-b-2 border-textcolor">
            Servant of God Sr Reinolda Franziska May OSB
          </h2>
        </div>

        <div className=" flex flex-col items-center justify-center md:w-3/5">
          <ul className="list-disc flex flex-col gap-4  text-textcolor md:text-base text-xs font-gotham ">
            <li>
              In January 2014, the Parish of St Joseph in Ngome wrote to ​Bishop
              Xolelo Thaddeus Kumalo requesting consideration of ​sainthood for
              Sr Reinolda Franziska May OSB
            </li>

            <li>
              In February 2014, Bishop Kumalo motivated the Roman Curia
              ​Congregation for the Causes of the Saints on behalf of the
              ​Diocese of Eshowe
            </li>

            <li>
              The Diocese of Eshowe mainly considered three aspects of ​the life
              of Sr Reinolda May as motivation for the Cause of her ​sainthood,
              namely, Fame of sanctity, Heroicity of virtue, and
              ​Appropriateness of the Cause of her Sainthood for the ​Church in
              Southern Africa
            </li>

            <li>
              In October 2014, the Congregation Prefect, Angelo Cardinal ​Amato,
              S.D.B. granted the nihil obstat to the Cause Sr ​Reinolda
              Franziska May OSB was granted the title “Servant of ​God”
            </li>

            <li>
              In February 2017, Bishop kumalo, found and apointed the
              Postulator, Fr Dennis Bonginkosi Xulu
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
