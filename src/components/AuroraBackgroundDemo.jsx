"use client";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../components/aurora-background";
import { FormattedMessage } from "react-intl";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground className="aurora-presentation">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold text-[#0fdfa15b] text-outline-black text-center">
          <h1>
            <FormattedMessage id="welcome" />
          </h1>
          <hr className="custom-hr border-[#0fdfa15b] border-t-2 border-b-2 text-center md:w-1/6 w-1/3 my-4 mx-auto" />
        </div>
        <div className="text-center font-light text-[#ffffff56] items-center text-base md:text-4xl py-4">
          <p>
            <FormattedMessage id="descriptionOne" />
          </p>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
