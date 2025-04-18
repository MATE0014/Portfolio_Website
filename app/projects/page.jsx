"use client";

import { motion } from "framer-motion";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "ShelfSeeker",
    description: "ShelfSeeker Is An Online Website For Searching Books!",
    stack: [
      { name: "React.js" },
    ],
    image: "/assets/work/project1.png",
    live: "https://shelfseeker.vercel.app/",
    github: "https://github.com/MATE0014/BookVerse",
  },
  {
    num: "02",
    category: "Full Stack",
    title: "AADHAR 13",
    description:
      "AADHAR 13 was built to showcase Zircon Club PCE's tech event AADHAR and take in registrations for the participations.",
    stack: [
      { name: "React.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/project2.png",
    live: "https://zc-aadhar13-frontend.onrender.com/",
    github: "https://github.com/MATE0014/zc_aadhar13",
  },
  {
    num: "03",
    category: "FrontEnd",
    title: "Birthday Wishing",
    description:
      "Built From Scratch Without Any Designes, Used For Wishing Birthdays To My Friends!",
    stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }],
    image: "/assets/work/project3.png",
    live: "",
    github: "https://github.com/MATE0014/HappyBirthday",
  },
  {
    num: "04",
    category: "Frontend",
    title: "My Portfolio",
    description:
      "My Portfolio was built so that I can showcase my skills and reach out to others.",
    stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }],
    image: "/assets/work/project4.png",
    live: "portfolio-moxitrewar.vercel.app",
    github: "https://github.com/MATE0014/Portfolio_Website",
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slide
    const currentIndex = swiper.activeIndex;

    //update project state based on slider index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* proj numbers with outline*/}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>

              {/* project cat */}
              <p className="text-white/90">Category - {project.category}</p>

              {/* project description */}
              <p className="text-white/60">{project.description}</p>

              {/* tech stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              {/* border */}
              <div className="border border-white/20 "></div>

              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live link */}
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github link */}
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xk:w-[50%] max-w-[600px] mx-auto">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/*overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 "></div>

                      {/* project image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* sliding buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
