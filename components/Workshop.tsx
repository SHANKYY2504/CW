"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import Image from "next/image";

const Workshop = () => {
  return (
    <section id="workshop">
      <div>
        <div className="relative w-full">
          <Image
            src="/board.png"
            alt="Left Decoration"
            width={600}
            height={650}
            className="absolute left-[-350px] top-[-20px] mt-12"
          />
          <Image
            src="/stand.png"
            alt="Right Decoration"
            width={600}
            height={650}
            className="absolute right-[-305px] top-[-20px] mt-12"
          />
        </div>

        <h1 className="uppercase text-bold text-5xl text-center mt-20 text-yellow-500 font-bold drop-shadow-[0_0_4px_rgba(255,255,0,0.4)] mb-12">
          Domains
        </h1>

        <section className="w-full py-20 -mt-10">
          <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
            <Card
              title="Editing workshop"
              icon={<AceternityIcon order="Editing" />}
              description="Master the art of post-production in this hands-on workshop. Learn essential editing techniques, from cutting scenes to sound design and color grading, to transform raw footage into a polished, compelling film."
            >
              <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName="bg-emerald-900"
              />
            </Card>
            <Card
              title="Scriptwriting workshop"
              icon={<AceternityIcon order="Scriptwriting" />}
              description="Unleash your storytelling potential! This workshop will guide you through the essentials of scriptwriting, including plot development, character arcs, and dialogue, helping you craft engaging and impactful screenplays."
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-black"
                colors={[
                  [255, 0, 150],
                  [255, 50, 200],
                ]}
                dotSize={3}
              />
              <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
            </Card>
            <Card
              title="Acting workshop"
              icon={<AceternityIcon order="Acting" />}
              description="Step into the spotlight and bring characters to life! This workshop focuses on voice modulation, expressions, body language, and improvisation to enhance your acting skills and confidence on stage and screen"
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-sky-600"
                colors={[[125, 211, 252]]}
              />
            </Card>
            <Card
              title="Cinematography workshop"
              icon={<AceternityIcon order="Cinematography" />}
              description="Dive into the world of visual storytelling! This workshop will explore the fundamentals of camera techniques, lighting, framing, and shot composition to enhance your filmmaking skills and bring your creative vision to life."
            >
              <CanvasRevealEffect
                animationSpeed={4}
                containerClassName="bg-purple-600"
                colors={[
                  [192, 132, 252],
                  [168, 85, 247],
                ]}
              />
            </Card>
          </div>
        </section>
      </div>
    </section>
  );
};

interface CardProps {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
}

const Card = ({ title, icon, children, description }: CardProps) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[30rem]"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100 md:group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <h2
          className="text-sm dark:text-white opacity-0 group-hover/canvas-card:opacity-100 md:group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center"
          style={{ color: "#e4ecff" }}
        >
          {description}
        </h2>
      </div>
    </div>
  );
};

interface AceternityIconProps {
  order: string;
}

const AceternityIcon = ({ order }: AceternityIconProps) => {
  return (
    <div>
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          {order}
        </span>
      </button>
    </div>
  );
};

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const Icon = ({ className, ...rest }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Workshop;