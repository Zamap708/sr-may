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
        <div className="md:w-2/3 md:col-span-3 h-full flex flex-col gap-8 order-1">
          <div className="">
            <h3 className="text-2xl text-heading font-better font-bold px-2 text-center md:text-left">
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
          <div className="relative h-full w-full">
            <Image
              src={"/assets/early-life-images.png"}
              alt="Sr Reinolda May, Servant of God, OSB"
              fill={true}
              objectFit="contain"
            />
          </div>
        </div>

        <div className="md:col-span-2 h-full order-2 ">
          <h3 className="text-2xl text-heading font-better font-bold md:pl-2 text-center md:pt-3 md:text-left">
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
            visited the locals in their homes on foot and on horseback.
            <button className="bg-primary md:hidden hover:bg-heading text-white font-bold  px-4 rounded">
              Continue Reading
            </button>
          </p>
        </div>
        <div className="md:col-span-3 h-full flex gap-8 order-3">
          <div className=" md:w-2/3 ">
            <h3 className="text-2xl text-heading font-better font-bold px-2 text-center md:text-left">
              Missionary Nun
            </h3>
            <p className="md:text-base text-xs px-6 border-l-4 border-dotted border-gray-500">
              In 1926, the Benedictines opened a mission station in Nongoma, and
              established other out-stations in the district to win new
              converts. In 1944, they bought a 338-hectare farm at Ngome as a
              source of income for the Nongoma mission station with its school
              and hospital. The farm was mainly used for cattle but a small
              school, Mayime, was also erected to enable basic education for
              local children. The classroom was also used as a chapel for Sunday
              Holy Mass.
              <br />
              <br />
              As a missionary worker, Sr Reinolda longed to bring the love of
              Christ to God’s people in Zululand. On many Sundays, she went with
              the Nongoma out-stations’ priest, inviting people to Mass, cared
              for the sick and dying and also counsel marriages. She won the
              hearts of many by her kindness and generous readiness to help.
              ‘Mashiyane’, as she was fondly called, because of her thick
              eyebrows, was well known and loved in the region. Even the Zulu
              King, Zwelithini, who was born in her department, often came to
              her small office they shared knowledge and counsel.
              <br />
              <br />
              She helped the poor, distributed food and clothing and did not
              stop even when her kindness was occasionally misused. The pastor
              of Nongoma, described Sr Reinolda as a very solid missionary nun
              in the truest sense of the word and of inestimable help to his
              pastoral work. Her friendly manner combined with her zeal for
              souls had a great moral influence on those who sought her help,
              many non-practicing Catholics found their way back to the Church.
              <br />
              <br />
              She tracked down children who received emergency baptisms in her
              maternity department and encouraged parents to enroll baptized
              children in Catholic schools. Through her nursing and pastoral
              visits, she could direct missionaries to families in need of
              pastoral experience.
            </p>
          </div>
          <div className="relative h-full w-1/3">
            <Image
              src={"/assets/missionary-images.png"}
              alt="Sr Reinolda May, Servant of God, OSB"
              fill={true}
              objectFit="contain"
            />
          </div>
        </div>

        <div className="md:col-span-2 h-full order-4">
          <h3 className="text-2xl text-heading font-better font-bold md:pl-2 text-center md:pt-3 md:text-left">
            Midwife
          </h3>
          <p className="w-full md:text-base text-xs px-6 border-l-4 border-dotted border-gray-500">
            Bishop Thomas Spreiter of Eshowe, strongly believed in the
            importance of indirect mission work in schools and hospitals as
            means to spread the faith. He had ceaselessly, for many years,
            sought permission from Rome to train Benedictine Nuns in midwifery,
            and finally receiving permission in 1936, also from Tutzing.
            <br />
            <br />
            In spite of own concerns about her age (mid-thirties), lack of
            secondary education and limited knowledge of the English language,
            Sr Reinolda responded positively to her Superior’s request to train
            as a midwife. Trusting in God’s help and the requisite to meet the
            personnel demands of the hospital, under construction at the time,
            she studied hard and received a midwifery diploma from Greys
            Hospital in Pietermaritzburg in May 1938.
            <br />
            <br />
            In June 1938 the Nongoma Benedictine Mission Hospital opened and the
            newly qualified Sr Reinolda, first nun trained in midwifery, was
            placed in charge of the maternity division.
            <br />
            <br />
            The early years were difficult there was great poverty and distrust
            from the community. Sr Reinolda prayed hard, in the hospital’s
            chapel, for fortitude to handle the difficulties. She also trained
            many midwives; her first group took exams in 1941. Her expertise as
            a midwife earned her the trust of other medical practitioners and
            attracted expectant mothers from afar.
            <br />
            <br />
            Sr Reinolda remained head of the Benedictine Hospital Maternity
            Division until her retirement in June 1976; the South African
            government took over the hospital in the same year. Statistics
            indicate over 28000 children were born during the 38years the
            maternity division was under her tutelage and management.
          </p>
        </div>
      </div>
    </div>
  );
}
