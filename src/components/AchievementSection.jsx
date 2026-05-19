// // src/components/AchievementsSection.jsx

// import { motion } from "framer-motion";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";

// import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
// import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
// import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
// import TrainOutlinedIcon from "@mui/icons-material/TrainOutlined";
// import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
// import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
// import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";

// import lawBg from "../assets/law-bg.jpg";

// import ach1 from "../assets/ach-1.jpg";
// import ach2 from "../assets/ach-2.jpg";
// import ach3 from "../assets/ach-3.jpg";
// import ach4 from "../assets/ach-4.jpg";
// import ach5 from "../assets/ach-5.jpg";
// import ach6 from "../assets/ach-6.jpg";

// const achievements = [
//   {
//     title: "Additional Standing Counsel for South Delhi Municipal Corporation",
//     image: ach1,
//     icon: <ShieldOutlinedIcon className="!text-white !text-[22px]" />,
//   },
//   {
//     title: "Panel Lawyer for East Delhi Municipal Corporation",
//     image: ach2,
//     icon: <AccountBalanceOutlinedIcon className="!text-white !text-[22px]" />,
//   },
//   {
//     title: "Panel Lawyer for Delhi Metro Rail Corporation",
//     image: ach3,
//     icon: <TrainOutlinedIcon className="!text-white !text-[22px]" />,
//   },
//   {
//     title: "Panel Lawyer for Union of India",
//     image: ach4,
//     icon: <PublicOutlinedIcon className="!text-white !text-[22px]" />,
//   },
//   {
//     title: "Ex-Panel Lawyer for New Delhi Municipal Corporation",
//     image: ach5,
//     icon: <LocationCityOutlinedIcon className="!text-white !text-[22px]" />,
//   },
//   {
//     title: "Top Member of DCD",
//     image: ach6,
//     icon: <GroupsOutlinedIcon className="!text-white !text-[22px]" />,
//   },
// ];

// export default function AchievementsSection() {
//   return (
//     <section className="relative py-16 md:py-28 overflow-hidden font-body">

//       {/* BACKGROUND */}
//       <motion.div
//         animate={{
//           scale: [1, 1.05, 1],
//         }}
//         transition={{
//           duration: 12,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="absolute inset-0"
//       >
//         <img
//           src={lawBg}
//           alt="background"
//           className="w-full h-full object-cover opacity-90"
//         />

//         <div className="absolute inset-0 bg-black/50" />
//       </motion.div>

//       {/* GOLD GLOW */}
//       <motion.div
//         animate={{
//           opacity: [0.15, 0.3, 0.15],
//           scale: [1, 1.2, 1],
//         }}
//         transition={{
//           duration: 7,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="absolute top-[15%] left-[-120px] w-[320px] h-[320px] bg-secondary rounded-full blur-[140px]"
//       />

//       {/* FLOATING GAVEL */}
//       <motion.div
//         animate={{
//           y: [0, -18, 0],
//           rotate: [-10, -4, -10],
//         }}
//         transition={{
//           duration: 6,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="absolute top-[10%] right-[5%] opacity-[0.06] hidden xl:block"
//       >
//         <GavelOutlinedIcon className="!text-[200px] text-white" />
//       </motion.div>

//       <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12">

//         {/* TITLE */}
//         <motion.div
//           initial={{ opacity: 0, y: 70 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//           className="text-center max-w-[760px] mx-auto"
//         >

//           <motion.div
//             initial={{ opacity: 0, scale: 0.7 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.2 }}
//             className="flex items-center justify-center gap-2 text-secondary"
//           >
//             <motion.div
//               animate={{
//                 rotate: [0, 12, -12, 0],
//               }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//               }}
//             >
//               <GavelOutlinedIcon className="!text-[18px]" />
//             </motion.div>

//             <p className="uppercase tracking-[3px] text-xs sm:text-sm font-semibold font-body">
//               Achievements
//             </p>
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.2 }}
//             className="font-heading text-white text-[28px] sm:text-[42px] md:text-[60px] font-bold mt-4 leading-tight sm:leading-none"
//           >
//             Our Achievements
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.4 }}
//             className="text-gray-300 text-[14px] sm:text-[15px] md:text-[18px] leading-7 sm:leading-8 mt-5 sm:mt-6 font-body"
//           >
//             A legacy of trust, dedication, and excellence in delivering
//             outstanding legal representation.
//           </motion.p>
//         </motion.div>

//         {/* SLIDER */}
//         <div className="mt-12 md:mt-16">

//           <Swiper
//             modules={[Navigation, Autoplay]}
//             navigation
//             autoplay={{
//               delay: 2500,
//               disableOnInteraction: false,
//             }}
//             loop={true}
//             speed={1000}
//             spaceBetween={24}
//             breakpoints={{
//               0: { slidesPerView: 1.05 },
//               640: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//               1280: { slidesPerView: 4 },
//             }}
//             className="pb-10"
//           >

//             {achievements.map((item, index) => (
//               <SwiperSlide key={index}>

//                 <motion.div
//                   initial={{ opacity: 0, y: 80 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{
//                     duration: 0.7,
//                     delay: index * 0.1,
//                   }}
//                   viewport={{ once: true }}
//                   whileHover={{
//                     y: -12,
//                     scale: 1.02,
//                   }}
//                   className="bg-white rounded-[22px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.25)] group relative"
//                 >

//                   {/* SHINE EFFECT */}
//                   <motion.div
//                     animate={{
//                       x: ["-120%", "250%"],
//                     }}
//                     transition={{
//                       duration: 4,
//                       repeat: Infinity,
//                       delay: index * 0.5,
//                     }}
//                     className="absolute top-0 left-0 w-[40%] h-full bg-white/20 skew-x-[-20deg] z-20"
//                   />

//                   {/* IMAGE */}
//                   <div className="relative overflow-hidden h-[160px] sm:h-[190px] md:h-[210px]">

//                     <motion.img
//                       whileHover={{ scale: 1.1 }}
//                       transition={{ duration: 0.7 }}
//                       src={item.image}
//                       alt={item.title}
//                       className="w-full h-full object-cover"
//                     />

//                     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 duration-500" />
//                   </div>

//                   {/* CONTENT */}
//                   <div className="relative px-5 sm:px-6 pt-10 sm:pt-12 pb-6 sm:pb-7 text-center">

//                     {/* ICON */}
//                     <motion.div
//                       animate={{
//                         y: [0, -6, 0],
//                       }}
//                       transition={{
//                         duration: 3,
//                         repeat: Infinity,
//                         delay: index * 0.3,
//                       }}
//                       className="absolute -top-7 sm:-top-8 left-1/2 -translate-x-1/2 w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-secondary flex items-center justify-center border-[5px] border-white shadow-xl"
//                     >
//                       {item.icon}
//                     </motion.div>

//                     <h3 className="text-primary font-heading font-bold leading-snug text-[18px] sm:text-[21px] min-h-[70px] sm:min-h-[90px]">
//                       {item.title}
//                     </h3>

//                   </div>

//                 </motion.div>

//               </SwiperSlide>
//             ))}

//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// }




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

import lawBg from "../assets/law-bg.webp";

import ach1 from "../assets/ach-1.webp";
import ach2 from "../assets/ach-2.webp";
import ach3 from "../assets/ach-3.webp";
import ach4 from "../assets/ach-4.webp";
import ach5 from "../assets/ach-5.webp";
import ach6 from "../assets/ach-6.webp";

const achievements = [
  {
    title: "Additional Standing Counsel for South Delhi Municipal Corporation",
    image: ach1,
    icon: <ShieldOutlinedIcon className="!text-white !text-[22px]" />,
  },
  {
    title: "Panel Lawyer for East Delhi Municipal Corporation",
    image: ach2,
    icon: <AccountBalanceOutlinedIcon className="!text-white !text-[22px]" />,
  },
  {
    title: "Panel Lawyer for Delhi Metro Rail Corporation",
    image: ach3,
    icon: <TrainOutlinedIcon className="!text-white !text-[22px]" />,
  },
  {
    title: "Panel Lawyer for Union of India",
    image: ach4,
    icon: <PublicOutlinedIcon className="!text-white !text-[22px]" />,
  },
  {
    title: "Ex-Panel Lawyer for New Delhi Municipal Corporation",
    image: ach5,
    icon: <LocationCityOutlinedIcon className="!text-white !text-[22px]" />,
  },
  {
    title: "Top Member of DCD",
    image: ach6,
    icon: <GroupsOutlinedIcon className="!text-white !text-[22px]" />,
  },
];

export default function AchievementsSection() {
  return (
    <section className="relative py-16 md:py-28 overflow-hidden font-body">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src={lawBg}
          alt="background"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover opacity-90"
        />

        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* LIGHT GLOW */}
      <div className="absolute top-[15%] left-[-120px] w-[180px] h-[180px] bg-secondary/10 rounded-full blur-xl" />

      {/* STATIC GAVEL */}
      <div className="absolute top-[10%] right-[5%] opacity-[0.04] hidden xl:block">
        <GavelOutlinedIcon className="!text-[180px] text-white" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-[760px] mx-auto"
        >
          <div className="flex items-center justify-center gap-2 text-secondary">
            <GavelOutlinedIcon className="!text-[18px]" />

            <p className="uppercase tracking-[3px] text-xs sm:text-sm font-semibold font-body">
              Achievements
            </p>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-heading text-white text-[28px] sm:text-[42px] md:text-[60px] font-bold mt-4 leading-tight sm:leading-none"
          >
            Our Achievements
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-gray-300 text-[14px] sm:text-[15px] md:text-[18px] leading-7 sm:leading-8 mt-5 sm:mt-6 font-body"
          >
            A legacy of trust, dedication, and excellence in delivering
            outstanding legal representation.
          </motion.p>
        </motion.div>

        {/* SLIDER */}
        <div className="mt-12 md:mt-16">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={500}
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1.05 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-10"
          >
            {achievements.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  viewport={{ once: true }}
                  className="bg-white rounded-[22px] overflow-hidden shadow-xl group relative transition-all duration-300 hover:-translate-y-1 transform-gpu"
                >
                  {/* IMAGE */}
                  <div className="relative overflow-hidden h-[160px] sm:h-[190px] md:h-[210px]">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
                  </div>

                  {/* CONTENT */}
                  <div className="relative px-5 sm:px-6 pt-10 sm:pt-12 pb-6 sm:pb-7 text-center">
                    {/* ICON */}
                    <div className="absolute -top-7 sm:-top-8 left-1/2 -translate-x-1/2 w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-secondary flex items-center justify-center border-[5px] border-white shadow-lg">
                      {item.icon}
                    </div>

                    <h3 className="text-primary font-heading font-bold leading-snug text-[18px] sm:text-[21px] min-h-[70px] sm:min-h-[90px]">
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