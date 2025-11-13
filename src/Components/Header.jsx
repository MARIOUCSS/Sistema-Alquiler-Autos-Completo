import React, { useState } from "react";
import { assets } from "../assets/data";
import Navbar from "./Navbar";
import { Link, useLocation } from "react-router-dom";
function Header() {
  const [menuOpened, setmenuOpened] = useState(false);
  const [active, setactive] = useState(false);
  const [showSearch, setshowSearch] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname.endsWith("/");

  // location.pathname = "/"
  // isHomePage = true ✅

  // // URL: https://midominio.com
  // location.pathname = "/"
  // isHomePage = true ✅
  //ishome es false al invertir false no se aplica el blanco pero si es false al invertir true y por ende
  //se aplica el true
  return (
    <header
      className={`${active ? "bg-white shadow-sm py-2" : "py-3"} ${
        !isHomePage && "bg-white"
      } 
    fixed top-0 w-full left-0 right-0 z-50 transition-all duration-200`}
    >
      <div>
        {/* container */}
        <div>
          {/* logo */}
          <div>
            <Link to={"/"}>
              <img
                src={assets.logoImg}
                alt="logoImg"
                width={88}
                className="h-7"
              />
              <span>Rentro</span>
            </Link>
          </div>
          {/* navbar */}
          <Navbar />
          <div>
            {/* searh */}
            <div>
              <div>
                <input type="text" placeholder="Type here" />
              </div>
              <div>
                <img src={assets.search} alt="" />
              </div>
            </div>
            {menuOpened ? (
              <img
                src={assets.close}
                alt=""
                className={`lg:hidden cursor-pointer text-xl`}
              />
            ) : (
              <img
                src={assets.menu}
                alt=""
                className={`lg:hidden cursor-pointer text-xl`}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
