import React from "react";
import { CiGlobe, CiMail } from "react-icons/ci";
import { FaFacebook, FaWhatsapp, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter, FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="w-full h-screen flex flex-col justify-end bg-cover bg-no-repeat bg-center after:content-[''] after:absolute after:top-0 after:left-0 after:w-screen after:h-screen after:block after:bg-black after:opacity-70"
    style={{ backgroundImage: "url('assets/footer-bg.jpg')" }}>
      <div className="bg-textcolor w-full h-fit p-10">
        <div className="w-fit text-white p-8 bg-contain bg-no-repeat bg-center"
            style={{ backgroundImage: "url('assets/heading-bg.png')" }}>
            
          <h3 className="text-3xl">Contact Us</h3>
        </div>

        <div className="text-white p-4 space-y-3 font-semibold">
          <p>
            <FaWhatsapp className="icon whatsapp inline" />
            <span className=""> 0897273823</span>
          </p>
          <p>
            <CiMail className="inline" />
            <span>
              postulator@reinoldamay.org.za
                          <br />
            <CiMail className="inline" />
                          
              fundraising@reinoldamay.org.za
            </span>
          </p>
          <p>
            <FaLocationDot className="inline" /> Diocese of Eshowe KwaZulu Natal
            RSA
          </p>
          <p>
            <CiGlobe className="inline" />
            <span>www.reinoldamay.org.za</span>
            <div className="flex justify-end space-x-2">
              <span>
                <FaFacebook />
              </span>
              <span>
                <FaSquareXTwitter />
              </span>
              <span>
                <FaInstagramSquare />
              </span>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
