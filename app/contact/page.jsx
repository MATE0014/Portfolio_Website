"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 91169 75755",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "moxitrewar777@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Jaipur, Rajasthan, India",
  },
];

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://getform.io/f/aroodrwb", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setShowPopup(true); // Show the pop-up
        e.target.reset(); // Reset the form after successful submission
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message.");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form of contact */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent">
                Got Any Questions Or Projects For Me?
              </h3>
              <p className="text-white/60">
                You can contact me for any project where I can help you out,
                Just start by entering your details below.
              </p>

              {/*input fields of form */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="Name"
                  type="name"
                  placeholder="Your Name"
                  required
                />
                <Input
                  name="Email"
                  type="email"
                  placeholder="youremail@gmail.com"
                  required
                />
                <Input
                  name="Phone"
                  type="phone"
                  placeholder="Contact Number"
                  required
                />
                <Input
                  name="Subject"
                  type="subject"
                  placeholder="Subject"
                  required
                />
              </div>

              {/* text area for msg*/}
              <div>
                <Textarea
                  name="Message"
                  className="h-[200px]"
                  placeholder="Your message here ;)"
                  required
                />

                {/*submit btn*/}
                <Button size="md" className="max-w-40 mt-8">
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          {/* info display */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 ">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      {/* Pop-up Modal */}
      {showPopup && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
        >
          <div className="bg-[#27272c] p-6 rounded-xl text-center shadow-lg">
            <FaCheckCircle className="text-accent text-5xl mx-auto mb-4" />
            <h2 className="text-white text-2xl mb-2">Message Sent!</h2>
            <p className="text-white/60 mb-4">I will get back to you soon.</p>
            <Button
              size="md"
              className="mt-4"
              onClick={() => setShowPopup(false)}
            >
              Close
            </Button>
          </div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Contact;
