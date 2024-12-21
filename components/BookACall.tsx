"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const BookACall = (): React.ReactNode => {
  return (
    <div className="my-20 md:mt-32 mt-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="space-y-2"
      >
        <div className="relative">
          <input
            className="flex h-12 w-72 md:w-96 rounded-full border border-input px-3 py-2 text-sm shadow-sm shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#4d4d4d] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Enter your work email"
            type="email"
          />
          <button
            className="absolute inset-y-0 end-0 flex h-10 mt-1 mr-1 w-28 text-white bg-gradient-to-l from-[#4d4d4d] to-[#000000] items-center justify-center rounded-full border border-transparent outline-offset-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 shadow-[1px_1px_1px_0px_#1E2D5233,0px_0px_1px_1px_#1E2D520F];"
            aria-label="Subscribe"
          >
            Book a call
          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="flex justify-center items-center space-x-2 mt-2"
      >
        <span>Powered by</span>
        <span>
          <Image
            src="/assets/aceternity.png"
            alt="aceternity"
            width={25}
            height={25}
          />
        </span>
        <span>Aceternity</span>
      </motion.div>
    </div>
  );
};

export default BookACall;
