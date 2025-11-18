import React, { useEffect, useState } from "react";
import { assets } from "../assets/data";
import Navbar from "./Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUser, useClerk, UserButton } from "@clerk/clerk-react";
function Header() {
  const [menuOpened, setmenuOpened] = useState(false);
  const [active, setactive] = useState(false);
  const [showSearch, setshowSearch] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();
  // const BookingIcon = () => (
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     width="24"
  //     height="24"
  //     viewBox="0 0 36 36"
  //     fill="none"
  //     stroke="currentColor"
  //     stroke-width="2"
  //     stroke-linecap="round"
  //     stoke-linejoin="round"
  //     class="lucide lucide-scroll-text-icon lucide-scroll-text"
  //   >
  //     <path d="M15 12h-5" />
  //     <path d="M15 8h-5" />
  //     <path d="M19 17V5a2 2 0 0-2-2H4" />
  //     <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 " />
  //   </svg>
  // );
  const BookingIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-scroll-text-icon lucide-scroll-text"
    >
      <path d="M15 12h-5" />
      <path d="M15 8h-5" />
      <path d="M19 17V5a2 2 0 0-2-2H4" />
      <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 " />
    </svg>
  );

  const isHomePage = location.pathname.endsWith("/");
  const toggleMenu = () => setmenuOpened((prev) => !prev);
  // location.pathname = "/"
  // isHomePage = true ✅

  // // URL: https://midominio.com
  // location.pathname = "/"
  // isHomePage = true ✅
  //ishome es false al invertir false no se aplica el blanco pero si es false al invertir true y por ende
  //se aplica el true
  useEffect(() => {
    const handelScroll = () => {
      const currentScroolly = window.scrollY;
      if (currentScroolly > lastScrollY && currentScroolly > 50) {
        setactive(true);
      } else if (lastScrollY > currentScroolly) {
        setactive(false);
      }
      setLastScrollY(currentScroolly);
    };
    window.addEventListener("scroll", handelScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, [lastScrollY]);
  return (
    <header
      className={`${active ? "bg-white shadow-sm py-2" : "py-3"} ${
        !isHomePage && "bg-white"
      } 
    fixed top-0 w-full left-0 right-0 z-50 transition-all duration-200`}
    >
      <div className="max-padd-container ">
        {/* container */}
        <div className="flexBetween">
          {/* logo */}
          <div className="flex flex-1">
            <Link to={"/"}>
              <img
                src={assets.logoImg}
                alt="logoImg"
                width={88}
                className="h-7"
              />
              <span className="text-textColor uppercase text-xs font-extrabold tracking-[6px] realtive bottom-1">
                Rentro
              </span>
            </Link>
          </div>
          {/* navbar */}
          <Navbar
            setmenuOpened={setmenuOpened}
            containerStyles={
              menuOpened
                ? //aca en col verdadero
                  "flex items-start flex-col gap-y-8 fixed top-16 right-6 p-5 bg-white shadow-md ring-1 ring-slate-900/5 rounded-xl z-50 "
                : //si es falso en linea
                  "hidden lg:flex gap-x-5 xl:gap-x-1 text-sm font-semibold p-1"
            }
          />
          <div className="flex sm:flex-1 items-center sm:justify-end gap-x-4 sm:gap-x-8">
            {/* searh */}
            <div className="relative hidden xl:flex items-center">
              <div
                className={`transition-all duration-300 ease-in-out ring-1 ring-slate-900/10
                   bg-white rounded-full overflow-hidden ${
                     showSearch
                       ? "w-[266px] opacity-100 px-4 py-2"
                       : " w-11 opacity-0 px-0 py-0"
                   }`}
              >
                <input
                  type="text"
                  placeholder="Type here"
                  className="w-full text-sm outline-none pr-10 placeholder:text-gray-400"
                />
              </div>
              <div
                onClick={() => setshowSearch((prev) => !prev)}
                className="absolute right-0 ring-1 ring-slate-900/10 bg-white p-[8px] rounded-full cursor-pointer z-10"
              >
                <img src={assets.search} alt="" />
              </div>
            </div>
            {menuOpened ? (
              <img
                onClick={toggleMenu}
                src={assets.close}
                alt=""
                className={`lg:hidden cursor-pointer text-xl`}
              />
            ) : (
              <img
                onClick={toggleMenu}
                src={assets.menu}
                alt=""
                className={`lg:hidden cursor-pointer text-xl`}
              />
            )}

            <div className="group">
              {/* {user ? (
                <UserButton
                  appearance={{
                    elements: {
                      width: "42px",
                      height: "42px",
                    },
                  }}
                >
                  <UserButton.MenuItems>
                    <UserButton.Action
                      label="My Booking"
                      onClick={() => navigate("/my-booking")}
                    />
                  </UserButton.MenuItems>
                </UserButton>
              ) : (
                <button
                  onClick={openSignIn}
                  className="btn-solid bg-black flexCenter gap-2 rounded-full text-white"
                >
                  Login
                  <img src={assets.user} alt="iconuser" className="invert" />
                </button>
              )} */}
              {user ? (
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => navigate("/my-booking")}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                  >
                    My Booking
                  </button>

                  <UserButton
                    appearance={{
                      elements: {
                        width: "42px",
                        height: "42px",
                      },
                    }}
                  />
                </div>
              ) : (
                <button
                  onClick={openSignIn}
                  className="btn-solid bg-black flexCenter gap-2 rounded-full text-white"
                >
                  Login
                  <img src={assets.user} alt="iconuser" className="invert" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
