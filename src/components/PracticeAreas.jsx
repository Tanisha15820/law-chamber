// src/components/PracticeAreas.jsx

import { motion } from "framer-motion";

import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import FamilyRestroomOutlinedIcon from "@mui/icons-material/FamilyRestroomOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";

import practiceImg from "../assets/practice.png";

const leftAreas = [
  {
    title: "Criminal Law",
    icon: <GavelOutlinedIcon className="!text-white !text-[18px]" />,
  },
  {
    title: "Family Law",
    icon: <FamilyRestroomOutlinedIcon className="!text-white !text-[18px]" />,
  },
  {
    title: "Business Law",
    icon: <BusinessCenterOutlinedIcon className="!text-white !text-[18px]" />,
  },
];

const rightAreas = [
  {
    title: "Real Estate Law",
    icon: <HomeWorkOutlinedIcon className="!text-white !text-[18px]" />,
  },
  {
    title: "Immigration Law",
    icon: <PublicOutlinedIcon className="!text-white !text-[18px]" />,
  },
  {
    title: "Employment Law",
    icon: <BalanceOutlinedIcon className="!text-white !text-[18px]" />,
  },
];

export default function PracticeAreas() {
  return (
    <section className="relative py-14 md:py-20 bg-white overflow-hidden">

      {/* ANIMATED GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[15%] left-[-100px] w-[280px] h-[280px] rounded-full bg-secondary blur-[120px]"
      />

      {/* BACKGROUND ICONS */}
      <motion.div
        animate={{
          rotate: [-20, -12, -20],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[150px] left-[120px] opacity-[0.06] hidden md:block"
      >
        <GavelOutlinedIcon className="!text-[150px]" />
      </motion.div>

      <motion.div
        animate={{
          rotate: [18, 10, 18],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 opacity-[0.06] hidden md:block"
      >
        <BalanceOutlinedIcon className="!text-[220px]" />
      </motion.div>

      <div className="max-w-[1450px] mx-auto px-5 sm:px-6 md:px-14 relative z-10">

        {/* ================= TOP CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-[700px] mx-auto"
        >

          <p className="font-body text-secondary uppercase tracking-[3px] text-xs sm:text-sm font-semibold">
            Practice Areas
          </p>

          <h2 className="font-heading text-primary text-[34px] sm:text-[42px] md:text-[60px] font-bold mt-3 leading-tight">
            Our Practice Areas
          </h2>

          <p className="font-body text-gray-500 text-[15px] md:text-[16px] leading-7 md:leading-8 mt-4 px-2">
            We specialize in key legal domains to provide focused and
            effective representation with strategic legal solutions.
          </p>
        </motion.div>

        {/* ================= MOBILE ================= */}
        <div className="lg:hidden mt-14 space-y-6">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center mb-10"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-secondary/20 blur-[60px] rounded-full scale-110"></div>

              <motion.img
                whileHover={{ scale: 1.05 }}
                src={practiceImg}
                alt="law"
                className="relative z-10 w-[220px] h-[220px] object-cover rounded-full border-[8px] border-white shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
              />
            </motion.div>
          </motion.div>

          {[...leftAreas, ...rightAreas].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="bg-white shadow-[0_10px_35px_rgba(0,0,0,0.08)] rounded-xl px-5 py-5 flex items-start gap-4 relative overflow-hidden"
            >

              {/* SHINE EFFECT */}
              <motion.div
                animate={{
                  x: ["-120%", "250%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.4,
                }}
                className="absolute top-0 left-0 w-[40%] h-full bg-white/30 skew-x-[-20deg]"
              />

              <div className="absolute top-0 right-0 bg-secondary w-11 h-11 rounded-bl-2xl flex items-center justify-center">
                {item.icon}
              </div>

              <div>
                <h3 className="font-heading text-primary text-[22px] font-bold">
                  {item.title}
                </h3>

                <p className="font-body text-gray-500 text-[14px] leading-7 mt-2">
                  Compassionate guidance and strategic solutions for every legal matter.
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:grid mt-20 grid-cols-[1fr_350px_1fr] gap-10 items-center">

          {/* LEFT */}
          <div className="space-y-6">
            {leftAreas.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                style={{
                  marginLeft: index === 0 || index === 2 ? "70px" : "5px",
                }}
                className="w-[85%] bg-white shadow-[0_10px_35px_rgba(0,0,0,0.08)] rounded-xl px-7 py-6 flex items-start gap-5 relative overflow-hidden"
              >

                {/* SHINE EFFECT */}
                <motion.div
                  animate={{
                    x: ["-120%", "250%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                  className="absolute top-0 left-0 w-[40%] h-full bg-white/30 skew-x-[-20deg]"
                />

                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                  className="absolute top-0 right-0 bg-secondary w-12 h-12 rounded-bl-2xl flex items-center justify-center"
                >
                  {item.icon}
                </motion.div>

                <div>
                  <h3 className="font-heading text-primary text-[26px] font-bold">
                    {item.title}
                  </h3>

                  <p className="font-body text-gray-500 text-[15px] leading-7 mt-2 max-w-[260px]">
                    Compassionate guidance and strategic solutions for every legal matter.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CENTER IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, -18, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-secondary/20 blur-[70px] rounded-full scale-110"></div>

              <motion.img
                whileHover={{ scale: 1.06 }}
                src={practiceImg}
                alt="law"
                className="relative z-10 w-[260px] h-[260px] md:w-[330px] md:h-[330px] object-cover rounded-full border-[10px] border-white shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <div className="space-y-6">
            {rightAreas.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                style={{
                  marginRight: index === 0 || index === 2 ? "70px" : "5px",
                  marginLeft: "auto",
                }}
                className="w-[85%] bg-white shadow-[0_10px_35px_rgba(0,0,0,0.08)] rounded-xl px-7 py-6 flex items-start gap-5 relative overflow-hidden"
              >

                {/* SHINE EFFECT */}
                <motion.div
                  animate={{
                    x: ["-120%", "250%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                  className="absolute top-0 left-0 w-[40%] h-full bg-white/30 skew-x-[-20deg]"
                />

                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                  className="absolute top-0 left-0 bg-secondary w-12 h-12 rounded-br-2xl flex items-center justify-center"
                >
                  {item.icon}
                </motion.div>

                <div className="ml-4">
                  <h3 className="font-heading text-primary text-[26px] font-bold">
                    {item.title}
                  </h3>

                  <p className="font-body text-gray-500 text-[15px] leading-7 mt-2 max-w-[260px]">
                    Compassionate guidance and strategic solutions for every legal matter.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}