

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

import contactImg from "../assets/about-mini.jpeg";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    const formData = new FormData(event.target);

    // WEB3FORMS ACCESS KEY
    formData.append(
      "access_key",
      "e64ee34d-5f0e-409f-9298-e136b5634420"
    );

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();

    setLoading(false);

    if (result.success) {
      setSubmitted(true);
      event.target.reset();
    }
  };

  return (
    <section className="relative bg-[#f7f7f7] py-24 overflow-hidden">

      {/* FLOATING GLOW */}
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
        className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] rounded-full bg-[#c79a47] blur-[120px]"
      />

      {/* FLOATING ICON */}
      <motion.div
        animate={{
          y: [0, -18, 0],
          rotate: [-15, -6, -15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[8%] right-[5%] opacity-[0.05] hidden lg:block"
      >
        <GavelOutlinedIcon className="!text-[220px] text-[#c79a47]" />
      </motion.div>

      <div className="max-w-[1350px] mx-auto px-6 lg:px-10">

        {/* TOP AREA */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center max-w-[850px] mx-auto"
        >

          {/* SMALL TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center gap-2 mb-4"
          >

            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              <GavelOutlinedIcon className="!text-[15px] text-[#c79a47]" />
            </motion.div>

            <p className="uppercase tracking-[2px] text-[#c79a47] text-[12px] font-semibold">
              Contact Us
            </p>
          </motion.div>

          {/* HEADING */}
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
              text-[#111]
              font-bold
              leading-[1.05]
              text-[34px] sm:text-[42px] md:text-[60px]
              font-heading
            "
          >
            Get in Touch With Our
            <br />
            Legal Experts Today
          </motion.h2>

          {/* PARAGRAPH */}
          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#555] text-[17px] leading-9 max-w-[700px] mx-auto mt-8"
          >
            Contact our legal experts today for clear guidance,
            strong support, and solutions designed for your
            unique situation.
          </motion.p>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="grid lg:grid-cols-2 gap-20 items-start mt-20">

          {/* LEFT CONTACT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            whileHover={{
              y: -6,
            }}
            className="
              bg-white
              shadow-[0_10px_30px_rgba(0,0,0,0.08)]
              hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]
              transition-all
              duration-500
              overflow-hidden
              max-w-[650px]
              w-full
              relative
            "
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
              }}
              className="absolute top-[-80px] right-[-60px] w-[180px] h-[180px] rounded-full bg-[#c79a47] blur-[70px]"
            />

            {/* IMAGE */}
            <div className="h-[360px] overflow-hidden">

              <motion.img
                whileHover={{
                  scale: 1.06,
                }}
                transition={{
                  duration: 0.7,
                }}
                src={contactImg}
                alt="contact"
                className="
                  w-full
                  h-full
                  object-cover
                "
              />
            </div>

            {/* CONTACT INFO */}
            <div className="px-10 py-8 relative z-10">

              {/* TOP ROW */}
              <div className="grid sm:grid-cols-2 gap-8 pb-8 border-b border-gray-200">

                {/* PHONE */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >

                  <motion.div
                    animate={{
                      y: [0, -4, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <CallOutlinedIcon className="text-[#c79a47] !text-[38px]" />
                  </motion.div>

                  <div>
                    <h4 className="text-[#111] text-[15px] font-semibold leading-8">
                      +91 98765 43210
                    </h4>

                    <h4 className="text-[#111] text-[15px] font-semibold leading-8">
                      +91 87654 32109
                    </h4>
                  </div>
                </motion.div>

                {/* EMAIL */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >

                  <motion.div
                    animate={{
                      y: [0, -4, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                    }}
                  >
                    <EmailOutlinedIcon className="text-[#c79a47] !text-[38px]" />
                  </motion.div>

                  <div>
                    <h4 className="text-[#111] text-[15px] font-semibold leading-8 break-all">
                      rkglawchamber@gmail.com
                    </h4>

                    <h4 className="text-[#111] text-[15px] font-semibold leading-8 break-all">
                      contact@rkglaw.com
                    </h4>
                  </div>
                </motion.div>
              </div>

              {/* ADDRESS */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 pt-8"
              >

                <motion.div
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                >
                  <NearMeOutlinedIcon className="text-[#c79a47] !text-[38px]" />
                </motion.div>

                <div>
                  <h4 className="text-[#111] text-[16px] font-semibold leading-8">
                    RKG Law Chamber, Connaught Place,
                    New Delhi, India
                  </h4>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative max-w-[650px] w-full"
          >

            {/* GOLD SHAPE */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 6, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-[-40px] right-[-40px] w-[160px] h-[160px] bg-[#c79a47] z-0"
            />

            {/* DARK SHAPE */}
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[-40px] right-[-40px] w-[120px] h-[120px] bg-black z-0"
            />

            {/* FORM BOX */}
            <motion.div
              whileHover={{
                y: -4,
              }}
              className="
                relative
                z-10
                bg-[#fbfbfb]
                px-10
                py-12
                shadow-[0_10px_30px_rgba(0,0,0,0.05)]
                hover:shadow-[0_25px_60px_rgba(0,0,0,0.10)]
                transition-all
                duration-500
                overflow-hidden
                min-h-[620px]
                flex
                items-center
                justify-center
              "
            >

              {/* LIGHT EFFECT */}
              <motion.div
                animate={{
                  x: ["-100%", "220%"],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-0 left-0 w-[30%] h-full bg-white/30 skew-x-[-20deg]"
              />

              <AnimatePresence mode="wait">

                {!submitted ? (

                  <motion.form
                    key="form"
                    onSubmit={onSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-8 relative z-10 w-full"
                  >

                    {[
                      "Name",
                      "Email Address",
                      "Phone No",
                      "Subject",
                    ].map((field, index) => (
                      <motion.input
                        key={field}
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        type="text"
                        name={field.toLowerCase().replace(/\s/g, "_")}
                        placeholder={field}
                        required
                        className="
                          w-full
                          bg-transparent
                          border-b
                          border-gray-300
                          pb-4
                          outline-none
                          text-[15px]
                          placeholder:text-gray-400
                          focus:border-[#c79a47]
                          transition-all
                        "
                      />
                    ))}

                    <motion.textarea
                      initial={{ opacity: 0, y: 35 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}
                      rows="4"
                      name="message"
                      placeholder="Message"
                      required
                      className="
                        w-full
                        bg-transparent
                        border-b
                        border-gray-300
                        pb-4
                        outline-none
                        resize-none
                        text-[15px]
                        placeholder:text-gray-400
                        focus:border-[#c79a47]
                        transition-all
                      "
                    ></motion.textarea>

                    {/* BUTTON */}
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "#111",
                      }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      disabled={loading}
                      className="
                        bg-[#c79a47]
                        text-white
                        px-10
                        py-4
                        text-[15px]
                        font-medium
                        transition-all
                        duration-300
                      "
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </motion.button>

                  </motion.form>

                ) : (

                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10 text-center"
                  >

                    <motion.div
                      animate={{
                        scale: [1, 1.08, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="flex justify-center"
                    >
                      <CheckCircleOutlinedIcon className="!text-[90px] text-[#c79a47]" />
                    </motion.div>

                    <h3 className="text-[34px] font-heading font-bold text-[#111] mt-6">
                      Thank You!
                    </h3>

                    <p className="text-[#555] text-[17px] leading-8 mt-4 max-w-[420px] mx-auto">
                      Thank you for contacting us. We will reach
                      out to you shortly regarding your query.
                    </p>

                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}