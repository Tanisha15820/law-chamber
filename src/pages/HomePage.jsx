

import { motion } from "framer-motion";

import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";

import PracticeAreas from "../components/PracticeAreas";
import heroBg from "../assets/hero-bg.jpg";
import advImg from "../assets/hero-image.png";

import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import AchievementSection from "../components/AchievementSection.jsx";
import Testimonials from "../components/Testimonials.jsx";
import ContactSection from "../components/ContactSection.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
import Footer from "../components/Footer.jsx";

export default function HomePage() {

  // Smooth scroll helper
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-light overflow-hidden font-body">

      {/* ================= HERO ================= */}
      <section id="home" className="relative min-h-screen">

        {/* BACKGROUND */}
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
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

        <div className="absolute inset-0 bg-black/30" />

        {/* ANIMATED GOLD LIGHT */}
        <motion.div
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[10%] right-[10%] w-[420px] h-[420px] bg-secondary/20 blur-[140px] rounded-full z-10"
        />

        {/* GOLD SHAPE */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute top-0 right-[-120px] h-full w-[42%] hidden lg:block"
        >
          <div
            className="h-full w-full bg-secondary/80"
            style={{ transform: "skewX(-12deg)" }}
          />
        </motion.div>

        {/* HEADER */}
        <Header />

        {/* HERO CONTENT */}
        {/* <div className="relative z-20 px-5 sm:px-6 md:px-14 pt-[170px] sm:pt-[190px] md:pt-[220px] lg:pt-[240px] pb-28 md:pb-40 min-h-screen flex items-start"> */}
        <div className="relative z-20 px-5 sm:px-6 md:px-14 pt-32 md:pt-36 pb-28 md:pb-40 min-h-screen flex items-center">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-[980px]"
          >

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="uppercase tracking-[4px] text-secondary text-xs md:text-sm font-body font-semibold inline-block"
            >
              Trusted Legal Advisors
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="font-heading text-light text-[40px] sm:text-[52px] md:text-[78px] leading-[1.05] mt-5 font-bold max-w-[880px]"
            >
              Protecting Your Rights With Experience & Integrity
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="font-body text-gray-300 mt-7 text-[15px] sm:text-[16px] md:text-[18px] leading-7 md:leading-8 max-w-[720px]"
            >
              At RKG Law Chambers, we provide reliable legal representation,
              strategic legal advice, and dedicated support across civil,
              criminal, corporate, and family law matters.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-5 mt-10"
            >

              {/* CONTACT BUTTON */}
              <motion.button
                whileHover={{
                  scale: 1.06,
                  boxShadow: "0px 0px 30px rgba(212,175,55,0.45)",
                }}
                whileTap={{ scale: 0.95 }}
                className="font-body bg-secondary hover:bg-[#c89d3d] duration-300 text-primary px-9 py-4 rounded-xl font-semibold"
                onClick={() => scrollToSection("contact")}
              >
                Schedule Consultation
              </motion.button>

              {/* SERVICES BUTTON */}
              <motion.button
                whileHover={{
                  scale: 1.06,
                  backgroundColor: "#d4af37",
                  color: "#111",
                }}
                whileTap={{ scale: 0.95 }}
                className="font-body border border-secondary text-secondary px-9 py-4 rounded-xl font-semibold duration-300"
                onClick={() => scrollToSection("services")}
              >
                Explore Services
              </motion.button>

            </motion.div>
          </motion.div>

          {/* HERO IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1 }}
            className="absolute bottom-[20px] right-[2%] hidden lg:block z-20"
          >

            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-16 right-10 w-[380px] h-[380px] bg-secondary/30 blur-[120px] rounded-full"
            />

            <motion.img
              animate={{
                y: [0, -18, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              src={advImg}
              alt="advocate"
              className="relative z-20 h-[700px] object-contain"
            />
          </motion.div>
        </div>

        {/* FLOATING STATS */}
       {/* FLOATING STATS */}
<div className="relative lg:absolute lg:bottom-0 lg:-right-[2%] lg:translate-y-1/2 z-30 w-full px-5 sm:px-6 flex justify-center lg:justify-end mt-6 lg:mt-0">

  <div className="max-w-[980px] w-full grid grid-cols-1 md:grid-cols-3 rounded-[26px] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.18)]">

    {/* CARD 1 */}
    <motion.div className="bg-light px-7 py-7 flex items-center gap-5 border-b md:border-b-0 md:border-r border-gray-200">
      <GavelOutlinedIcon className="!text-secondary !text-[34px]" />
      <div>
        <h2 className="font-heading text-[42px] font-bold text-primary">500+</h2>
        <p className="font-body text-gray-500 text-sm">Cases Resolved</p>
      </div>
    </motion.div>

    {/* CARD 2 */}
    <motion.div className="bg-primary px-7 py-7 flex items-center gap-5 border-b md:border-b-0 md:border-r border-white/10">
      <AccessTimeOutlinedIcon className="!text-secondary !text-[34px]" />
      <div>
        <h2 className="font-heading text-[42px] font-bold text-light">20+</h2>
        <p className="font-body text-gray-300 text-sm">Years Experience</p>
      </div>
    </motion.div>

    {/* CARD 3 */}
    <motion.div className="bg-light px-7 py-7 flex items-center gap-5">
      <Groups2OutlinedIcon className="!text-secondary !text-[34px]" />
      <div>
        <h2 className="font-heading text-[42px] font-bold text-primary">10k+</h2>
        <p className="font-body text-gray-500 text-sm">Clients Served</p>
      </div>
    </motion.div>

  </div>
</div>
      </section>

      {/* SECTIONS */}
      <section id="about"><AboutSection /></section>
      <section id="practice"><PracticeAreas /></section>
      <section id="achievements"><AchievementSection /></section>
      <section id="services"><ServicesSection /></section>
      <section id="clients"><Testimonials /></section>
      <section id="contact"><ContactSection /></section>

      <Footer />

    </div>
  );
}