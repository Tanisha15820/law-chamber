// src/components/AboutSection.jsx

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import aboutMain from "../assets/about-top.jpeg";
import aboutSmall from "../assets/about-mini.jpeg";

export default function AboutSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="relative z-10 mt-10 md:mt-16 bg-white pt-20 md:pt-36 pb-20 md:pb-28 overflow-hidden">

      {/* BACKGROUND BLUR */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[8%] left-[-120px] w-[320px] h-[320px] rounded-full bg-secondary/20 blur-[120px]"
      />

      {/* CONTINUOUS ROTATING RING */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[10%] right-[5%] hidden lg:flex items-center justify-center w-[180px] h-[180px] rounded-full border border-secondary/20"
      >
        <div className="w-[110px] h-[110px] rounded-full border border-secondary/30" />
      </motion.div>

      <div className="max-w-[1450px] mx-auto px-5 sm:px-6 md:px-14">

        <div className="grid lg:grid-cols-[470px_1fr] gap-24 items-center">

          {/* ================= LEFT SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[470px]">

              {/* MAIN IMAGE */}
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden rounded-[26px] shadow-[0_25px_60px_rgba(0,0,0,0.12)]"
              >
                <motion.img
                  src={aboutMain}
                  alt="lawyer"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.3 }}
                  whileHover={{ scale: 1.08 }}
                  className="w-full h-[420px] md:h-[520px] object-cover duration-700"
                />
              </motion.div>

              {/* FLOATING CARD */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7, rotate: 8 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
                transition={{ duration: 0.9, delay: 0.4 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[-22px] right-[-22px] rotate-[3deg] bg-light rounded-[24px] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.15)] w-[190px] md:w-[220px]"
              >

                <img
                  src={aboutSmall}
                  alt="law team"
                  className="w-full h-[220px] object-cover rounded-[18px]"
                />

                <div className="flex items-center gap-2 mt-3 px-1">

                  <div className="flex -space-x-2">
                    <img
                      src="https://i.pravatar.cc/40?img=12"
                      className="w-6 h-6 rounded-full border-2 border-white"
                    />
                    <img
                      src="https://i.pravatar.cc/40?img=15"
                      className="w-6 h-6 rounded-full border-2 border-white"
                    />
                    <img
                      src="https://i.pravatar.cc/40?img=18"
                      className="w-6 h-6 rounded-full border-2 border-white"
                    />
                  </div>

                  <p className="font-body text-[9px] text-gray-500 leading-4">
                    Trusted by our students and faculties
                  </p>

                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* ================= RIGHT SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* TITLE */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-body text-secondary text-[14px] font-medium uppercase tracking-[2px]"
            >
              About Our Firm
            </motion.p>

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-heading text-primary text-[34px] sm:text-[42px] md:text-[60px] leading-[1.02] mt-4 font-bold max-w-[700px]"
            >
              Committed to Justice{" "}
              <motion.span
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="text-secondary"
              >
                Focused on Results.
              </motion.span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-body text-gray-500 text-[16px] leading-8 mt-7 max-w-[780px]"
            >
              We provide clear legal guidance backed by experience,
              integrity, and a results-driven approach.
            </motion.p>

            {/* POINTS */}
            <div className="mt-9 space-y-5">

              {[
                "Experienced attorneys with a client-first mindset",
                "Clear communication and honest legal advice",
                "Strategic approach tailored to every case",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-3"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.4, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                    className="w-2 h-2 rounded-full bg-secondary mt-3"
                  />

                  <p className="font-body text-gray-700 text-[15px]">
                    {item}
                  </p>
                </motion.div>
              ))}

            </div>

            {/* BUTTON */}
            <motion.button
              type="button"
              onClick={() => setShowMore(!showMore)}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 30px rgba(212,175,55,0.35)",
              }}
              whileTap={{ scale: 0.95 }}
              className="font-body mt-10 bg-secondary hover:bg-primary hover:text-light duration-300 text-primary px-8 py-4 rounded-xl font-semibold shadow-[0_10px_30px_rgba(212,175,55,0.25)]"
            >
              {showMore ? "Hide Story" : "Read Our Story"}
            </motion.button>

            {/* EXTRA CONTENT */}
            <AnimatePresence>
              {showMore && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden"
                >
                  <div className="mt-6 font-body text-gray-600 leading-8 text-[15px]">
                    <p>
                      Our firm started with a simple mission — to make legal help
                      accessible, transparent, and effective for everyone. Over
                      the years, we have handled complex cases across criminal,
                      civil, and corporate law, always focusing on fairness and
                      justice.
                    </p>

                    <p className="mt-4">
                      We believe every client deserves personal attention and a
                      strong legal strategy. Our team continuously evolves with
                      changing laws to provide the best possible representation.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>

        </div>
      </div>
    </section>
  );
}