import { motion } from "framer-motion";

import aboutMain from "../assets/about-main.jpg";
import aboutSmall from "../assets/about-medium.jpg";

export default function AboutSection() {
  return (
    <section className="bg-light py-16 md:py-20 overflow-hidden">

      <div className="max-w-[1450px] mx-auto px-5 sm:px-6 md:px-14">

        <div className="grid lg:grid-cols-[470px_1fr] gap-32 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-start"
          >

            <div className="relative w-full max-w-[470px]">

              {/* MAIN IMAGE */}
              <div className="overflow-hidden rounded-[20px] shadow-xl">

                <img
                  src={aboutMain}
                  alt="lawyer"
                  className="w-full h-[420px] md:h-[500px] object-cover"
                />
              </div>

              {/* FLOATING CARD */}
              <div className="absolute bottom-[-18px] right-[-18px] bg-light rounded-[22px] p-2 shadow-2xl w-[190px] md:w-[210px]">

                <img
                  src={aboutSmall}
                  alt="law team"
                  className="w-full h-[220px] object-cover rounded-[18px]"
                />

                {/* CLIENTS */}
                <div className="flex items-center gap-2 mt-3 px-1">

                  <div className="flex -space-x-2">

                    <img
                      src="https://i.pravatar.cc/40?img=12"
                      alt=""
                      className="w-7 h-7 rounded-full border-2 border-white"
                    />

                    <img
                      src="https://i.pravatar.cc/40?img=15"
                      alt=""
                      className="w-7 h-7 rounded-full border-2 border-white"
                    />

                    <img
                      src="https://i.pravatar.cc/40?img=18"
                      alt=""
                      className="w-7 h-7 rounded-full border-2 border-white"
                    />
                  </div>

                  <p className="text-[10px] text-gray-500 leading-4">
                    Trusted by our customers
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative lg:-ml-10"
          >

            {/* SMALL TITLE */}
            <p className="text-primary text-[14px] font-medium">
              About Our Firm
            </p>

            {/* HEADING */}
            <h1 className="font-heading text-primary text-[42px] md:text-[76px] leading-[1.02] mt-4 font-bold max-w-[900px]">
            Committed to Justice{" "}
  <span className="text-secondary">
    Focused on Results.
  </span>
</h1>

            {/* DESCRIPTION */}
            <p className="text-gray-500 text-[16px] leading-8 mt-6 max-w-[820px]">
              We provide clear legal guidance backed by experience,
              integrity, and a results-driven approach. Our team
              works closely with every client to understand their
              case and deliver practical legal solutions tailored
              to their needs while protecting their rights with
              professionalism and dedication.
            </p>

            {/* POINTS */}
            <div className="mt-8 space-y-5">

              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-3"></div>

                <p className="text-gray-700 text-[15px]">
                  Experienced attorneys with a client-first mindset
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-3"></div>

                <p className="text-gray-700 text-[15px]">
                  Clear communication and honest legal advice
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-3"></div>

                <p className="text-gray-700 text-[15px]">
                  Strategic approach tailored to every case
                </p>
              </div>
            </div>

            {/* BUTTON */}
            <button className="mt-10 bg-secondary hover:bg-primary hover:text-light duration-300 text-primary px-8 py-3 rounded-lg font-semibold">
              Read Our Story
            </button>

          </motion.div>
        </div>
      </div>
    </section>
  );
}