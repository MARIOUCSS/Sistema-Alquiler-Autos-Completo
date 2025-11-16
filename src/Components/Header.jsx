import React, { useEffect, useState } from "react";
import { assets } from "../assets/data";
import Navbar from "./Navbar";
import { Link, useLocation } from "react-router-dom";
function Header() {
  const [menuOpened, setmenuOpened] = useState(false);
  const [active, setactive] = useState(false);
  const [showSearch, setshowSearch] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
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
            <div>
              <div>
                <button className="btn-solid bg-black flexCenter gap-2 rounded-full text-white">
                  Login
                  <img src={assets.user} alt="iconuser" className="invert" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
