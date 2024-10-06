'use client'
import React from "react";
import ChromeIcon from "@/assets/icons/check-circle.svg";
import CssIcon from "@/assets/icons/css3.svg";
import GithubIcon from "@/assets/icons/github.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import ReactIcon from "@/assets/icons/react.svg";
import JAvascriptIcon from "@/assets/icons/square-js.svg";
import bookCover from "@/assets/images/book-cover.png";
import mapImage from "@/assets/images/map.png";
import smileEmoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader/CardHeader";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Image from "next/image";
import {motion} from "framer-motion"
import Card from "@/components/Card/Card";
import ToolBoxItems from "@/components/ToolBoxItems/ToolBoxItems";
const toolBoxItems = [
  {
    title: "Javascript",
    iconType: JAvascriptIcon,
  },
  {
    title: "HtML%",
    iconType: HtmlIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "GitHub",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "🎥",
    left: "50%",
    top: "5%",
  },
  {
    title: "Hiking",
    emoji: "🎯",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Music",
    emoji: "🎼",
    left: "70%",
    top: "45%",
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♂️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Reading",
    emoji: "📖",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const contraintRef=React.useRef(null)
  return (
    <div className="py-20 lg:py-28  " id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="md:grid md:grid-cols-5 grid-cols-1  gap-8 md:gap-8 lg:grid-cols-3 ">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1 ">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives"
              />
              <div className="w-40 mx-auto  mt-2 md:mt-0">
                <Image src={bookCover} alt="Book cover" />
              </div>
            </Card>

            <Card className="h-[320px]  md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description=" Explore the technologies and tools I use to craft exceptional digital experiences"
              />
              <ToolBoxItems
                items={toolBoxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-left [animation-duration:30s] "
              />
              <ToolBoxItems
                items={toolBoxItems}
                className="mt-6  "
                itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:15s] "
              />
            </Card>
          </div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3 ">
            <Card className="h-[320px] p-0  flex flex-col md:col-span-3 lg:col-span-2 ">
              <CardHeader
                title="Beyond the Code"
                description=" Explore my interests and hobbies beyond the digital realm"
                className="px-6 py-6"
              />
              <div className="relative flex-1 " ref={contraintRef} >
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex  items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute  "
                    style={{ left: hobby.left, top: hobby.top }}
                    drag
                    dragConstraints={contraintRef}
                  >
                    <span className="font-medium text-gray-950   ">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 md:col-span-2 lg:col-span-1 ">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top "
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30 ">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration] "></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10 "></div>
                <Image
                  src={smileEmoji}
                  alt="smiling Emoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
