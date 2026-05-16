// src/pages/HomePage.jsx

import { motion } from "framer-motion";

import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import PracticeAreas from "../components/PracticeAreas";
import heroBg from "../assets/hero-bg.jpg";
import advImg from "../assets/adv.png";

import Header from "../components/Header";
import AboutSection from "../components/AboutSection";

export default function HomePage() {
  return (
    <div className="bg-light overflow-visible font-body">

      {/* HERO SECTION */}
      <section className="relative min-h-screen">

        {/* HERO BACKGROUND */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(0,0,0,0.94),
                rgba(0,0,0,0.72),
                rgba(0,0,0,0.18)
              ),
              url(${heroBg})
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* EXTRA OVERLAY */}
        <div className="absolute inset-0 bg-black/30" />

        {/* GOLDEN SHAPE */}
        <div
          className="absolute top-0 right-[-120px] h-full w-[42%] bg-secondary/80 hidden lg:block"
          style={{
            transform: "skewX(-12deg)",
          }}
        />

        {/* HEADER */}
        <Header />

        {/* HERO CONTENT */}
        <div className="relative z-20 px-5 sm:px-6 md:px-14 pt-32 md:pt-36 pb-28 md:pb-40 min-h-screen flex items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[980px]"
          >

            <span className="uppercase tracking-[4px] text-secondary text-xs md:text-sm font-semibold">
              Trusted Legal Advisors
            </span>

            <h1 className="font-heading text-light text-[40px] sm:text-[52px] md:text-[78px] leading-[1.05] mt-5 font-bold max-w-[880px]">
              Protecting Your Rights With Experience & Integrity
            </h1>

            <p className="text-gray-300 mt-7 text-[15px] sm:text-[16px] md:text-[18px] leading-7 md:leading-8 max-w-[720px]">
              At RKG Law Chambers, we provide reliable legal representation,
              strategic legal advice, and dedicated support across civil,
              criminal, corporate, and family law matters with a strong
              commitment to justice and client success.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-5 mt-10">

              <button className="bg-secondary hover:bg-[#c89d3d] hover:scale-[1.03] duration-300 text-primary px-9 py-4 rounded-xl font-semibold shadow-[0_10px_30px_rgba(212,175,55,0.35)]">
                Schedule Consultation
              </button>

              <button className="border border-secondary text-secondary hover:bg-secondary hover:text-primary duration-300 px-9 py-4 rounded-xl font-semibold">
                Explore Services
              </button>
            </div>
          </motion.div>

          {/* ADVOCATE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="absolute bottom-[20px] right-[2%] hidden lg:block z-20"
          >

            {/* GOLD GLOW */}
            <div className="absolute bottom-16 right-10 w-[380px] h-[380px] bg-secondary/30 blur-[120px] rounded-full"></div>

            <img
              src={advImg}
              alt="advocate"
              className="relative z-20 h-[700px] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.65)]"
            />
          </motion.div>
        </div>

        {/* FLOATING STATS */}
       {/* FLOATING STATS */}
<div className="relative lg:absolute lg:bottom-0 lg:-right-[2%] lg:translate-y-1/2 z-30 w-full px-5 sm:px-6 flex justify-center lg:justify-end mt-6 lg:mt-0">

  <div className="max-w-[980px] w-full grid grid-cols-1 md:grid-cols-3 rounded-[26px] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.18)]">

    {/* CARD 1 */}
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-light px-7 md:px-8 py-7 flex items-center gap-5"
    >

      <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
        <GavelOutlinedIcon className="!text-secondary !text-[34px]" />
      </div>

      <div>
        <h2 className="text-[42px] font-bold text-primary leading-none">
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
      className="bg-primary px-7 md:px-8 py-7 flex items-center gap-5"
    >

      <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
        <AccessTimeOutlinedIcon className="!text-secondary !text-[34px]" />
      </div>

      <div>
        <h2 className="text-[42px] font-bold text-light leading-none">
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
      className="bg-light px-7 md:px-8 py-7 flex items-center gap-5"
    >

      <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
        <Groups2OutlinedIcon className="!text-secondary !text-[34px]" />
      </div>

      <div>
        <h2 className="text-[42px] font-bold text-primary leading-none">
          10k+
        </h2>

        <p className="text-gray-500 text-sm mt-2">
          Trusted Clients Served
        </p>
      </div>
    </motion.div>

  </div>
</div>
      </section>

      {/* ABOUT SECTION */}
      <AboutSection />
      <PracticeAreas/>
    </div>
  );
}