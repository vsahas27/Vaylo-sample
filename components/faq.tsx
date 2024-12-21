"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { motion } from "motion/react";
import IconBoxHero from "./cards/iconBoxHero";
import { FAQData } from "@/lib/data";

const FAQSection = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="md:w-[80%] w-full flex flex-col items-center justify-center md:mt-48 mt-0">
        <div className="w-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <IconBoxHero className="rotate-[-15deg]" />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="font-bold text-xl mb-4 md:mb-0 md:text-7xl mt-16 md:leading-[78px] text-center"
        >
          Frequently asked questions
        </motion.div>
        <div className="md:w-[80%] w-[90%] md:mt-20 mt-0">
          <Accordion type="single" collapsible className="w-full">
            {FAQData.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 * (index + 0.4) }}
                key={index}
              >
                <AccordionItem value={`item-${index + 1}`}>
                  <AccordionTrigger className="text-left">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent>{item.description}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
