// src/components/ServicesSection.jsx

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import criminalImg from "../assets/criminal.webp";
import familyImg from "../assets/family.webp";
import corporateImg from "../assets/corporate.webp";
import propertyImg from "../assets/property.webp";
import businessImg from "../assets/business.webp";
import immigrationImg from "../assets/immigration.webp";

const services = [
  {
    number: "01",
    title: "Criminal Law",
    desc: "We provide strong legal representation and strategic defense for criminal matters.",
    img: criminalImg,
  },
  {
    number: "02",
    title: "Family Law",
    desc: "Guidance and support for divorce, custody, family disputes, and legal protection.",
    img: familyImg,
  },
  {
    number: "03",
    title: "Corporate Law",
    desc: "Professional legal solutions for business agreements, disputes, and compliance.",
    img: corporateImg,
  },
  {
    number: "04",
    title: "Property Law",
    desc: "Expert assistance for property disputes, registrations, and legal documentation.",
    img: propertyImg,
  },
];

const extraServices = [
  {
    number: "05",
    title: "Business Law",
    desc: "Complete legal support for startups, contracts, and business disputes.",
    img: businessImg,
  },
  {
    number: "06",
    title: "Immigration Law",
    desc: "Assistance with visas, immigration process, and legal documentation.",
    img: immigrationImg,
  },
];

export default function ServicesSection() {
  const [showExtra, setShowExtra] = useState(false);

  const extraServicesRef = useRef(null);

  return (
    <section
      id="services"
      className="relative bg-[#f8f8f8] py-16 md:py-24 overflow-hidden font-body"
    >
      {/* BACKGROUND GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[10%] left-[-120px] w-[320px] h-[320px] rounded-full bg-secondary blur-[120px]"
      />

      {/* FLOATING ICON */}
      <motion.div
        animate={{
          y: [0, -18, 0],
          rotate: [-12, -4, -12],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[10%] right-[5%] hidden xl:block opacity-[0.05]"
      >
        <GavelOutlinedIcon className="!text-[220px] text-secondary" />
      </motion.div>

      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 md:px-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 lg:gap-16 items-start">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-28"
          >
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-2 mb-3 sm:mb-4"
            >
              <motion.div
                animate={{
                  rotate: [0, 12, -12, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                <GavelOutlinedIcon className="!text-[16px] text-secondary" />
              </motion.div>

              <p className="uppercase tracking-[2px] text-secondary text-[11px] sm:text-[12px] font-semibold font-body">
                Our Services
              </p>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-[#111] font-bold leading-[1.05] text-[30px] sm:text-[48px] lg:text-[60px] font-heading"
            >
              Legal Services
              <br />
              We Provide
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[#555] text-[14px] sm:text-[16px] leading-7 sm:leading-8 mt-4 sm:mt-6 max-w-[360px] font-body"
            >
              Our experienced legal team provides trusted legal solutions with
              professionalism, strategy, and dedication for every client.
            </motion.p>

            {/* BUTTON */}
            <motion.button
             data-services-button="true"
              onClick={() => {
                if (!showExtra) {
                  setShowExtra(true);

                  setTimeout(() => {
                    extraServicesRef.current?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }, 200);
                } else {
                  setShowExtra(false);
                }
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#111",
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 sm:mt-10 w-full sm:w-auto bg-secondary transition-all duration-300 text-white px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-center sm:justify-start gap-3 text-[14px] sm:text-[15px] font-medium rounded-lg"
            >
              {showExtra ? "Hide Services" : "Explore More Services"}

              <motion.span
                animate={{
                  x: [0, 4, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className="w-6 h-6 rounded-full bg-white text-[#111] flex items-center justify-center"
              >
                <ArrowForwardRoundedIcon className="!text-[16px]" />
              </motion.span>
            </motion.button>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {/* DEFAULT SERVICES */}
            {services.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -4,
                }}
                className={`bg-white border border-transparent hover:border-secondary/30 hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)] transition-all duration-500 overflow-hidden relative group rounded-2xl ${
                  index % 2 !== 0 ? "md:mt-20" : ""
                }`}
              >
                {/* FLOATING GRADIENT */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.08, 0.16, 0.08],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                  className="absolute top-[-80px] right-[-60px] w-[180px] h-[180px] rounded-full bg-secondary blur-[70px]"
                />

                {/* TOP */}
                <div className="flex items-center gap-3 sm:gap-4 px-5 sm:px-6 pt-5 sm:pt-6 pb-3 sm:pb-4 relative z-10">
                  <motion.div
                    animate={{
                      rotate: [0, 8, -8, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className="bg-[#eef4f4] px-2 sm:px-3 py-1 sm:py-2 rounded-md"
                  >
                    <span className="text-[#111] text-[14px] sm:text-[16px] font-bold">
                      {item.number}
                    </span>
                  </motion.div>

                  <h3 className="text-[#111] text-[20px] sm:text-[30px] font-heading font-bold leading-none">
                    {item.title}
                  </h3>
                </div>

                {/* IMAGE */}
                <div className="overflow-hidden h-[180px] sm:h-[250px]">
                  <motion.img
                    whileHover={{
                      scale: 1.06,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="px-5 sm:px-6 py-5 sm:py-6 relative z-10">
                  <p className="text-[#555] leading-7 sm:leading-8 text-[14px] sm:text-[15px] font-body">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* EXTRA SERVICES */}
            <AnimatePresence>
              {showExtra && (
                <>
                  <div
                    ref={extraServicesRef}
                    className="col-span-1 md:col-span-2 h-[1px]"
                  ></div>

                  {extraServices.map((item, index) => (
                    <motion.div
                      key={item.number}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.5 }}
                      whileHover={{
                        y: -4,
                      }}
                      className={`bg-white border border-transparent hover:border-secondary/30 hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)] transition-all duration-500 overflow-hidden relative group rounded-2xl ${
                        index === 1 ? "md:mt-20" : ""
                      }`}
                    >
                      {/* FLOATING GRADIENT */}
                      <motion.div
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0.08, 0.16, 0.08],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3,
                        }}
                        className="absolute top-[-80px] right-[-60px] w-[180px] h-[180px] rounded-full bg-secondary blur-[70px]"
                      />

                      {/* TOP */}
                      <div className="flex items-center gap-3 sm:gap-4 px-5 sm:px-6 pt-5 sm:pt-6 pb-3 sm:pb-4 relative z-10">
                        <motion.div
                          animate={{
                            rotate: [0, 8, -8, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: index * 0.2,
                          }}
                          className="bg-[#eef4f4] px-2 sm:px-3 py-1 sm:py-2 rounded-md"
                        >
                          <span className="text-[#111] text-[14px] sm:text-[16px] font-bold">
                            {item.number}
                          </span>
                        </motion.div>

                        <h3 className="text-[#111] text-[20px] sm:text-[30px] font-heading font-bold leading-none">
                          {item.title}
                        </h3>
                      </div>

                      {/* IMAGE */}
                      <div className="overflow-hidden h-[180px] sm:h-[250px]">
                        <motion.img
                          whileHover={{
                            scale: 1.06,
                          }}
                          transition={{
                            duration: 0.6,
                            ease: "easeOut",
                          }}
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* CONTENT */}
                      <div className="px-5 sm:px-6 py-5 sm:py-6 relative z-10">
                        <p className="text-[#555] leading-7 sm:leading-8 text-[14px] sm:text-[15px] font-body">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}




// // src/components/ServicesSection.jsx

// import { useState, useRef } from "react";

// import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
// import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

// import criminalImg from "../assets/criminal.webp";
// import familyImg from "../assets/family.webp";
// import corporateImg from "../assets/corporate.webp";
// import propertyImg from "../assets/property.webp";
// import businessImg from "../assets/business.webp";
// import immigrationImg from "../assets/immigration.webp";

// const services = [
//   {
//     number: "01",
//     title: "Criminal Law",
//     desc: "We provide strong legal representation and strategic defense for criminal matters.",
//     img: criminalImg,
//   },
//   {
//     number: "02",
//     title: "Family Law",
//     desc: "Guidance and support for divorce, custody, family disputes, and legal protection.",
//     img: familyImg,
//   },
//   {
//     number: "03",
//     title: "Corporate Law",
//     desc: "Professional legal solutions for business agreements, disputes, and compliance.",
//     img: corporateImg,
//   },
//   {
//     number: "04",
//     title: "Property Law",
//     desc: "Expert assistance for property disputes, registrations, and legal documentation.",
//     img: propertyImg,
//   },
// ];

// const extraServices = [
//   {
//     number: "05",
//     title: "Business Law",
//     desc: "Complete legal support for startups, contracts, and business disputes.",
//     img: businessImg,
//   },
//   {
//     number: "06",
//     title: "Immigration Law",
//     desc: "Assistance with visas, immigration process, and legal documentation.",
//     img: immigrationImg,
//   },
// ];

// export default function ServicesSection() {
//   const [showExtra, setShowExtra] = useState(false);

//   const extraServicesRef = useRef(null);

//   return (
//     <section
//       id="services"
//       className="relative bg-[#f8f8f8] py-16 md:py-24 overflow-hidden font-body"
//     >
//       {/* STATIC ICON */}
//       <div className="absolute top-[10%] right-[5%] hidden xl:block opacity-[0.03]">
//         <GavelOutlinedIcon className="!text-[180px] text-secondary" />
//       </div>

//       <div className="max-w-[1450px] mx-auto px-4 sm:px-6 md:px-14 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 lg:gap-16 items-start">
//           {/* LEFT SIDE */}
//           <div className="lg:sticky lg:top-28">
//             <div className="flex items-center gap-2 mb-3 sm:mb-4">
//               <GavelOutlinedIcon className="!text-[16px] text-secondary" />

//               <p className="uppercase tracking-[2px] text-secondary text-[11px] sm:text-[12px] font-semibold font-body">
//                 Our Services
//               </p>
//             </div>

//             <h2 className="text-[#111] font-bold leading-[1.05] text-[30px] sm:text-[48px] lg:text-[60px] font-heading">
//               Legal Services
//               <br />
//               We Provide
//             </h2>

//             <p className="text-[#555] text-[14px] sm:text-[16px] leading-7 sm:leading-8 mt-4 sm:mt-6 max-w-[360px] font-body">
//               Our experienced legal team provides trusted legal solutions with
//               professionalism, strategy, and dedication for every client.
//             </p>

//             {/* BUTTON */}
//             <button
//               data-services-button="true"
//               onClick={() => {
//                 if (!showExtra) {
//                   setShowExtra(true);

//                   setTimeout(() => {
//                     extraServicesRef.current?.scrollIntoView({
//                       behavior: "auto",
//                       block: "center",
//                     });
//                   }, 100);
//                 } else {
//                   setShowExtra(false);
//                 }
//               }}
//               className="mt-8 sm:mt-10 w-full sm:w-auto bg-secondary text-white px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-center sm:justify-start gap-3 text-[14px] sm:text-[15px] font-medium rounded-lg"
//             >
//               {showExtra ? "Hide Services" : "Explore More Services"}

//               <span className="w-6 h-6 rounded-full bg-white text-[#111] flex items-center justify-center">
//                 <ArrowForwardRoundedIcon className="!text-[16px]" />
//               </span>
//             </button>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
//             {/* DEFAULT SERVICES */}
//             {services.map((item, index) => (
//               <div
//                 key={index}
//                 className={`bg-white border border-transparent overflow-hidden relative rounded-2xl shadow-md ${
//                   index % 2 !== 0 ? "md:mt-20" : ""
//                 }`}
//               >
//                 {/* TOP */}
//                 <div className="flex items-center gap-3 sm:gap-4 px-5 sm:px-6 pt-5 sm:pt-6 pb-3 sm:pb-4 relative z-10">
//                   <div className="bg-[#eef4f4] px-2 sm:px-3 py-1 sm:py-2 rounded-md">
//                     <span className="text-[#111] text-[14px] sm:text-[16px] font-bold">
//                       {item.number}
//                     </span>
//                   </div>

//                   <h3 className="text-[#111] text-[20px] sm:text-[30px] font-heading font-bold leading-none">
//                     {item.title}
//                   </h3>
//                 </div>

//                 {/* IMAGE */}
//                 <div className="overflow-hidden h-[160px] sm:h-[190px]">
//                   <img
//                     src={item.img}
//                     alt={item.title}
//                     loading="lazy"
//                     decoding="async"
//                     fetchPriority="low"
//                     width={700}
//                     height={190}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* CONTENT */}
//                 <div className="px-5 sm:px-6 py-5 sm:py-6 relative z-10">
//                   <p className="text-[#555] leading-7 sm:leading-8 text-[14px] sm:text-[15px] font-body">
//                     {item.desc}
//                   </p>
//                 </div>
//               </div>
//             ))}

//             {/* EXTRA SERVICES — hidden instead of unmounted, taaki images preload ho sakein */}
//             <div
//               ref={extraServicesRef}
//               className={`col-span-1 md:col-span-2 h-[1px] ${showExtra ? "block" : "hidden"}`}
//             />

//             {extraServices.map((item, index) => (
//               <div
//                 key={item.number}
//                 className={`bg-white border border-transparent overflow-hidden relative rounded-2xl shadow-md ${
//                   index === 1 ? "md:mt-20" : ""
//                 } ${showExtra ? "block" : "hidden"}`}
//               >
//                 {/* TOP */}
//                 <div className="flex items-center gap-3 sm:gap-4 px-5 sm:px-6 pt-5 sm:pt-6 pb-3 sm:pb-4 relative z-10">
//                   <div className="bg-[#eef4f4] px-2 sm:px-3 py-1 sm:py-2 rounded-md">
//                     <span className="text-[#111] text-[14px] sm:text-[16px] font-bold">
//                       {item.number}
//                     </span>
//                   </div>

//                   <h3 className="text-[#111] text-[20px] sm:text-[30px] font-heading font-bold leading-none">
//                     {item.title}
//                   </h3>
//                 </div>

//                 {/* IMAGE */}
//                 <div className="overflow-hidden h-[160px] sm:h-[190px]">
//                   <img
//                     src={item.img}
//                     alt={item.title}
//                     loading="lazy"
//                     decoding="async"
//                     fetchPriority="low"
//                     width={700}
//                     height={190}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* CONTENT */}
//                 <div className="px-5 sm:px-6 py-5 sm:py-6 relative z-10">
//                   <p className="text-[#555] leading-7 sm:leading-8 text-[14px] sm:text-[15px] font-body">
//                     {item.desc}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }