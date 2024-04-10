import Image from "next/image";
import React from "react";

export default function Biography() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center bg-bgcolor p-10">
      <div className="relative w-full h-32 flex justify-center items-center">
        <div
          className="absolute top-0 left-0 w-full h-full bg-contain bg-no-repeat bg-center -rotate-6"
          style={{ backgroundImage: "url('assets/heading-bg.png')" }}
        />
        <h2 className="md:text-5xl text-white font-bold z-10">
          A Short Biography
        </h2>
      </div>

      {/* <div className="min-h-full text-textcolor bg-bgcolor flex flex-col md:flex-row md:flex-wrap p-10"> */}
      <div className="md:grid md:grid-cols-5 md:grid-rows-2 flex flex-col gap-y-20 text-textcolor">
        <div className="md:col-span-3 md:w-2/3 h-full flex flex-col gap-8 order-1">
          <div>
            <h3 className=" text-heading font-better font-bold md:pt-3 md:pl-20 text-center md:text-left">
              Early Years
            </h3>
            <p className=" md:text-base text-xs px-6 border-l-4 border-dotted border-gray-500">
              She was born on Monday, October 21, 1901 and baptized the
              following day as Franziska, the youngest of nine children of the
              devoutly Catholic family, headed by a hard-working master
              shoemaker and small farmer at Pfahlheim, Diocese of Rottenburg,
              southwest Germany.
              <br></br>
              <br></br>
              The parish priest of Pfahlheim, Fr Eugene Adis, highly advocated
              parishioners to actively commit and participate in the various
              Catholic sodalities. Young and old were encouraged to practice
              their faith and to fulfil their duties to the church
              conscientiously. Devotion to the Eucharist, especially in the
              exposed Blessed Sacrament, was implanted into the soul of
              Franziska at an early age.
            </p>
          </div>
          <div>{/* <Image /> */}</div>
        </div>

        <div className="md:col-span-2 h-full order-2 ">
          <h3 className=" text-heading font-better font-bold md:pl-2 text-center md:pt-3 md:text-left">
            Youth
          </h3>
          <p className="w-full md:text-base text-xs px-6 border-l-4 border-dotted border-gray-500">
            In her youth, Franziska learned about Mary and consider her mother
            and wanted to emulate her. She joined the sodality of Our Lady,
            awakening a real love and devotion to Mary. In the sodality, she was
            guided to serve God through a Christian life; urged to fight against
            the enemy of the faith, live chaste and to support the work of Jesus
            and His church.
            <br></br>
            <br></br>
            In a quest to realize her missionary work interest, Francisca
            applied to join the Missionary Benedictine Sisters of Tutzing, as
            advised by Father Adis; but her health was found wanting, unfit for
            missionary work; she returned to Pfahlheim, 220km away and spent her
            days praying at her local chapel in front of the Eucharist. Later
            she traveled back to Tutzing and this time was accepted and entered
            the Missionary Benedictine Sisters Convent on March 1, 1922, she
            took her religious profession on February 10, 1925, and the
            religious name, Sister Reinolda.
            <br></br>
            <br></br>
            After receiving the missionary cross, she was sent to South Africa
            on June 21, 1925. There pronounced her final vows on February 12,
            1928, she worked as a seamstress at the Entabeni and Mbongolwane
            stations for 10-years; learned to speak Zulu; and whenever possible,
            visited the locals in their homes on foot and on horseback.{" "}
            <button className="bg-primary md:hidden hover:bg-heading text-white font-bold  px-4 rounded">
              Continue Reading
            </button>
          </p>
        </div>
        <div className="md:col-span-3 md:w-2/3  h-full flex flex-col gap-8 order-3">
          <div>
            <h3 className=" text-heading font-better font-bold md:pt-3 md:pl-20 text-center md:text-left">
              Early Years
            </h3>
            <p className="md:text-base text-xs px-6 border-l-4 border-dotted border-gray-500">
              She was born on Monday, October 21, 1901 and baptized the
              following day as Franziska, the youngest of nine children of the
              devoutly Catholic family, headed by a hard-working master
              shoemaker and small farmer at Pfahlheim, Diocese of Rottenburg,
              southwest Germany.
              <br></br>
              <br></br>
              The parish priest of Pfahlheim, Fr Eugene Adis, highly advocated
              parishioners to actively commit and participate in the various
              Catholic sodalities. Young and old were encouraged to practice
              their faith and to fulfil their duties to the church
              conscientiously. Devotion to the Eucharist, especially in the
              exposed Blessed Sacrament, was implanted into the soul of
              Franziska at an early age.
            </p>
          </div>
          <div>{/* <Image /> */}</div>
        </div>

        <div className="md:col-span-2 h-full order-4">
          <h3 className=" text-heading font-better font-bold md:pl-2 text-center md:pt-3 md:text-left">
            Youth
          </h3>
          <p className="w-full md:text-base text-xs px-6 border-l-4 border-dotted border-gray-500">
            In her youth, Franziska learned about Mary and consider her mother
            and wanted to emulate her. She joined the sodality of Our Lady,
            awakening a real love and devotion to Mary. In the sodality, she was
            guided to serve God through a Christian life; urged to fight against
            the enemy of the faith, live chaste and to support the work of Jesus
            and His church.
            <br></br>
            <br></br>
            In a quest to realize her missionary work interest, Francisca
            applied to join the Missionary Benedictine Sisters of Tutzing, as
            advised by Father Adis; but her health was found wanting, unfit for
            missionary work; she returned to Pfahlheim, 220km away and spent her
            days praying at her local chapel in front of the Eucharist. Later
            she traveled back to Tutzing and this time was accepted and entered
            the Missionary Benedictine Sisters Convent on March 1, 1922, she
            took her religious profession on February 10, 1925, and the
            religious name, Sister Reinolda.
            <br></br>
            <br></br>
            After receiving the missionary cross, she was sent to South Africa
            on June 21, 1925. There pronounced her final vows on February 12,
            1928, she worked as a seamstress at the Entabeni and Mbongolwane
            stations for 10-years; learned to speak Zulu; and whenever possible,
            visited the locals in their homes on foot and on horseback.{" "}
            <button className="bg-primary md:hidden hover:bg-heading text-white font-bold  px-4 rounded">
              Continue Reading
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
