// src/components/Testimonials.jsx

import { motion } from "framer-motion";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import testimonialImg from "../assets/testimonial.png";
import clientImg from "../assets/about-top.jpeg";


export default function Testimonials() {
  return (
    <section className="relative py-16 md:py-24 bg-[#faf8f4] overflow-hidden">

      {/* BG SHAPES */}
      <div className="absolute top-10 right-10 opacity-[0.05] rotate-[25deg] hidden md:block">
        <GavelOutlinedIcon className="!text-[180px] text-secondary" />
      </div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-14">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <p className="text-secondary uppercase tracking-[3px] text-xs sm:text-sm font-semibold">
              Testimonials
            </p>

            <h2 className="font-heading text-primary text-[36px] sm:text-[48px] md:text-[62px] leading-tight font-bold mt-3">
              Hear What Our Clients Say About Us
            </h2>

            <p className="text-gray-500 text-[15px] md:text-[16px] leading-8 mt-5 max-w-[520px]">
              Our clients trust us for reliable legal guidance,
              transparent communication, and successful legal outcomes.
              We are committed to delivering professional support with
              integrity and dedication.
            </p>

            {/* BUTTON */}
            <button
              className="
                mt-8
                bg-secondary
                hover:bg-primary
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

              <span className="bg-white text-secondary rounded-full p-1">
                <ArrowForwardOutlinedIcon className="!text-[18px]" />
              </span>
            </button>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >

            {/* MAIN IMAGE */}
            <div className="relative">

              <div className="absolute inset-0 bg-secondary/10 blur-[70px] rounded-full scale-110"></div>

              <img
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

              {/* TESTIMONIAL CARD */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="
                  absolute
                  left-[-20px]
                  md:left-[-120px]
                  top-[40px]
                  md:top-[120px]
                  z-20
                  bg-white
                  w-[280px]
                  md:w-[340px]
                  p-6
                  rounded-2xl
                  shadow-[0_15px_45px_rgba(0,0,0,0.12)]
                  border border-gray-100
                "
              >

                {/* TOP */}
                <div className="flex justify-between items-center">

                  <div className="bg-secondary w-12 h-12 rounded-full flex items-center justify-center">
                    <FormatQuoteOutlinedIcon className="!text-white" />
                  </div>

                  <div className="text-right">
                    <p className="text-secondary text-sm font-semibold">
                      ★★★★★
                    </p>

                    <p className="text-gray-400 text-xs mt-1">
                      4 days ago
                    </p>
                  </div>
                </div>

                {/* TEXT */}
                <p className="text-gray-600 leading-7 text-[15px] mt-5">
                  They guided me through a difficult legal matter
                  with professionalism and consistent support.
                  Highly recommended for legal assistance.
                </p>

                {/* CLIENT */}
                <div className="flex items-center gap-4 mt-6">

                  <img
                    src={clientImg}
                    alt="client"
                    className="w-14 h-14 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="font-bold text-primary text-[18px]">
                      David Anderson
                    </h4>

                    <p className="text-gray-500 text-sm">
                      Founder of ABC Co.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* NAV BUTTONS */}
              <div className="absolute left-[-10px] md:left-[-70px] bottom-[70px] flex flex-col gap-3">

                <button className="w-11 h-11 bg-white shadow-md rounded-md flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300">
                  <ArrowBackOutlinedIcon />
                </button>

                <button className="w-11 h-11 bg-secondary text-white shadow-md rounded-md flex items-center justify-center hover:bg-primary transition-all duration-300">
                  <ArrowForwardOutlinedIcon />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}