
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNav";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Shortfilm from "@/components/Shortfilm";
import Skeleton from "@/components/Skeleton";
import Events from "@/components/Events";

import Workshop from "@/components/Workshop";
import Crew from "@/components/Crew";
import Members from "@/components/Members";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col
  overflow-hidden mx-auto">
    <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems} />
      <Hero />
      <About />
      <Shortfilm/>
      <Skeleton />
      {/* <Events /> */}
      <Workshop />
      <Crew />
      <Members />
      <Contact />

      </div>
      </main>
  );
}
