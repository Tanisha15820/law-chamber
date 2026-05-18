// import { useState } from "react";

// import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
// import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

// import logo from "../assets/logo.png";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Smooth scroll function
//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);

//     if (section) {
//       section.scrollIntoView({
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <header className="absolute top-0 left-0 w-full z-50">

//       <div className="w-full px-5 sm:px-6 md:px-14 pt-2 md:pt-3">

//         <div className="flex items-center justify-between">

//           {/* LOGO IMAGE */}
//           <div className="flex items-center">
//             <img
//               src={logo}
//               alt="RKG Law Chambers"
//               className="h-[80px] md:h-[110px] w-auto object-contain"
//             />
//           </div>

//           {/* DESKTOP MENU */}
//           <ul className="hidden lg:flex items-center gap-6 text-light text-[14px] font-medium">

//             <li
//               onClick={() => scrollToSection("home")}
//               className="text-secondary cursor-pointer"
//             >
//               Home
//             </li>

//             <li
//               onClick={() => scrollToSection("about")}
//               className="hover:text-secondary duration-300 cursor-pointer"
//             >
//               About
//             </li>

//             <li
//               onClick={() => scrollToSection("practice")}
//               className="hover:text-secondary duration-300 cursor-pointer"
//             >
//               Practice Areas
//             </li>

//             <li
//               onClick={() => scrollToSection("services")}
//               className="hover:text-secondary duration-300 cursor-pointer"
//             >
//               Services
//             </li>

//             <li
//               onClick={() => scrollToSection("clients")}
//               className="hover:text-secondary duration-300 cursor-pointer"
//             >
//               Clients
//             </li>

//             <li
//               onClick={() => scrollToSection("contact")}
//               className="hover:text-secondary duration-300 cursor-pointer"
//             >
//               Contact
//             </li>

//           </ul>

//           {/* DESKTOP BUTTON */}
//           <button
//             onClick={() => scrollToSection("contact")}
//             className="
//               hidden md:block
//               bg-[#010101]
//               backdrop-blur-md
//               border border-secondary/50
//               text-secondary
//               hover:bg-light
//               hover:text-primary
//               duration-300
//               px-7 py-3
//               rounded-xl
//               font-semibold
//               shadow-2xl
//             "
//           >
//             Book Consultation
//           </button>

//           {/* MOBILE MENU BUTTON */}
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="lg:hidden text-secondary"
//           >
//             {menuOpen ? (
//               <CloseRoundedIcon className="!text-[34px]" />
//             ) : (
//               <MenuRoundedIcon className="!text-[34px]" />
//             )}
//           </button>

//         </div>

//         {/* MOBILE MENU */}
//         <div
//           className={`
//             lg:hidden
//             overflow-hidden
//             transition-all
//             duration-500
//             ${
//               menuOpen
//                 ? "max-h-[500px] opacity-100 mt-5"
//                 : "max-h-0 opacity-0"
//             }
//           `}
//         >

//           <div className="bg-[#0b0b0b]/95 backdrop-blur-xl border border-secondary/20 rounded-2xl p-6 shadow-2xl">

//             <ul className="flex flex-col gap-5 text-light text-[15px] font-medium">

//               <li
//                 onClick={() => {
//                   scrollToSection("home");
//                   setMenuOpen(false);
//                 }}
//               >
//                 Home
//               </li>

//               <li
//                 onClick={() => {
//                   scrollToSection("about");
//                   setMenuOpen(false);
//                 }}
//               >
//                 About
//               </li>

//               <li
//                 onClick={() => {
//                   scrollToSection("practice");
//                   setMenuOpen(false);
//                 }}
//               >
//                 Practice Areas
//               </li>

//               <li
//                 onClick={() => {
//                   scrollToSection("services");
//                   setMenuOpen(false);
//                 }}
//               >
//                 Services
//               </li>

//               <li
//                 onClick={() => {
//                   scrollToSection("clients");
//                   setMenuOpen(false);
//                 }}
//               >
//                 Clients
//               </li>

//               <li
//                 onClick={() => {
//                   scrollToSection("contact");
//                   setMenuOpen(false);
//                 }}
//               >
//                 Contact
//               </li>

//             </ul>

//             {/* MOBILE BUTTON */}
//             <button
//               onClick={() => {
//                 scrollToSection("contact");
//                 setMenuOpen(false);
//               }}
//               className="
//                 w-full
//                 mt-6
//                 bg-secondary
//                 text-primary
//                 hover:bg-light
//                 duration-300
//                 px-6 py-3
//                 rounded-xl
//                 font-semibold
//               "
//             >
//               Book Consultation
//             </button>

//           </div>
//         </div>

//       </div>
//     </header>
//   );
// }


import { useState } from "react";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import logo from "../assets/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    // <header className="absolute top-0 left-0 w-full z-50">

    //   <div className="w-full px-5 sm:px-6 md:px-12 pt-3">
    <header className="absolute top-[-35px] left-0 w-full z-50">

  <div className="w-full px-5 sm:px-6 md:px-12 pt-0">

        {/* MAIN HEADER */}
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center shrink-0">

           <img
  src={logo}
  alt="RKG Law Chambers"
  className="
    h-[130px]
    md:h-[165px]
    lg:h-[185px]
    w-auto
    object-contain
  "
/>

          </div>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-8">

            {/* DESKTOP MENU */}
            <ul className="flex items-center gap-7 text-light text-[15px] font-medium">

              <li
                onClick={() => scrollToSection("home")}
                className="text-secondary cursor-pointer"
              >
                Home
              </li>

              <li
                onClick={() => scrollToSection("about")}
                className="hover:text-secondary duration-300 cursor-pointer"
              >
                About
              </li>

              <li
                onClick={() => scrollToSection("practice")}
                className="hover:text-secondary duration-300 cursor-pointer"
              >
                Practice Areas
              </li>

              <li
                onClick={() => scrollToSection("services")}
                className="hover:text-secondary duration-300 cursor-pointer"
              >
                Services
              </li>

              <li
                onClick={() => scrollToSection("clients")}
                className="hover:text-secondary duration-300 cursor-pointer"
              >
                Clients
              </li>

              <li
                onClick={() => scrollToSection("contact")}
                className="hover:text-secondary duration-300 cursor-pointer"
              >
                Contact
              </li>

            </ul>

            {/* BUTTON */}
            <button
              onClick={() => scrollToSection("contact")}
              className="
                bg-[#050505]
                border border-secondary/40
                text-secondary
                hover:bg-secondary
                hover:text-primary
                duration-300
                px-6
                py-3
                rounded-xl
                font-semibold
                text-[15px]
                shadow-xl
              "
            >
              Book Consultation
            </button>

          </div>

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

        {/* MOBILE MENU */}
        <div
          className={`
            lg:hidden
            overflow-hidden
            transition-all
            duration-500
            ${
              menuOpen
                ? "max-h-[500px] opacity-100 mt-5"
                : "max-h-0 opacity-0"
            }
          `}
        >

          <div className="bg-[#0b0b0b]/95 backdrop-blur-xl border border-secondary/20 rounded-2xl p-6 shadow-2xl">

            <ul className="flex flex-col gap-5 text-light text-[15px] font-medium">

              <li
                onClick={() => {
                  scrollToSection("home");
                  setMenuOpen(false);
                }}
              >
                Home
              </li>

              <li
                onClick={() => {
                  scrollToSection("about");
                  setMenuOpen(false);
                }}
              >
                About
              </li>

              <li
                onClick={() => {
                  scrollToSection("practice");
                  setMenuOpen(false);
                }}
              >
                Practice Areas
              </li>

              <li
                onClick={() => {
                  scrollToSection("services");
                  setMenuOpen(false);
                }}
              >
                Services
              </li>

              <li
                onClick={() => {
                  scrollToSection("clients");
                  setMenuOpen(false);
                }}
              >
                Clients
              </li>

              <li
                onClick={() => {
                  scrollToSection("contact");
                  setMenuOpen(false);
                }}
              >
                Contact
              </li>

            </ul>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => {
                scrollToSection("contact");
                setMenuOpen(false);
              }}
              className="
                w-full
                mt-6
                bg-secondary
                text-primary
                hover:bg-light
                duration-300
                px-6
                py-3
                rounded-xl
                font-semibold
              "
            >
              Book Consultation
            </button>

          </div>

        </div>

      </div>

    </header>
  );
}