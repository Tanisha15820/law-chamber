import { motion } from "framer-motion";

import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";

import heroBg from "../assets/hero-bg.jpg";
import advImg from "../assets/adv.png";

import Header from "../components/Header";


export default function HomePage() {
  return (
   <div>
     <section className="bg-light pb-28 md:pb-40 overflow-visible font-body">

      {/* HERO */}
      <div className="w-full pt-0">

        <div
          className="relative min-h-screen overflow-visible"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(0,0,0,0.92),
                rgba(0,0,0,0.65),
                rgba(0,0,0,0.15)
              ),
              url(${heroBg})
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/25"></div>

          {/* GOLDEN RIGHT SIDE */}
          <div
            className="absolute top-0 right-[-120px] h-full w-[42%] bg-secondary/80 hidden lg:block"
            style={{
              transform: "skewX(-12deg)",
            }}
          ></div>

          {/* HEADER */}
          <Header />

          {/* HERO CONTENT */}
          <div className="relative z-20 px-5 sm:px-6 md:px-14 pt-32 md:pt-36 pb-20 md:pb-36 min-h-screen flex items-center">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-[980px] relative z-30"
            >

              <span className="uppercase tracking-[3px] md:tracking-[4px] text-secondary text-xs md:text-sm font-semibold">
                Trusted Legal Advisors
              </span>

              <h1 className="font-heading text-light text-[38px] sm:text-[50px] md:text-[72px] leading-[1.1] mt-4 md:mt-5 font-bold max-w-[900px]">
                Protecting Your Rights With Experience & Integrity
              </h1>

              <p className="text-gray-300 mt-6 md:mt-7 text-[15px] sm:text-[16px] md:text-[18px] leading-7 md:leading-8 max-w-[720px]">
                At RKG Law Chambers, we provide reliable legal representation,
                strategic legal advice, and dedicated support across civil,
                criminal, corporate, and family law matters with a strong
                commitment to justice and client success.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-5 mt-8 md:mt-10 w-full sm:w-auto">

                <button className="bg-secondary hover:bg-[#c79d3e] duration-300 text-primary px-8 md:px-9 py-3 md:py-4 rounded-xl font-semibold shadow-gold text-sm md:text-base">
                  Schedule Consultation
                </button>

                <button className="border border-secondary text-secondary hover:bg-secondary hover:text-primary duration-300 px-8 md:px-9 py-3 md:py-4 rounded-xl font-semibold text-sm md:text-base">
                  Explore Services
                </button>
              </div>
            </motion.div>

            {/* RIGHT ADVOCATE IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="absolute bottom-[20px] right-[1%] hidden lg:block z-20"
            >

              <img
                src={advImg}
                alt="advocate"
                className="relative z-20 h-[680px] object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>

          {/* FLOATING STATS */}
          <div className="relative lg:absolute lg:bottom-0 lg:-right-[2%] lg:translate-y-1/2 z-30 w-full px-5 sm:px-6 flex justify-center lg:justify-end mt-6 lg:mt-0">

            <div className="max-w-[980px] w-full grid grid-cols-1 md:grid-cols-3 shadow-2xl rounded-2xl overflow-hidden">

              {/* CARD 1 */}
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-light px-6 md:px-8 py-6 md:py-7 flex items-center gap-5"
              >

                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                  <GavelOutlinedIcon className="!text-secondary !text-[30px] md:!text-[34px]" />
                </div>

                <div>
                  <h2 className="text-[34px] md:text-[44px] font-bold text-primary leading-none">
                    500+
                  </h2>

                  <p className="text-gray-500 text-sm mt-2">
                    Cases Successfully Resolved
                  </p>
                </div>
              </motion.div>

              {/* CARD 2 */}
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-primary px-6 md:px-8 py-6 md:py-7 flex items-center gap-5"
              >

                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                  <AccessTimeOutlinedIcon className="!text-secondary !text-[30px] md:!text-[34px]" />
                </div>

                <div>
                  <h2 className="text-[34px] md:text-[44px] font-bold text-light leading-none">
                    20+
                  </h2>

                  <p className="text-gray-300 text-sm mt-2">
                    Years Of Legal Excellence
                  </p>
                </div>
              </motion.div>

              {/* CARD 3 */}
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-light px-6 md:px-8 py-6 md:py-7 flex items-center gap-5"
              >

                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Groups2OutlinedIcon className="!text-secondary !text-[30px] md:!text-[34px]" />
                </div>

                <div>
                  <h2 className="text-[34px] md:text-[44px] font-bold text-primary leading-none">
                    10k+
                  </h2>

                  <p className="text-gray-500 text-sm mt-2">
                    Trusted Clients Served
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
   
   </div>
  );
}