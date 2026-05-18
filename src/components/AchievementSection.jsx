// src/components/AchievementsSection.jsx

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import TrainOutlinedIcon from "@mui/icons-material/TrainOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";

import lawBg from "../assets/law-bg.jpg";

const achievements = [
  {
    title:
      "Additional Standing Counsel for South Delhi Municipal Corporation",

    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",

    icon: <ShieldOutlinedIcon className="!text-white !text-[22px]" />,
  },

  {
    title:
      "Panel Lawyer for East Delhi Municipal Corporation",

    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",

    icon: (
      <AccountBalanceOutlinedIcon className="!text-white !text-[22px]" />
    ),
  },

  {
    title:
      "Panel Lawyer for Delhi Metro Rail Corporation",

    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",

    icon: <TrainOutlinedIcon className="!text-white !text-[22px]" />,
  },

  {
    title: "Panel Lawyer for Union of India",

    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop",

    icon: <PublicOutlinedIcon className="!text-white !text-[22px]" />,
  },

  {
    title:
      "Ex-Panel Lawyer for New Delhi Municipal Corporation",

    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop",

    icon: (
      <LocationCityOutlinedIcon className="!text-white !text-[22px]" />
    ),
  },

  {
    title: "To -OP Member of DCD",

    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",

    icon: <GroupsOutlinedIcon className="!text-white !text-[22px]" />,
  },
];

export default function AchievementsSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">

      {/* BG IMAGE */}
      {/* <div className="absolute inset-0 bg-black/35">

        <img
          src={lawBg}
          alt="background"
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-black/35" />
      </div> */}
      {/* BG IMAGE */}
<div className="absolute inset-0">

  <img
    src={lawBg}
    alt="background"
    className="w-full h-full object-cover opacity-90"
  />

</div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-5 sm:px-6 md:px-12">

        {/* TOP CONTENT */}
        <div className="text-center max-w-[760px] mx-auto">

          <div className="flex items-center justify-center gap-2 text-secondary">
            <GavelOutlinedIcon className="!text-[18px]" />

            <p className="uppercase tracking-[3px] text-sm font-semibold">
              Achievements
            </p>
          </div>

          <h2 className="font-heading text-white text-[34px] sm:text-[42px] md:text-[60px] font-bold mt-4 leading-none">
            Our Achievements
          </h2>

          <p className="text-gray-300 text-[15px] md:text-[18px] leading-8 mt-6">
            A legacy of trust, dedication, and excellence in
            delivering outstanding legal representation.
          </p>
        </div>

        {/* SLIDER */}
        <div className="mt-16">

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={24}
            breakpoints={{
              0: {
                slidesPerView: 1.1,
              },

              640: {
                slidesPerView: 2,
              },

              1024: {
                slidesPerView: 3,
              },

              1280: {
                slidesPerView: 4,
              },
            }}
            className="pb-10"
          >

            {achievements.map((item, index) => (
              <SwiperSlide key={index}>

                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="
                    bg-white rounded-[22px] overflow-hidden
                    shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                    group
                  "
                >

                  {/* IMAGE */}
                  <div className="relative overflow-hidden h-[210px]">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="
                        w-full h-full object-cover
                        group-hover:scale-110
                        duration-700
                      "
                    />

                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 duration-500" />
                  </div>

                  {/* CONTENT */}
                  <div className="relative px-6 pt-12 pb-7 text-center">

                    {/* ICON */}
                    <div
                      className="
                        absolute -top-8 left-1/2 -translate-x-1/2
                        w-16 h-16 rounded-full
                        bg-secondary
                        flex items-center justify-center
                        border-[5px] border-white
                        shadow-xl
                      "
                    >
                      {item.icon}
                    </div>

                    <h3
                      className="
                        text-primary
                        font-heading
                        font-bold
                        leading-snug
                        text-[21px]
                        min-h-[90px]
                      "
                    >
                      {item.title}
                    </h3>

                  </div>
                </motion.div>

              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}