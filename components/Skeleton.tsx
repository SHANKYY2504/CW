import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const Skeleton = () => {
  return (
    <section id="reel">
      <div className="flex flex-col items-center p-4 sm:p-6 w-full min-h-screen bg-black overflow-hidden relative pt-24 md:pt-40">
       
        <div className="relative z-10 w-full text-center">
          <h1 className="uppercase text-bold text-3xl sm:text-4xl md:text-5xl text-center text-yellow-500 font-bold drop-shadow-[0_0_4px_rgba(255,255,0,0.4)] mb-4 sm:mb-6">
            Projects
          </h1>
          <p className="text-center font-normal text-gray-500 text-sm sm:text-base max-w-2xl mt-4 sm:mt-8 px-4 sm:px-8 mx-auto">
          Inside IIT Bhubaneswar – Life, Fun, and Unfiltered Stories Like Never Before!
          </p>
        </div>

        {/* Grid content */}
        <div className="relative w-full mt-8 sm:mt-12 px-2 sm:px-4">
          <BentoGrid className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={
                  <iframe
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 rounded-xl"
                    src={item.videoUrl}
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                }
                className={cn(
                  i === 3 || i === 6 ? "sm:col-span-2 lg:col-span-2" : "",
                  "p-2 sm:p-3"
                )}
              />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
};

const items = [
  {
    title: "Freshers unfiltered",
    description: "Get to know the freshers as they answer spontaneous questions about their lives, interests, and fun facts",
    videoUrl: "https://www.youtube.com/embed/VGxJaunHDe4", 
  },
  {
    title: "Farewell, But Not Goodbye",
    description: "Relive the beautiful journey from the first year to the final goodbye in this emotional graduation video",
    videoUrl: "https://www.youtube.com/embed/WLJZRiPHLRY",
  },
  {
    title: " The Graduation Chronicles",
    description: "Graduation and Memories Celebrating the laughter, friendships, and milestones of the graduating students as they bid farewell to college life",
    videoUrl: "https://www.youtube.com/embed/P9K19ZyOVZk",
  },
  {
    title: "64 Questions with IITians",
    description: "Everything You Need to Know About IIT Life. Get candid answers from seniors as they share insights, tips, and fun facts about life at IIT.",
    videoUrl: "https://www.youtube.com/embed/Fm_-6GilOG0",
  },
  {
    title: "Fresher's video'23",
    description: "spontaneous questions about freshers life, interest and campus",
    videoUrl: "https://www.youtube.com/embed/asQvwclqL0M",
  },
  {
    title: "The Ultimate Campus Tour",
    description: "An immersive tour showcasing the beauty, facilities, and charm of the college campus",
    videoUrl: "https://www.youtube.com/embed/4Umuj7GWdLA",
  },
  {
    title: "Convocation'22",
    description: "Embark on exciting journeys .",
    videoUrl: "https://www.youtube.com/embed/nlIRAvQamFo",
  },
];

export default Skeleton;