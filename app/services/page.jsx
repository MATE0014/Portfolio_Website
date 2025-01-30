"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Custom Web Development",
    description:
      "Build dynamic, full-stack web applications with modern MERN stack technologies.",
    href: "/contact",
  },
  {
    num: "02",
    title: "Frontend Development",
    description:
      "Develop interactive and user-friendly interfaces using React.js, HTML, CSS, and JavaScript.",
    href: "/contact",
  },
  {
    num: "03",
    title: "Portfolio Designing",
    description:
      "Create visually appealing and responsive portfolios to showcase your skills and projects effectively.",
    href: "/contact",
  },
  {
    num: "04",
    title: "Content Writing",
    description:
      "Write engaging, SEO-friendly content for blogs, websites, and brands to enhance online presence.",
    href: "/contact",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group "
              >
                {/* top */}
                <div className="w-full flex justify-between items-center ">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[60px] h-[60px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/*title of service*/}
                <h2 className="text-[38px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* desc of service*/}
                <p className="text-white/60">{service.description}</p>
                {/* border here */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
