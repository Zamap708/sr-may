'use client'
import Biography from "./biography/Biography";
import Cause from "./cause/Cause";
import Donations from "./donations/Donations";
import Events from "./events/Events";
import Footer from "./footer/Footer";
import Hero from "./hero/Hero";
import Lake from "./lake/Lake";
import Prayer from "./prayer/Prayer";
import Timelines from "./timelines/Timelines";

export default function Home() {
  return (
    <main className="relative bg-white flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Cause />
      <Biography />
      <Prayer />
      <Events />
      <Donations />
      {/* <Lake /> */}
      <Timelines />
      <Footer />
    </main>
  );
}
