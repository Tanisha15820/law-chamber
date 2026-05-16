import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">

      <div className="w-full px-6 md:px-14 pt-7">

        <div className="flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center shadow-gold">
              <GavelOutlinedIcon className="text-primary !text-[22px]" />
            </div>

            <div className="leading-none">
              <h1 className="font-heading text-secondary text-[32px] md:text-[36px] font-bold tracking-wide">
                RKG
              </h1>

              <p className="text-light text-[10px] md:text-[11px] uppercase tracking-[4px] mt-1">
                Law Chambers
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-8">

            {/* MENU */}
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

            {/* BUTTON */}
            <button className="hidden md:block bg-[#010101] backdrop-blur-md border border-secondary/50 text-secondary hover:bg-light hover:text-primary duration-300 px-7 py-3 rounded-xl font-semibold shadow-2xl">
              Book Consultation
            </button>

          </div>
        </div>
      </div>
    </header>
  );
}