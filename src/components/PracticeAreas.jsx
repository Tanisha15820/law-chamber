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
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">

      {/* BACKGROUND SHAPES */}
      <div className="absolute top-0 left-0 opacity-[0.06] rotate-[-20deg]">
        <GavelOutlinedIcon className="!text-[220px]" />
      </div>

      <div className="absolute bottom-0 right-0 opacity-[0.06] rotate-[18deg]">
        <BalanceOutlinedIcon className="!text-[220px]" />
      </div>

      <div className="max-w-[1450px] mx-auto px-5 sm:px-6 md:px-14 relative z-10">

        {/* TOP CONTENT */}
        <div className="text-center max-w-[700px] mx-auto">

          <p className="text-secondary uppercase tracking-[3px] text-sm font-semibold">
            Practice Areas
          </p>

          <h2 className="font-heading text-primary text-[38px] md:text-[60px] font-bold mt-3">
            Our Practice Areas
          </h2>

          <p className="text-gray-500 text-[16px] leading-8 mt-4">
            We specialize in key legal domains to provide focused and
            effective representation with strategic legal solutions.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="mt-20 grid lg:grid-cols-[1fr_350px_1fr] gap-10 items-center">

          {/* LEFT CARDS */}
          <div className="space-y-6">

            {leftAreas.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                style={{
                  marginLeft:
                    index === 0 || index === 2 ? "100px" : "5px",
                }}
                className="
                  w-[85%]
                  bg-white shadow-[0_10px_35px_rgba(0,0,0,0.08)]
                  rounded-xl px-7 py-6 flex items-start gap-5
                  relative overflow-hidden transition-all duration-300
                "
              >

                {/* ICON */}
                <div className="absolute top-0 right-0 bg-secondary w-12 h-12 rounded-bl-2xl flex items-center justify-center">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-primary text-[26px] font-heading font-bold">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-[15px] leading-7 mt-2 max-w-[260px]">
                    Compassionate guidance and strategic solutions
                    for every legal matter.
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

            <div className="relative">

              {/* GLOW */}
              <div className="absolute inset-0 bg-secondary/20 blur-[70px] rounded-full scale-110"></div>

              <img
                src={practiceImg}
                alt="law"
                className="relative z-10 w-[260px] h-[260px] md:w-[330px] md:h-[330px] object-cover rounded-full border-[10px] border-white shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
              />
            </div>
          </motion.div>

          {/* RIGHT CARDS */}
        {/* RIGHT CARDS */}
<div className="space-y-6">

  {rightAreas.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      style={{
        marginLeft:
          index === 0 || index === 2 ? "100px" : "5px",
      }}
      className="
        w-[85%]
        bg-white shadow-[0_10px_35px_rgba(0,0,0,0.08)]
        rounded-xl px-7 py-6 flex items-start gap-5
        relative overflow-hidden transition-all duration-300
      "
    >

      {/* ICON */}
      <div className="absolute top-0 left-0 bg-secondary w-12 h-12 rounded-br-2xl flex items-center justify-center">
        {item.icon}
      </div>

      <div className="ml-4">
        <h3 className="text-primary text-[26px] font-heading font-bold">
          {item.title}
        </h3>

        <p className="text-gray-500 text-[15px] leading-7 mt-2 max-w-[260px]">
          Compassionate guidance and strategic solutions
          for every legal matter.
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