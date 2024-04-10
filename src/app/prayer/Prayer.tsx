import React from "react";

export default function Prayer() {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-no-repeat bg-center after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:block after:bg-black after:opacity-70"
      style={{ backgroundImage: "url('assets/prayer-bg.jpg')" }}
    >
      <div className="relative flex justify-center items-center bg-textcolor text-white text-center md:h-20 h-16 z-10">
        <h2 className="md:text-4xl text-2xl font-bold">
          Called To Prepare Tabernacles
        </h2>
      </div>

      <div className="relative flex flex-col justify-start items-center h-fit md:w-fit w-5/6 p-10 z-10">
        <div className="flex flex-col items-center bg-bgcolor2/80 text-center p-6 gap-2">
          <h4 className="w-fit text-textcolor font-bold">
            Intercessory Prayer to the Servant of God<br></br> Sr. Reinolda
            Franziska May OSB
          </h4>
          <div className="w-4/5 ml-10" />
          <p className="font-fira text-textcolor md:text-base text-xs py-4 border-b-2 border-t-2 border-textcolor">
            Eternal and ever-loving God. You gave us your Son,<br></br> our Lord
            Jesus Christ, our God, and Saviour in the<br></br> Holy Eucharist.
            We thank you for the radiant charity<br></br> infused into the heart
            of Sr Reinolda Franziska May,<br></br> who served your people with
            zeal.
            <br></br>
            <br></br>
            May her love for the Holy Eucharist and<br></br> obedience to the
            Blessed Virgin Mary, Tabernacle of the<br></br>
            Most High, inspire us to be faithful followers of Christ.
            <br></br>
            <br></br>
            We believe that she still cares for us,<br></br> the struggling
            Church, and so we place our petitions<br></br> in the hands of the
            Servant of God, Reinolda Franziska May,<br></br>(here place your
            petitions).
            <br></br>
            <br></br>
            Asking her to intercede for us before Your throne<br></br> of grace.
            May her prayers obtain for us the miracle<br></br>
            needed for your church to proclaim her a Blessed and<br></br> Saint
            for our times!
            <br></br>
            <br></br>
            We make this prayer through<br></br> Christ our Lord and Saviour.
            Amen.
          </p>
          <h4 className="text-textcolor font-bold">PRAY FOR US</h4>
        </div>
      </div>
    </div>
  );
}
