"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";

const Events = () => {
  const events = [
    {
      title: "Acting Workshop",
      href: "https://www.instagram.com/p/DAVSIINomiV/",
      description: "Exclusive Acting Workshop with Amit Pahel",
      image: "/acting.jpg",
    },
    {
      title: "Scriptwriting Workshop",
      href: "https://www.instagram.com/cinewaveiitbbs/p/C7_vECey2wl/",
      description: "Online Screenwriting Workshop with Gundeep Kaur",
      image: "/script.jpg",
    },
    {
      title: "Filmmaking Bootcamp",
      href: "https://www.instagram.com/cinewaveiitbbs/p/C-3MEPSTK0r/",
      description: "2-Day Filmmaking Bootcamp – Learn, Shoot, Edit",
      image: "/film.jpg",
    },
  ];

  return (
    <section id="events" className="relative py-20">
      {/* Decorative elements - now with proper containment */}
      <div className="fixed -right-16 top-1/4 opacity-70 hover:opacity-100 transition-opacity z-0">
        <Image
          src="/waocamera.png"
          alt="Camera decoration"
          width={300}
          height={300}
          className="animate-float"
        />
      </div>
      <div className="fixed -left-16 top-1/4 opacity-70 hover:opacity-100 transition-opacity z-0">
        <Image
          src="/waocamera2.png"
          alt="Camera decoration"
          width={320}
          height={320}
          className="animate-float-delay"
        />
      </div>

      {/* Content container with higher z-index */}
      <div className="relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-yellow-500 drop-shadow-[0_0_8px_rgba(255,255,0,0.6)]">
            Events
          </h1>
        </div>

        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
          {events.map((event, idx) => (
            <div key={idx} className="flex justify-center h-[28rem]">
              <PinContainer
                title={event.title}
                href={event.href}
                containerClassName="w-full h-full"
              >
                <div className="flex flex-col w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{event.description}</p>
                    <div className="mt-auto text-right">
                      <span className="text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors">
                        Learn more →
                      </span>
                    </div>
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;