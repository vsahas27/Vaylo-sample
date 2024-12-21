import { transition, variants } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

export const ContentCard: React.FC<{
  className?: string;
  title?: string;
  description?: string;
}> = ({
  className,
  title = "Go from question to",
  description = `All the features of product feedback tool you need to easily centralize
        product`,
}) => {
  const words = title.split(" ");

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.04 }}
      className={cn("flex flex-col items-center", className)}
    >
      <h1 className="text-xl md:text-4xl font-semibold tracking-tight text-center">
        {words.map((word, index) => (
          <React.Fragment key={index}>
            <motion.span
              className="inline-block"
              transition={transition}
              variants={variants}
            >
              {word}
            </motion.span>
            {index < words.length - 1 && " "}
          </React.Fragment>
        ))}
      </h1>
      <motion.p
        transition={transition}
        variants={variants}
        className="text-center text-sm md:w-[70%] w-full mt-2 md:mt-4"
      >
        {description}
      </motion.p>
    </motion.div>
  );
};
