import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";
import "../styles/Navbar.css";

function Navbar({ activeSection, setActiveSections, ...props }) {
  const [searchInput, setSearchInput] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  const [isSticky, setIsSticky] = useState(false);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [isDOpen, setIsDOpen] = useState(false);
  const [isDtOpen, setIsDtOpen] = useState(false);
  const [isDzOpen, setIsDzOpen] = useState(false);

  const [activeLink, setActiveLink] = useState("home");

  const [showDiv, setShowDiv] = useState(false);
  const [showDivGov, setShowDivGov] = useState(false);
  const [showDivAbout, setShowDivAbout] = useState(false);

  const countries = [
    { name: "Auditor", link: "/governance/auditor", file: "URL" },
    {
      name: "Pattern of Shareholding",
      link: "/governance/pattern-of-share",
      file: "URL",
    },
    { name: "Legal Advisor", link: "/governance/legal-advisor", file: "URL" },
    {
      name: "SECP Investor Complaint",
      link: "/investor-relation/secp-investor-complaint",
      file: "URL",
    },
    {
      name: "Compliance Certificate",
      link: "/investor-relation/compliance-certificate",
      file: "URL",
    },
    {
      name: "Election of Directors",
      link: "/investor-relation/election-of-directors",
      file: "URL",
    },
    {
      name: "Notice & Other Downloads",
      link: "/investor-relation/notice-&-other-downloads",
      file: "URL",
    },
    {
      name: "Share Registrar",
      link: "/investor-relation/share-register",
      file: "URL",
    },
    {
      name: "financial Statements",
      link: "/investor-relation/financial-statement",
      file: "URL",
    },
    {
      name: "Corporate Information",
      link: "/investor-relation/corporate-information",
      file: "URL",
    },
    // Corporate information
    {
      name: "Head Office Address",
      link: "/investor-relation/corporate-information",
      description:
        " A/33, Central Commercial Area, Block 7/8, Shahrah-e-Faisal, KCHSU, Karachi-75350",
      file: "URL",
    },
    {
      name: "Registered Office & Plant Address",
      link: "/investor-relation/corporate-information",
      description: "F/538, S.I.T.E., Karachi-75700",
      file: "URL",
    },

    {
      name: "Phone number",
      link: "/investor-relation/corporate-information",
      description: "021-32582613, 34370471",
      file: "URL",
    },
    {
      name: "Fax number",
      link: "/investor-relation/corporate-information",
      description: "021-32562132",
      file: "URL",
    },
    {
      name: "Email",
      link: "/investor-relation/corporate-information",
      description: "info@image.net.pk",
      file: "URL",
    },
    {
      name: "Company Registered Number",
      link: "/investor-relation/corporate-informationn",
      description: "0022754",
      file: "URL",
    },
    {
      name: "National Tax Number (NTN)",
      link: "/investor-relation/corporate-information",
      description: "0698443-6",
      file: "URL",
    },
    {
      name: "Bankers",
      link: "/investor-relation/corporate-information",
      description:
        "Al Baraka Bank (Pakistan) Ltd. Bank AL-Habib Ltd. Habib Bank Ltd.",
      file: "URL",
    },
    // Financial Statements
    {
      name: "Third Quarter 2019",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/TQ19.pdf?v=1683549281",
      description: "",
      file: "PDF",
    },
    {
      name: "Third Quarter 2018",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/TQ18.pdf?v=1683549368",
      description: "",
      file: "PDF",
    },
    {
      name: "Third Quarter 2017",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/TQ17.pdf?v=1683549440",
      description: "",
      file: "PDF",
    },
    {
      name: "First Quarter 2020",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/FQ20.pdf?v=1683549557",
      description: "",
      file: "PDF",
    },
    {
      name: "First Quarter 2019",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/FQ19.pdf?v=1683549625",
      description: "",
      file: "PDF",
    },
    {
      name: "First Quarter 2018",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/FQ18.pdf?v=1683549692",
      description: "",
      file: "PDF",
    },
    {
      name: "First Quarter 2017",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/FQ17.pdf?v=1683549734",
      description: "",
      file: "PDF",
    },
    {
      name: "First Quarter 2016",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/FQ16.pdf?v=1683549772",
      description: "",
      file: "PDF",
    },
    //
    {
      name: "Half Yearly 2022",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/Half-Yearly-Report-December-2022-Final.pdf?v=1683549972",
      description: "",
      file: "PDF",
    },
    {
      name: "Half Yearly 2020",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/Half_Year_2020.pdf?v=1683550007",
      description: "",
      file: "PDF",
    },
    {
      name: "Half Yearly 2019",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/Half_Year_2019.pdf?v=1683550051",
      description: "",
      file: "PDF",
    },
    {
      name: "Half Yearly 2018",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/Half_Year_2018.pdf?v=1683550084",
      description: "",
      file: "PDF",
    },
    {
      name: "Half Yearly 2017",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/HalfYear2017.pdf?v=1683550107",
      description: "",
      file: "PDF",
    },
    {
      name: "Half Yearly 2016",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/HalfYear2016.pdf?v=1683550138",
      description: "",
      file: "PDF",
    },
    //
    // {
    //   name: "Annual Report 2022",
    //   link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/HalfYear2016.pdf?v=1683550138",
    // description:"",
    //   description: "PDF",
    // },
    {
      name: "Annual Report 2021",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/Annual-Report-2021.pdf?v=1683564398",
      description: "",
      file: "PDF",
    },
    {
      name: "Annual Report 2020",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/Annual-Report-2020-TRPOL.pdf?v=1683564372",
      description: "",
      file: "PDF",
    },
    {
      name: "Annual Report 2019",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/Annual-Report-2019.pdf?v=1683564338",
      description: "",
      file: "PDF",
    },
    {
      name: "Annual Report 2018",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/Annual-Report-2018.pdf?v=1683564304",
      description: "",
      file: "PDF",
    },
    {
      name: "Annual Report 2017",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/Annual_Report_2017.pdf?v=1683550654",
      description: "",
      file: "PDF",
    },
    {
      name: "Annual Report 2016",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/June-2016-TPL.pdf?v=1683550615",
      description: "",
      file: "PDF",
    },
    // Notice
    {
      name: "Notice for credit of unpaid Right into CDS of CDC account holder",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/CDC.pdf?v=1683564761",
      description: "",
      file: "PDF",
    },
    {
      name: "Notice of Annual General Meeting (AGM) 2017",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/AGM.pdf?v=1683564804",
      description: "",
      file: "PDF",
    },
    {
      name: "Notice of Annual General Meeting (AGM) 2016",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/AGM16.pdf?v=1683564842",
      description: "",
      file: "PDF",
    },
    //
  ];

  const handleClickNav = () => {
    window.scrollTo(0, 0);
  };

  const handleLinkClick = (buttonId) => {
    props.onLinkClick(buttonId);
    handleClickNav();
  };

  const handleClickNavSection = (section) => {
    setActiveSections(section);
    about();
  };
  // search function
  const handleChangeSearch = (e) => {
    e.preventDefault();
    const filtered = countries.filter((country) => {
      return country.name.toLowerCase().includes(searchInput.toLowerCase());
    });
    setFilteredCountries(filtered);
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    countries.filter((country) => {
      return country.name.match(searchInput);
    });
  }

  const renderCountries = () => {
    const listToRender = filteredCountries.length
      ? filteredCountries
      : countries;
    return listToRender.map((country, index) => {
      return (
        <span key={index}>
          {/*  */}
          <Link
            onClick={handleClickCloseSearch}
            to={country.link}
            className="flex py-4 hover:bg-gray-50 justify-between lg:px-8 xs:px-2"
          >
            <div className="flex">
              <svg
                className="mr-4"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="26"
                viewBox="0 0 22 26"
                fill="none"
              >
                <path
                  d="M1 0.5H13.5L21 8.83333V25.5H1V0.5Z"
                  stroke="black"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.5 0.5V8.83333H21"
                  stroke="black"
                  stroke-linejoin="round"
                />
              </svg>
              <td className="xs:text-sm lg:text-base">{country.name}</td>
            </div>

            {/* icon */}
            <div className="flex flex-col items-center text-xs text-slate-500">
              <i class="fa-solid fa-arrow-down"></i>
              <td className="tracking-[.1rem] font-thin">{country.file}</td>
            </div>
          </Link>
        </span>
      );
    });
  };

  // mobile tabs dropdown
  const toggleDiv = () => {
    setShowDiv(!showDiv);
  };
  const toggleDivGov = () => {
    setShowDivGov(!showDivGov);
  };
  const toggleDivAbout = () => {
    setShowDivAbout(!showDivAbout);
  };

  const handleClickCloseMob = () => {
    setIsOpen(false);
  };

  const handleClickCloseSearch = () => {
    setIsSearchOpen(false);
  };
  const handleClickClose = () => {
    setIsDOpen(false);
    setIsDtOpen(false);
  };

  const handleClick = (link) => {
    setActiveLink(link);
  };

  // Searchbar Open Function
  function handleSearchClick() {
    setIsSearchOpen(!isSearchOpen);
  }

  // Mobile Hamburger Menu Open Function
  function handleOpenClick() {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setShowDivAbout(false);
      setShowDiv(false);
      setShowDivGov(false);
    }
  }

  // Mobile menu toggle function for + / -
  const toggleDropdown = () => {
    setIsDOpen(!isDOpen);
  };
  const toggleDropdownTwo = () => {
    setIsDtOpen(!isDtOpen);
  };
  const toggleDropdownzero = () => {
    setIsDzOpen(!isDzOpen);
  };
  const Investor = () => {
    toggleDropdown();
    handleClick("investor");
    // handleLinkClick();
  };
  const governance = () => {
    toggleDropdownTwo();
    handleClick("governance");
  };
  const about = () => {
    toggleDropdownzero();
    handleClick("about");
    handleLinkClick();
  };
  // ----------------------

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  return (
    <div className="relative">
      {/* logo  [768] */}
      <div className="flex justify-center -mt-[2rem] -mb-[.9rem] xs:hidden md:flex">
        <li
          className={props.activeButton === "Home" ? "active" : ""}
          onClick={() => handleLinkClick("Home")}
        >
          <Link
            to="/"
            activeClassName="active"
            onClick={() => handleClick("home")}
          >
            <img className="h-[6rem]" src={logo} alt="logo" />
          </Link>
        </li>
      </div>
      {/* Desktop menu */}
      <div className={isSticky ? "sticky" : ""}>
        <nav className="hidden md:flex items-center justify-between bg-black px-4 py-4">
          <ul className="flex items-center justify-center xll:w-[95%] desk-ul ep:w-[100%]">
            {/* Menu items */}
            <li
              className={props.activeButton === "Home" ? "active" : ""}
              onClick={() => handleLinkClick("Home")}
            >
              <NavLink
                exact
                to="/"
                className="text-white xm:text-base md:text-xs lg:text-sm xl:text-base iconChecker "
              >
                Home
              </NavLink>
            </li>

            {/* drop-0 - About */}
            <li
              className={props.activeButton === "About us" ? "active" : ""}
              // onClick={() => handleLinkClick("About us")}
            >
              <div className="dropdown-0">
                <NavLink
                  activeClass="active"
                  to="/about-us"
                  // onClick={about}
                  onClick={() => handleClickNavSection("about")}
                  className="dropdown-link0 text-white md:text-xs lg:text-sm xl:text-base iconChecker"
                >
                  About Us
                </NavLink>

                <div className="dropdown-menu-0">
                  <ul className="investor-droplink">
                    <li onClick={() => handleLinkClick("About us")}>
                      <HashLink
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        activeClass="active"
                        onClick={() => {
                          handleClickNavSection("vision");
                        }}
                        to="/about-us#vision-and-mission"
                        className="dropdown-link text-white md:text-sm py-1"
                      >
                        Vision & Mission
                      </HashLink>
                    </li>

                    <li onClick={() => handleLinkClick("About us")}>
                      <HashLink
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => {
                          handleClickNavSection("board");
                        }}
                        to="/about-us#board-of-directors"
                        className="dropdown-link text-white md:text-sm py-1"
                      >
                        Board of Directors
                      </HashLink>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {/* -------------- */}

            <li
              className={props.activeButton === "Our Journey" ? "active" : ""}
              onClick={() => handleLinkClick("Our Journey")}
            >
              <NavLink
                to="/our-journey"
                className="text-white md:text-xs lg:text-sm xl:text-base iconChecker"
              >
                Our Journey
              </NavLink>
            </li>

            <li
              className={props.activeButton === "Our Team" ? "active" : ""}
              onClick={() => handleLinkClick("Our Team")}
            >
              <NavLink
                to="/our-team"
                className="text-white md:text-xs lg:text-sm xl:text-base iconChecker"
              >
                Our Team
              </NavLink>
            </li>

            {/* drop-1 - Investor Relations */}
            <li
              className={
                props.activeButton === "Investor Relations"
                  ? "active text-white "
                  : ""
              }
              onClick={() => handleLinkClick("Investor Relations")}
            >
              <div className="dropdown-1">
                <NavLink
                  activeClassName="active"
                  onClick={Investor}
                  className="dropdown-link1 text-white md:text-xs lg:text-sm xl:text-base iconChecker"
                >
                  Investor Relations
                </NavLink>

                <div className="dropdown-menu-1">
                  <ul className="investor-droplink">
                    <li>
                      <Link
                        onClick={handleClickClose}
                        to="/investor-relation/corporate-information"
                        className="dropdown-link text-white md:text-sm py-2"
                      >
                        Corporate Information
                      </Link>
                    </li>

                    <li>
                      <Link
                        onClick={handleClickClose}
                        to="/investor-relation/financial-statement"
                        className="dropdown-link text-white md:text-sm py-2"
                      >
                        Financial Statements
                      </Link>
                    </li>

                    <li>
                      <Link
                        onClick={handleClickClose}
                        to="/investor-relation/share-register"
                        className="dropdown-link text-white md:text-sm py-2"
                      >
                        Share Registrar
                      </Link>
                    </li>

                    <li>
                      <Link
                        onClick={handleClickClose}
                        to="/investor-relation/notice-&-other-downloads"
                        className="dropdown-link text-white md:text-sm py-2"
                      >
                        Notice & Other Downloads
                      </Link>
                    </li>

                    <li>
                      <Link
                        onClick={handleClickClose}
                        to="/investor-relation/election-of-directors"
                        className="dropdown-link text-white md:text-sm py-2"
                      >
                        Election of Directors
                      </Link>
                    </li>

                    <li>
                      <Link
                        onClick={handleClickClose}
                        to="/investor-relation/compliance-certificate"
                        className="dropdown-link text-white md:text-sm py-2"
                      >
                        Compliance Certificate
                      </Link>
                    </li>

                    <li>
                      <Link
                        onClick={handleClickClose}
                        to="/investor-relation/secp-investor-complaint"
                        className="dropdown-link text-white md:text-sm py-2"
                      >
                        SECP Investor Complaint
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {/* -------------- */}

            {/* drop-2 - Governance */}
            <li
              className={props.activeButton === "Governance" ? "active" : ""}
              // onClick={() => handleLinkClick("Governance")}
            >
              <div className="dropdown-2">
                <NavLink
                  onClick={governance}
                  className="dropdown-link2 text-white md:text-xs lg:text-sm xl:text-base iconChecker"
                >
                  Governance
                </NavLink>

                <div className="dropdown-menu-2">
                  <ul className="investor-droplink">
                    <li>
                      <Link
                        onClick={handleClickClose}
                        to="/governance/legal-advisor"
                        className="dropdown-link text-white md:text-sm py-1"
                      >
                        Legal Advisor
                      </Link>
                    </li>

                    <li>
                      <Link
                        onClick={handleClickClose}
                        to="/governance/pattern-of-share"
                        className="dropdown-link text-white md:text-sm py-1"
                      >
                        Pattern of Share
                      </Link>
                    </li>

                    <li>
                      <Link
                        onClick={handleClickClose}
                        to="/governance/auditor"
                        className="dropdown-link text-white md:text-sm py-1"
                      >
                        Auditor
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {/* --------------- */}
            <li
              className={
                props.activeButton === "Events & Media" ? "active" : ""
              }
              onClick={() => handleLinkClick("Events & Media")}
            >
              <NavLink
                to="/events-media"
                className="text-white md:text-xs lg:text-sm xl:text-base iconChecker"
              >
                Events & Media
              </NavLink>
            </li>

            <li
              className={props.activeButton === "Get in Touch" ? "active" : ""}
              onClick={() => handleLinkClick("Get in Touch")}
            >
              <NavLink
                to="/get-in-touch"
                className="text-white md:text-xs lg:text-sm xl:text-base iconChecker"
              >
                Get In Touch
              </NavLink>
            </li>
          </ul>

          {/* Search icon */}
          <button
            onClick={handleSearchClick}
            className="lg:mr-12 md:mr-4 text-white hover:text-white border-none"
          >
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </nav>
      </div>
      {/* ----------------------------------- */}

      {/* Search box */}
      {isSearchOpen && (
        <div className="w-full xs:hidden lg:flex">
          <div className="absolute inset-0 lg:bg-white ss:bg-white justify-center h-[50vh] openInStyle shadow-lg z-[10000] overflow-hidden pb-8">
            <div className="flex flex-col-reverse h-[15vh]">
              <button
                className="lg:text-black ss:text-black mx-8 border-none top-[15%] right-0 flex justify-end absolute"
                onClick={handleSearchClick}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
              <div className="flex items-center justify-center">
                <input
                  type="text"
                  placeholder="Search"
                  onChange={handleChangeSearch}
                  value={searchInput}
                  className="w-[70%] px-4 py-2 lg:border-black border-solid border-2 ss:border-gray-600"
                />
                <i className="fa-solid fa-magnifying-glass text-black absolute right-[16%] cursor-pointer"></i>
              </div>
            </div>

            {searchInput !== "" && (
              <div className="mx-60 my-10 h-[12rem] overflow-y-scroll">
                <div>
                  <div className="text-black">{renderCountries()}</div>
                </div>
              </div>
            )}
          </div>
          <div
            // overlay1
            className={`${isSearchOpen ? "" : ""}`}
            onClick={handleSearchClick}
          ></div>
        </div>
      )}
      {/* ------------------------------------------------ */}
      {/* search for mobile */}
      <div className={`${isSearchOpen ? "overlay lg:hidden" : ""}  w-full`}>
        <div
          className={`Drawer__Container-Search ${
            isSearchOpen ? "Drawer__Container--isOpen" : ""
          }`}
        >
          <div className="flex justify-between items-center mb-10">
            <h1 className="capitalize text-center text-xl font-semibold text-[#475569]">
              Search our site
            </h1>
            <button
              className="text-black border-none flex justify-end"
              onClick={handleSearchClick}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="flex items-center justify-center">
            <input
              type="text"
              placeholder="Search"
              onChange={handleChangeSearch}
              value={searchInput}
              className="outline-1 outline-slate-400 w-[100%] px-4 py-2 lg:border-white border-solid border-2 ss:border-gray-600 focus:border-none"
            />
            <i className="fa-solid fa-magnifying-glass text-black absolute right-[11%] cursor-pointer"></i>
          </div>

          {searchInput !== "" && (
            <div className="mx-2 my-2 mt-8 h-auto">
              <div>
                <div className="text-black">{renderCountries()}</div>
              </div>
            </div>
          )}
        </div>
        <div className="w-[20%] h-full" onClick={handleSearchClick}></div>
      </div>

      {/* Mobile menu */}
      <div className={isSticky ? "sticky" : ""}>
        <nav className="md:hidden bg-white px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Breadcrumb menu */}
            <button
              onClick={handleOpenClick}
              className="text-gray-600 hover:text-gray-900 border-none"
            >
              <i className="fa-solid fa-bars text-[1.25rem] -mb-[.5rem]"></i>
            </button>
            {/* <MobileDrawer /> */}
            <span className="text-gray-800 font-bold text-xl">
              <Link to="/">
                <img
                  className="mx-auto h-20 -mb-4 -mt-2"
                  src={logo}
                  alt="Logo"
                />
              </Link>
            </span>
            {/* Search icon */}
            <button
              onClick={handleSearchClick}
              className="text-gray-600 hover:text-gray-900 border-none"
            >
              <i className="fa-solid fa-magnifying-glass text-black cursor-pointer text-xl -mb-[.5rem]"></i>
            </button>
          </div>

          {/* ---------------------------------------------- */}
          {/* Mobile menu items */}
          <div className={`${isOpen ? "overlay" : ""}`}>
            <div
              className={`Drawer__Container ${
                isOpen ? "Drawer__Container--isOpen" : ""
              }`}
            >
              <div className="flex flex-row-reverse justify-between">
                <div className="">
                  <i
                    onClick={handleOpenClick}
                    className="fa-solid fa-xmark flex justify-end text-[20px] hover:text-white text-white"
                  ></i>
                </div>
                <h1 className="text-center text-3xl mb-8 font-medium text-white">
                  Menu
                </h1>
              </div>
              <ul>
                <li className="py-2.5" onClick={handleClickNav}>
                  <Link
                    onClick={handleClickCloseMob}
                    to="/"
                    className="text-white  lg:text-base md:text-xs"
                  >
                    {/* <i className="fa-solid fa-house mr-2"></i> */}
                    Home
                  </Link>
                </li>

                {/* ---------------------- */}
                <li className="py-2.5" onClick={handleClickNav}>
                  <div className="dropdown-mob-About">
                    <div
                      className="flex justify-between"
                      onClick={toggleDivAbout}
                    >
                      <div>
                        <Link to="/about-us" className="text-white text-base">
                          {/* <i className="fas fa-comments-dollar mr-2"></i> */}
                          About Us
                        </Link>
                      </div>

                      <div>
                        {showDivAbout ? (
                          <i
                            className="fa fa-minus text-xs text-white"
                            aria-hidden="true"
                          ></i>
                        ) : (
                          <i className="fa-solid fa-plus text-xs text-white"></i>
                        )}
                      </div>
                    </div>

                    {showDivAbout && (
                      <div className="dropdown-menu1">
                        {/* {isDivOpen && <div>This is a div element</div>} */}
                        <ul className="investor-droplink text-sm ml-6 mt-4">
                          <li>
                            <Link
                              onClick={handleClickCloseMob}
                              to="/about-us"
                              className="dropdown-link text-white hover:text-black md:text-sm py-3"
                            >
                              Board of Directors
                            </Link>
                          </li>

                          <li>
                            <Link
                              onClick={handleClickCloseMob}
                              to="/about-us"
                              className="dropdown-link text-white hover:text-black md:text-sm pb-0"
                            >
                              Vision & Mission
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </li>

                <li className="py-2.5" onClick={handleClickNav}>
                  <Link
                    onClick={handleClickCloseMob}
                    to="/our-journey"
                    className="text-white text-base"
                  >
                    {/* <i className="fa-sharp fa-solid fa-plane mr-2"></i> */}
                    Our Journey
                  </Link>
                </li>

                <li className="py-2.5" onClick={handleClickNav}>
                  <Link
                    onClick={handleClickCloseMob}
                    to="/our-team"
                    className="text-white text-base"
                  >
                    {/* <i class="fa fa-graduation-cap mr-2"></i> */}
                    {/* <i className="fa-solid fa-people-group mr-2"></i> */}
                    Our Team
                  </Link>
                </li>

                {/* ---------------------- */}
                <li className="py-2.5" onClick={handleClickNav}>
                  <div className="dropdown-mob">
                    <div className="flex justify-between" onClick={toggleDiv}>
                      <div>
                        <Link
                          // to="/investor-relations"
                          className="text-white text-base"
                        >
                          {/* <i className="fas fa-comments-dollar mr-2"></i> */}
                          Investor Relations
                        </Link>
                      </div>

                      <div>
                        {showDiv ? (
                          <i
                            className="fa fa-minus text-xs text-white"
                            aria-hidden="true"
                          ></i>
                        ) : (
                          <i className="fa-solid fa-plus text-xs text-white"></i>
                        )}
                      </div>
                    </div>

                    {showDiv && (
                      <div className="dropdown-menu1">
                        {/* {isDivOpen && <div>This is a div element</div>} */}
                        <ul className="investor-droplink text-sm ml-6 mt-4">
                          <li>
                            <Link
                              onClick={handleClickCloseMob}
                              to="/investor-relation/corporate-information"
                              className="dropdown-link text-white hover:text-black md:text-sm py-2"
                            >
                              Corporate Information
                            </Link>
                          </li>

                          <li>
                            <Link
                              onClick={handleClickCloseMob}
                              to="/investor-relation/financial-statement"
                              className="dropdown-link text-white hover:text-black md:text-sm py-2"
                            >
                              Financial Statements
                            </Link>
                          </li>

                          <li>
                            <Link
                              onClick={handleClickCloseMob}
                              to="/investor-relation/share-register"
                              className="dropdown-link text-white hover:text-black md:text-sm py-2"
                            >
                              Share Registrar
                            </Link>
                          </li>

                          <li>
                            <Link
                              onClick={handleClickCloseMob}
                              to="/investor-relation/notice-&-other-downloads"
                              className="dropdown-link text-white hover:text-black md:text-sm py-2"
                            >
                              Notice & Other Downloads
                            </Link>
                          </li>

                          <li>
                            <Link
                              onClick={handleClickCloseMob}
                              to="/investor-relation/election-of-directors"
                              className="dropdown-link text-white hover:text-black md:text-sm py-2"
                            >
                              Election of Directors
                            </Link>
                          </li>

                          <li>
                            <Link
                              onClick={handleClickCloseMob}
                              to="/investor-relation/compliance-certificate"
                              className="dropdown-link text-white hover:text-black md:text-sm py-2"
                            >
                              Compliance Certificate
                            </Link>
                          </li>

                          <li>
                            <Link
                              onClick={handleClickCloseMob}
                              to="/investor-relation/secp-investor-complaint"
                              className="dropdown-link text-white hover:text-black md:text-sm py-2"
                            >
                              SECP Investor Complaint
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </li>
                {/* ---------------------- */}

                <li className="py-2.5" onClick={handleClickNav}>
                  <div className="dropdown-mob-Gov">
                    <div
                      className="flex justify-between"
                      onClick={toggleDivGov}
                    >
                      <div>
                        <Link
                          // to="/governance"
                          className="text-white text-base"
                        >
                          {/* <i className="fa-solid fa-sitemap mr-2"></i> */}
                          Governance
                        </Link>
                      </div>

                      <div>
                        {showDivGov ? (
                          <i
                            className="fa fa-minus text-xs text-white"
                            aria-hidden="true"
                          ></i>
                        ) : (
                          <i className="fa-solid fa-plus text-xs text-white"></i>
                        )}
                      </div>
                    </div>

                    {showDivGov && (
                      <div className="dropdown-menu2">
                        <ul className="text-sm ml-6 mt-4 investor-droplink ">
                          <li>
                            <Link
                              onClick={handleClickCloseMob}
                              to="/governance/legal-advisor"
                              className="dropdown-link text-white hover:text-black md:text-sm py-2"
                            >
                              Legal Advisor
                            </Link>
                          </li>

                          <li>
                            <Link
                              onClick={handleClickCloseMob}
                              to="/governance/pattern-of-share"
                              className="dropdown-link text-white hover:text-black md:text-sm py-2"
                            >
                              Pattern of Share
                            </Link>
                          </li>

                          <li>
                            <Link
                              onClick={handleClickCloseMob}
                              to="/governance/auditor"
                              className="dropdown-link text-white hover:text-black md:text-sm py-2"
                            >
                              Auditor
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </li>
                {/* -------------------------- */}

                <li className="py-2.5" onClick={handleClickNav}>
                  <Link
                    onClick={handleClickCloseMob}
                    to="/events-media"
                    className="text-white text-base"
                  >
                    {/* <i className="fa-solid fa-calendar-days mr-2"></i> */}
                    Events & Media
                  </Link>
                </li>

                <li className="py-2.5" onClick={handleClickNav}>
                  <Link
                    onClick={handleClickCloseMob}
                    to="/get-in-touch"
                    className="text-white text-base"
                  >
                    {/* <i className="fas fa-comments mr-2"></i> */}
                    Get In Touch
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className="h-full w-[20%] float-right"
              onClick={handleOpenClick}
            ></div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
