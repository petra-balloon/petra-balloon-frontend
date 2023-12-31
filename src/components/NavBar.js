import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar.css";
import MainPopUpModal from "./PopUpModal/PoPUpModal";

const NavBar = () => {
  const [active, setActive] = useState(false);

  const [searchShow, setSearchShow] = useState(false);
  //const [secondmodal, setSecondModal] = useState(false);
  const [secondmodal, setSecondModal] = useState("first");
  const [selectedpass, setSelectedPass] = useState("");

  const [openModal, setOpenModal] = useState(false);
  /* sticky navbar */
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsSticky(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* sticky navbar */
  const menuActive = () => {
    setActive(!active);
  };
  const searchActive = () => {
    setSearchShow(!searchShow);
    console.log("hell");
  };

  // Control sidebar navigation
  let items = document.querySelectorAll(".menu-item-has-children > a");
  for (let i in items) {
    if (items.hasOwnProperty(i)) {
      items[i].onclick = function () {
        this.parentElement
          .querySelector(".sub-menu")
          .classList.toggle("active");
        this.classList.toggle("open");
      };
    }
  }

  return (
    <>
      {/* search popup start*/}
      {openModal && (
        <MainPopUpModal
          openModal={openModal}
          secondmodal={secondmodal}
          setSecondModal={setSecondModal}
          setOpenModal={setOpenModal}
          setSelectedPass={setSelectedPass}
          selectedpass={selectedpass}
          closeModal={() => {
            setSecondModal("first");
            setOpenModal(false);
          }}
        />
      )}
      {/*       <div
        className={searchShow ? "td-search-popup active" : "td-search-popup "}
        id="td-search-popup"
      >
        <form action="/" className="search-form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search....."
            />
          </div>
          <button type="submit" className="submit-btn">
            <FaSearch />
          </button>
        </form>
      </div> */}
      {/* search popup end*/}
      <div
        onClick={searchActive}
        className={searchShow ? "body-overlay active" : "body-overlay"}
        id="body-overlay"
      ></div>
      {/* navbar start */}
      <div className={isSticky ? "sticky" : ""}>
        <nav className=" navbar-area navbar-expand-lg">
          {/* container  */}
          <div
            className="nav-container navbar-bg"
            style={{ width: "100%", display: "flex" }}
          >
            <div className="responsive-mobile-menu" style={{ display: "flex" }}>
              <div className="logo" style={{ marginLeft: "40px" }}>
                <Link to="/">
                  <img src="assets/img/logo.png" alt="img" />
                </Link>
              </div>
              {/* <button
                onClick={menuActive}
                className={
                  active
                    ? "menu toggle-btn d-block d-lg-none open"
                    : "menu toggle-btn d-block d-lg-none"
                }
                data-target="#itech_main_menu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-left" />
                <span className="icon-right" />
              </button> */}
            </div>

            {/*             <div className="nav-right-part nav-right-part-mobile">
              <span className="search-bar-btn" onClick={searchActive}>
                <FaSearch />
              </span>
            </div> */}
            <div
              className={
                active
                  ? "collapse navbar-collapse sopen"
                  : "collapse navbar-collapse"
              }
              id="itech_main_menu"
            >
              <ul className="navbar-nav menu-open text-lg-end">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/experience">Experiences</a>
                </li>
                {/* <li>
                  <a href="/pricing"> Pricing</a>
                </li> */}
                <li>
                  <a href="/plan-your-flight">Plan Your Flight</a>
                </li>
                <li>
                  <a href="/Photo-memory">Photo Memories</a>
                </li>
                <li>
                  <Link to="/about">Location</Link>
                </li>
                <li>
                  <div
                    onClick={() => {
                      setOpenModal(true);
                    }}
                    style={{ background: "rgb(170, 4, 4)" , height:"50px",borderRadius:"25px"}}
                    className="nav-right-part nav-right-part-desktop align-self-center book-now-btn banner-btn btn btn-border-base btn-social"
                  >
                    <div className="book-now-text">Book Now</div>
                  </div>
                </li>
              </ul>
            </div>
            {/* <div
              onClick={() => {
                setOpenModal(true);
              }}
              style={{ background: "rgb(170, 4, 4)" }}
              className="nav-right-part nav-right-part-desktop align-self-center book-now-btn"
            >
              <div className="book-now-text">Book Now</div>
            </div> */}
            <button
              onClick={menuActive}
              className={
                active
                  ? "menu toggle-btn d-block d-lg-none open"
                  : "menu toggle-btn d-block d-lg-none"
              }
              data-target="#itech_main_menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-left" />
              <span className="icon-right" />
            </button>
          </div>
        </nav>
      </div>

      {/* navbar end */}
    </>
  );
};

export default NavBar;
