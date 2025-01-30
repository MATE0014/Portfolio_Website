"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  //Download Function For CV Download
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/resume/CV.pdf"; // Path to your CV inside public folder
    link.download = "Moxit_Rewar_CV.pdf"; // The filename for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb:24">
          {/*description here */}

          <div className="text-center xl:text-left order-2 xl:order-none xl:mb-12">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1 mb-6">
              Hello, I'm <br /> <span className="text-accent">Moxit Rewar</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              A budding MERN stack developer with a passion for crafting dynamic
              and user-friendly web applications. As a beginner, I thrive on
              learning, growing, and turning ideas into functional, clean
              designs.
            </p>

            {/*cv download and social links */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={handleDownload}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-12 h-12 xl:w-14 xl:h-14 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/*picture here */}

          <div className="order-1 xl:order-none mb-8 xl:mb-6">
            <Photo />
          </div>
        </div>
      </div>
      {/* stats here */}
      <Stats />
    </section>
  );
};

export default Home;
