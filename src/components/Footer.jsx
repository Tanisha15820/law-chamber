// // src/components/Footer.jsx

// import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";

// import XIcon from "@mui/icons-material/X";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import TelegramIcon from "@mui/icons-material/Telegram";

// export default function Footer() {
//   return (
//     <footer className="bg-black overflow-hidden">

//       {/* TOP HEADING */}
//       <div className="relative border-b border-white/10 overflow-hidden">

//         {/* BG IMAGE */}
//         <div
//           className="
//             absolute inset-0
//             bg-cover bg-center
//             opacity-30
//           "
//           style={{
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1600&auto=format&fit=crop')",
//           }}
//         ></div>

//         {/* DARK OVERLAY */}
//         <div className="absolute inset-0 bg-black/60"></div>

//         <div className="relative z-10 max-w-[1450px] mx-auto px-5 sm:px-8 md:px-14 py-12">

//           <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

//             {/* LEFT */}
//             <div>

//               <div className="flex items-center gap-2 mb-3">

//                 <GavelOutlinedIcon className="!text-[16px] text-[#c79a47]" />

//                 <p className="uppercase tracking-[2px] text-[#c79a47] text-[12px] font-semibold">
//                   RKG Law Chamber
//                 </p>
//               </div>

//               <h2
//                 className="
//                   text-white
//                   font-bold
//                   leading-[1.05]
//                   text-[30px]
//                   sm:text-[36px]
//                   lg:text-[50px]
//                   font-heading
//                 "
//               >
//                 Secure Your Future Today
//               </h2>
//             </div>

//             {/* RIGHT TEXT */}
//             <p className="text-gray-300 text-[14px] leading-8 max-w-[350px]">
//               Trusted legal guidance and professional representation
//               tailored to protect your rights, business, and future.
//             </p>

//           </div>

//         </div>
//       </div>

//       {/* MAIN FOOTER */}
//       <div className="max-w-[1450px] mx-auto px-5 sm:px-8 md:px-14 py-16">

//         <div className="grid lg:grid-cols-[1.3fr_1fr_1fr] gap-16">

//           {/* LEFT LOGO CONTENT */}
//           <div className="lg:pr-10">

//             {/* ICON */}
//             <div className="mb-6">

//               <div
//                 className="
//                   w-20 h-20
//                   rounded-full
//                   border border-[#c79a47]
//                   flex items-center justify-center
//                 "
//               >

//                 <GavelOutlinedIcon className="!text-[42px] text-[#c79a47]" />
//               </div>
//             </div>

//             {/* TEXT */}
//             <p className="text-gray-300 leading-8 text-[15px] max-w-[420px]">
//               RKG Law Chamber is committed to delivering trusted,
//               professional, and strategic legal solutions with integrity,
//               dedication, and client-focused representation.
//             </p>

//             {/* SOCIALS */}
//             <div className="flex items-center gap-4 mt-8">

//               {[
//                 <XIcon />,
//                 <InstagramIcon />,
//                 <YouTubeIcon />,
//                 <TelegramIcon />,
//               ].map((icon, index) => (
//                 <div
//                   key={index}
//                   className="
//                     w-12 h-12
//                     bg-white
//                     hover:bg-[#c79a47]
//                     hover:text-white
//                     transition-all duration-300
//                     rounded-xl
//                     flex items-center justify-center
//                     text-[#111]
//                     cursor-pointer
//                   "
//                 >
//                   {icon}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* QUICK LINKS */}
//           <div className="lg:border-l lg:border-white/10 lg:pl-12">

//             <h3 className="text-white text-[26px] font-serif font-bold mb-6">
//               Quick Links
//             </h3>

//             <ul className="space-y-4">

//               {[
//                 "Home",
//                 "About Us",
//                 "Testimonials",
//                 "Practice Areas",
//                 "Services",
//                 "Contact Us",
//               ].map((item, index) => (
//                 <li
//                   key={index}
//                   className="
//                     text-gray-300
//                     hover:text-[#c79a47]
//                     transition-all duration-300
//                     cursor-pointer
//                     text-[15px]
//                   "
//                 >
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* SERVICES */}
//           <div className="lg:border-l lg:border-white/10 lg:pl-12">

//             <h3 className="text-white text-[26px] font-serif font-bold mb-6">
//               Our Services
//             </h3>

//             <ul className="space-y-4">

//               {[
//                 "Corporate Law",
//                 "Criminal Law",
//                 "Family Law",
//                 "Property Law",
//                 "Business Law",
//                 "Immigration Law",
//               ].map((item, index) => (
//                 <li
//                   key={index}
//                   className="
//                     text-gray-300
//                     hover:text-[#c79a47]
//                     transition-all duration-300
//                     cursor-pointer
//                     text-[15px]
//                   "
//                 >
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>

//         </div>

//         {/* BOTTOM */}
//         <div
//           className="
//             border-t border-white/10
//             mt-16
//             pt-8
//             flex flex-col md:flex-row
//             items-center
//             justify-between
//             gap-5
//           "
//         >

//           <p className="text-gray-400 text-[14px] text-center md:text-left">
//             © 2026 RKG Law Chamber. All Rights Reserved.
//           </p>

//           <p className="text-gray-400 text-[14px] text-center md:text-right">
//             Designed with professionalism & trust for legal excellence.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// src/components/Footer.jsx

import { motion } from "framer-motion";

import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";

import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function Footer() {
  return (
    <footer className="relative bg-black overflow-hidden">

      {/* FLOATING GOLD GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-120px] left-[-100px] w-[320px] h-[320px] rounded-full bg-[#c79a47] blur-[130px]"
      />

      {/* FLOATING GAVEL */}
      <motion.div
        animate={{
          y: [0, -18, 0],
          rotate: [-12, -5, -12],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[4%] bottom-[12%] opacity-[0.04] hidden lg:block"
      >
        <GavelOutlinedIcon className="!text-[260px] text-[#c79a47]" />
      </motion.div>

      {/* TOP HEADING */}
      <div className="relative border-b border-white/10 overflow-hidden">

        {/* BG IMAGE */}
        <motion.div
          animate={{
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute inset-0
            bg-cover bg-center
            opacity-30
          "
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1600&auto=format&fit=crop')",
          }}
        ></motion.div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/65"></div>

        {/* MOVING LIGHT */}
        <motion.div
          animate={{
            x: ["-120%", "220%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 left-0 w-[20%] h-full bg-white/10 blur-2xl skew-x-[-25deg]"
        />

        <div className="relative z-10 max-w-[1450px] mx-auto px-5 sm:px-8 md:px-14 py-12">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >

              <div className="flex items-center gap-2 mb-3">

                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                >
                  <GavelOutlinedIcon className="!text-[16px] text-[#c79a47]" />
                </motion.div>

                <p className="uppercase tracking-[2px] text-[#c79a47] text-[12px] font-semibold">
                  RKG Law Chamber
                </p>
              </div>

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 80,
                  clipPath: "inset(100% 0% 0% 0%)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  clipPath: "inset(0% 0% 0% 0%)",
                }}
                transition={{
                  duration: 1.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="
                  text-white
                  font-bold
                  leading-[1.05]
                  text-[30px]
                  sm:text-[36px]
                  lg:text-[50px]
                  font-heading
                "
              >
                Secure Your Future Today
              </motion.h2>
            </motion.div>

            {/* RIGHT TEXT */}
            <motion.p
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="text-gray-300 text-[14px] leading-8 max-w-[350px]"
            >
              Trusted legal guidance and professional representation
              tailored to protect your rights, business, and future.
            </motion.p>

          </div>

        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="relative z-10 max-w-[1450px] mx-auto px-5 sm:px-8 md:px-14 py-16">

        <div className="grid lg:grid-cols-[1.3fr_1fr_1fr] gap-16">

          {/* LEFT LOGO CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="lg:pr-10"
          >

            {/* ICON */}
            <div className="mb-6">

              <motion.div
                animate={{
                  y: [0, -10, 0],
                  boxShadow: [
                    "0 0 0px rgba(199,154,71,0.2)",
                    "0 0 30px rgba(199,154,71,0.35)",
                    "0 0 0px rgba(199,154,71,0.2)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  w-20 h-20
                  rounded-full
                  border border-[#c79a47]
                  flex items-center justify-center
                "
              >

                <GavelOutlinedIcon className="!text-[42px] text-[#c79a47]" />
              </motion.div>
            </div>

            {/* TEXT */}
            <p className="text-gray-300 leading-8 text-[15px] max-w-[420px]">
              RKG Law Chamber is committed to delivering trusted,
              professional, and strategic legal solutions with integrity,
              dedication, and client-focused representation.
            </p>

            {/* SOCIALS */}
            <div className="flex items-center gap-4 mt-8">

              {[
                <XIcon />,
                <InstagramIcon />,
                <YouTubeIcon />,
                <TelegramIcon />,
              ].map((icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                    rotate: 6,
                    scale: 1.08,
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                  }}
                  viewport={{ once: true }}
                  className="
                    w-12 h-12
                    bg-white
                    hover:bg-[#c79a47]
                    hover:text-white
                    transition-all duration-300
                    rounded-xl
                    flex items-center justify-center
                    text-[#111]
                    cursor-pointer
                  "
                >
                  {icon}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:border-l lg:border-white/10 lg:pl-12"
          >

            <h3 className="text-white text-[26px] font-serif font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {[
                "Home",
                "About Us",
                "Testimonials",
                "Practice Areas",
                "Services",
                "Contact Us",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{
                    x: 10,
                  }}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                  }}
                  viewport={{ once: true }}
                  className="
                    text-gray-300
                    hover:text-[#c79a47]
                    transition-all duration-300
                    cursor-pointer
                    text-[15px]
                  "
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* SERVICES */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:border-l lg:border-white/10 lg:pl-12"
          >

            <h3 className="text-white text-[26px] font-serif font-bold mb-6">
              Our Services
            </h3>

            <ul className="space-y-4">

              {[
                "Corporate Law",
                "Criminal Law",
                "Family Law",
                "Property Law",
                "Business Law",
                "Immigration Law",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{
                    x: 10,
                  }}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                  }}
                  viewport={{ once: true }}
                  className="
                    text-gray-300
                    hover:text-[#c79a47]
                    transition-all duration-300
                    cursor-pointer
                    text-[15px]
                  "
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* BOTTOM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            border-t border-white/10
            mt-16
            pt-8
            flex flex-col md:flex-row
            items-center
            justify-between
            gap-5
          "
        >

          <p className="text-gray-400 text-[14px] text-center md:text-left">
            © 2026 RKG Law Chamber. All Rights Reserved.
          </p>

          <p className="text-gray-400 text-[14px] text-center md:text-right">
            Designed with professionalism & trust for legal excellence.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}