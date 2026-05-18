
// src/components/Testimonials.jsx

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";

import clientImg from "../assets/about-top.jpeg";

const testimonialImg =
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop";

const testimonials = [
  {
    name: "David Anderson",
    role: "Founder of ABC Co.",
    review:
      "They guided me through a difficult legal matter with professionalism and consistent support.",
    image: clientImg,
  },

  {
    name: "Sophia Miller",
    role: "Business Owner",
    review:
      "Exceptional legal expertise and transparent communication throughout the process.",
    image: clientImg,
  },

  {
    name: "Michael Brown",
    role: "Entrepreneur",
    review:
      "Their team handled my case with dedication and achieved the best possible outcome.",
    image: clientImg,
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-16 md:py-24 bg-[#faf8f4] overflow-hidden">

      {/* FLOATING BG ICON */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [25, 18, 25],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 right-10 opacity-[0.05] rotate-[25deg] hidden md:block"
      >
        <GavelOutlinedIcon className="!text-[180px] text-secondary" />
      </motion.div>

      {/* GOLD GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-120px] left-[-120px] w-[320px] h-[320px] bg-secondary rounded-full blur-[120px]"
      />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-secondary uppercase tracking-[3px] text-xs sm:text-sm font-semibold"
            >
              Testimonials
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="font-heading text-primary text-[36px] sm:text-[48px] md:text-[62px] leading-tight font-bold mt-3"
            >
              Hear What Our Clients Say About Us
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-500 text-[15px] md:text-[16px] leading-8 mt-5 max-w-[520px]"
            >
              Our clients trust us for reliable legal guidance,
              transparent communication, and successful legal outcomes.
              We are committed to delivering professional support with
              integrity and dedication.
            </motion.p>

            {/* BUTTON */}
           {/* BUTTON */}
<motion.button
  whileHover={{
    scale: 1.04,
    backgroundColor: "#111",
  }}
  whileTap={{ scale: 0.95 }}
  onClick={() => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="
    mt-8
    bg-secondary
    transition-all duration-300
    text-white
    px-7 py-4
    rounded-md
    flex items-center gap-3
    font-medium
    shadow-lg
  "
>
  Book a Consultation

  <motion.span
    animate={{
      x: [0, 4, 0],
    }}
    transition={{
      duration: 1.4,
      repeat: Infinity,
    }}
    className="bg-white text-secondary rounded-full p-1"
  >
    <ArrowForwardOutlinedIcon className="!text-[18px]" />
  </motion.span>
</motion.button>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-end lg:pl-12"
          >

            <div className="relative">

              {/* GLOW */}
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.12, 0.22, 0.12],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-secondary/10 blur-[70px] rounded-full scale-110"
              />

              {/* IMAGE */}
              <motion.img
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                src={testimonialImg}
                alt="testimonial"
                className="
                  relative z-10
                  w-[280px] h-[350px]
                  md:w-[420px] md:h-[500px]
                  object-cover
                  rounded-t-[220px]
                  rounded-b-[30px]
                  shadow-[0_20px_60px_rgba(0,0,0,0.18)]
                "
              />

              {/* TESTIMONIAL SLIDER CARD */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  left-[-20px]
                  md:left-[-120px]
                  top-[40px]
                  md:top-[120px]
                  z-20
                  w-[280px]
                  md:w-[340px]
                "
              >

                <Swiper
                  modules={[Autoplay]}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  loop={true}
                  className="rounded-2xl"
                >

                  {testimonials.map((item, index) => (

                    <SwiperSlide key={index}>

                      <motion.div
                        whileHover={{
                          y: -4,
                        }}
                        className="
                          bg-white
                          p-6
                          rounded-2xl
                          shadow-[0_15px_45px_rgba(0,0,0,0.12)]
                          border border-gray-100
                          relative overflow-hidden
                        "
                      >

                        {/* FLOATING LIGHT */}
                        <motion.div
                          animate={{
                            x: ["-100%", "220%"],
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute top-0 left-0 w-[35%] h-full bg-white/20 skew-x-[-20deg]"
                        />

                        {/* TOP */}
                        <div className="flex justify-between items-center relative z-10">

                          <motion.div
                            animate={{
                              rotate: [0, 8, -8, 0],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                            }}
                            className="bg-secondary w-12 h-12 rounded-full flex items-center justify-center"
                          >
                            <FormatQuoteOutlinedIcon className="!text-white" />
                          </motion.div>

                          <div className="text-right">
                            <p className="text-secondary text-sm font-semibold">
                              ★★★★★
                            </p>

                            <p className="text-gray-400 text-xs mt-1">
                              4 days ago
                            </p>
                          </div>
                        </div>

                        {/* REVIEW */}
                        <p className="text-gray-600 leading-7 text-[15px] mt-5 relative z-10">
                          {item.review}
                        </p>

                        {/* CLIENT */}
                        <div className="flex items-center gap-4 mt-6 relative z-10">

                          <motion.img
                            animate={{
                              scale: [1, 1.05, 1],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                            }}
                            src={item.image}
                            alt="client"
                            className="w-14 h-14 rounded-full object-cover"
                          />

                          <div>
                            <h4 className="font-bold text-primary text-[18px]">
                              {item.name}
                            </h4>

                            <p className="text-gray-500 text-sm">
                              {item.role}
                            </p>
                          </div>
                        </div>

                      </motion.div>

                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}