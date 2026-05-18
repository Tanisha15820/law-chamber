import { useState } from "react";

import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50">

      <div className="w-full px-5 sm:px-6 md:px-14 pt-5 md:pt-7">

        <div className="flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-3">

            <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-secondary flex items-center justify-center shadow-gold">
              <GavelOutlinedIcon className="text-primary !text-[20px] md:!text-[22px]" />
            </div>

            <div className="leading-none">
              <h1 className="font-heading text-secondary text-[28px] md:text-[36px] font-bold tracking-wide">
                RKG
              </h1>

              <p className="text-light text-[9px] md:text-[11px] uppercase tracking-[3px] md:tracking-[4px] mt-1">
                Law Chambers
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-8">

            {/* DESKTOP MENU */}
            <ul className="hidden lg:flex items-center gap-6 text-light text-[14px] font-medium">

              <li className="text-secondary cursor-pointer">
                Home
              </li>

              <li className="hover:text-secondary duration-300 cursor-pointer">
                About
              </li>

              <li className="hover:text-secondary duration-300 cursor-pointer">
                Practice Areas
              </li>

              <li className="hover:text-secondary duration-300 cursor-pointer">
                Services
              </li>

              <li className="hover:text-secondary duration-300 cursor-pointer">
                Cases
              </li>

              <li className="hover:text-secondary duration-300 cursor-pointer">
                Contact
              </li>
            </ul>

            {/* DESKTOP BUTTON */}
            <button className="hidden md:block bg-[#010101] backdrop-blur-md border border-secondary/50 text-secondary hover:bg-light hover:text-primary duration-300 px-7 py-3 rounded-xl font-semibold shadow-2xl">
              Book Consultation
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-secondary"
            >
              {menuOpen ? (
                <CloseRoundedIcon className="!text-[34px]" />
              ) : (
                <MenuRoundedIcon className="!text-[34px]" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            lg:hidden overflow-hidden transition-all duration-500
            ${menuOpen ? "max-h-[500px] opacity-100 mt-5" : "max-h-0 opacity-0"}
          `}
        >

          <div className="bg-[#0b0b0b]/95 backdrop-blur-xl border border-secondary/20 rounded-2xl p-6 shadow-2xl">

            <ul className="flex flex-col gap-5 text-light text-[15px] font-medium">

              <li className="text-secondary cursor-pointer">
                Home
              </li>

              <li className="hover:text-secondary duration-300 cursor-pointer">
                About
              </li>

              <li className="hover:text-secondary duration-300 cursor-pointer">
                Practice Areas
              </li>

              <li className="hover:text-secondary duration-300 cursor-pointer">
                Services
              </li>

              <li className="hover:text-secondary duration-300 cursor-pointer">
                Cases
              </li>

              <li className="hover:text-secondary duration-300 cursor-pointer">
                Contact
              </li>
            </ul>

            {/* MOBILE BUTTON */}
            <button className="w-full mt-6 bg-secondary text-primary hover:bg-light duration-300 px-6 py-3 rounded-xl font-semibold">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}