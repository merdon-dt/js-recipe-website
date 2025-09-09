import React, { useEffect, useState } from "react";
import "./Home.css";
import { image } from "../assets/assests";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-scroll";
import Signup from "../Signuppage/Signup";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const nav = {
    navleft: image.Firsthead,
    place: "Kerala",
    navright: [
      {
        nav1: "How Works",
        nav2: "Meals",
        nav3: "Gallery",
        nav4: "Pricing",
        signbutton: "Sign Up",
      },
    ],
    centerhead1: "FOODTODAY",
    centerhead2: "Discover the best Meals & drinks",
  };


 useEffect(() => {
  const handclick = (e) => {
    if(!e.target.closest('.outclick') && open2) {
      setOpen2(false);
    }
  };

  document.addEventListener('mousedown', handclick);

  return () => {
    document.removeEventListener('mousedown', handclick);
    }
  
 },[open2]);

  return (
    <div>
      <div id="home" className="homebg_image">
        <div className="flex justify-between items-center text-white right_nav md:px-15 px-6 py-4">
          <div className="flex items-start justify-start gap-1">
            <div className="flex items-center cursor-pointer justify-center gap-1">
              <img
                src={nav.navleft}
                className="md:w-28 md:h-3 w-20 h-2 "
                alt=""
              />{" "}
              <div className="" style={{ fontSize: "10px" }}>
                <i class="bi bi-geo-alt"></i>
              </div>
              <p className=" " style={{ fontSize: "8px" }}>
                {nav.place}
              </p>
            </div>
          </div>
          <div>
            {nav.navright.map((rightnav) => (
              <div
                className={`flex outclick right gap-6  cursor-pointer text-sm font-semibold items-center justify-between ${
                  open2 ? "show" : ""
                } md:flex`}
                onClick={() => setOpen2(false)}
              >
              
                 
                  <img src={image.navlogo} className= "logo_hide w-20 h-3 mr-auto ms-4 mt-2" alt="" />
                  <span
                    className="close-btn text-black px-4 text-2xl"
                    style={{ alignSelf: "flex-end", marginTop:"-45px" }}
                    onClick={() => setOpen2(false)}
                  >
                    <i class="bi bi-x"></i>
                  </span>
              
                <Link to="home" smooth={true} duration={500} onClick={() => setOpen2(false)}
                 className="hover:border-b-2 hover:border-white transition-all duration-200 ">
                  {rightnav.nav1}
                </Link>
                <Link to="meals" smooth={true} duration={500} onClick={() => setOpen2(false)}
                className="hover:border-b-2 hover:border-white transition-all duration-200 n"
                 spy={true}
  activeClass="active">
                  {rightnav.nav2}
                </Link>
                <Link to="gallery" smooth={true} duration={500} onClick={() => setOpen2(false)}
                 className="hover:border-b-2 hover:border-white transition-all duration-200" spy={true}
  activeClass="active">
                  {rightnav.nav3}
                </Link>
                <Link to="pricing" smooth={true} duration={500} onClick={() => setOpen2(false)}
                 className="hover:border-b-2 hover:border-white transition-all duration-200">
                  {rightnav.nav4}
                </Link>
                <button
                  className="w-18 h-8 cursor-pointer rounded-sm bg-[#e67e22] flex items-center justify-center"
                  onClick={() => setOpen(true)}
                >
                  {rightnav.signbutton}
                </button>
              </div>
            ))}
          </div>
          <div
            id="hamburger"
            className="cursor-pointer md:hidden"
            onClick={() => setOpen2(!open2)}
          >
            &#9776;
          </div>
        </div>
      </div>

      <div className="center_head flex flex-col md:gap-5 gap-3 items-center justify-center text-white  text-Oswald font-roboto">
        <p className="md:text-5xl text-3xl" style={{ fontFamily: "font-name" }}>
          F<span style={{ color: "#e67e22" }}>OO</span>DTODAY
        </p>
        <p className="centerhead_sec">{nav.centerhead2}</p>
        <div className="relative   px-4">
          <input
            type="text"
            className="input_home bg-white text-black rounded-lg border border-gray-300  pl-12 text-sm"
            placeholder="Search Foods Drinks here"
            style={{ padding: "10px 35px" }}
          />

          <FaSearch
            className="absolute ms-3 left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none text-base"
            style={{ fontSize: "12px" }}
          />
        </div>
      </div>
      {/* <div className="search_home flex justify-center ">
            <div className="relative w-full max-w-2xl px-4">
              
            </div>
          </div> */}

      <Signup isopen={open} close={() => setOpen(false)} />
    </div>
  );
};

export default Home;

// npm install react-scroll
