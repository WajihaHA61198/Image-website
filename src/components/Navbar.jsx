import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";
import "../styles/Navbar.css";

function Navbar() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  const [isSticky, setIsSticky] = useState(false);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [isDOpen, setIsDOpen] = useState(false);
  const [isDtOpen, setIsDtOpen] = useState(false);

  const [activeLink, setActiveLink] = useState("home");

  const [showDiv, setShowDiv] = useState(false);
  const [showDivGov, setShowDivGov] = useState(false);

  const countries = [
    { name: "Auditor", link: "/auditor" },
    { name: "Pattern of Shareholding", link: "/pattern-of-share" },
    { name: "Legal Advisor", link: "/legal-advisor" },
    { name: "SECP Investor Complaint", link: "/secp-investor-complaint" },
    { name: "Compliance Certificate", link: "/compliance-certificate" },
    { name: "Election of Directors", link: "/election-of-directors" },
    { name: "Notice & Other Downloads", link: "/notice-&-other-downloads" },
    { name: "Share Registrar", link: "/share-register" },
    { name: "financial Statements", link: "/financial-statement" },
    { name: "Corporate Information", link: "/corporate-information" },
    // Corporate information
    {
      name: "Head Office Address",
      link: "/corporate-information",
      description:
        " A/33, Central Commercial Area, Block 7/8, Shahrah-e-Faisal, KCHSU, Karachi-75350",
    },
    {
      name: "Registered Office & Plant Address",
      link: "/corporate-information",
      description: "F/538, S.I.T.E., Karachi-75700",
    },

    {
      name: "Phone number",
      link: "/corporate-information",
      description: "021-32582613, 34370471",
    },
    {
      name: "Fax number",
      link: "/corporate-information",
      description: "021-32562132",
    },
    {
      name: "Email",
      link: "/corporate-information",
      description: "info@image.net.pk",
    },
    {
      name: "Company Registered Number",
      link: "/corporate-information",
      description: "0022754",
    },
    {
      name: "National Tax Number (NTN)",
      link: "/corporate-information",
      description: "0698443-6",
    },
    {
      name: "NBankers",
      link: "/corporate-information",
      description:
        "Al Baraka Bank (Pakistan) Ltd. Bank AL-Habib Ltd. Habib Bank Ltd.",
    },
    // Financial Statements
    {
      name: "Third Quarter 2019",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/TQ19.pdf?v=1683549281",
      description: "",
    },
    {
      name: "Third Quarter 2018",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/TQ18.pdf?v=1683549368",
      description: "",
    },
    {
      name: "Third Quarter 2017",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/TQ17.pdf?v=1683549440",
      description: "",
    },
    {
      name: "First Quarter 2020",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/FQ20.pdf?v=1683549557",
      description: "",
    },
    {
      name: "First Quarter 2019",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/FQ19.pdf?v=1683549625",
      description: "",
    },
    {
      name: "First Quarter 2018",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/FQ18.pdf?v=1683549692",
      description: "",
    },
    {
      name: "First Quarter 2017",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/FQ17.pdf?v=1683549734",
      description: "",
    },
    {
      name: "First Quarter 2016",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/FQ16.pdf?v=1683549772",
      description: "",
    },
    //
    {
      name: "Half Yearly 2022",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/Half-Yearly-Report-December-2022-Final.pdf?v=1683549972",
      description: "",
    },
    {
      name: "Half Yearly 2020",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/Half_Year_2020.pdf?v=1683550007",
      description: "",
    },
    {
      name: "Half Yearly 2019",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/Half_Year_2019.pdf?v=1683550051",
      description: "",
    },
    {
      name: "Half Yearly 2018",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/Half_Year_2018.pdf?v=1683550084",
      description: "",
    },
    {
      name: "Half Yearly 2017",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/HalfYear2017.pdf?v=1683550107",
      description: "",
    },
    {
      name: "Half Yearly 2016",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/HalfYear2016.pdf?v=1683550138",
      description: "",
    },
    //
    // {
    //   name: "Annual Report 2022",
    //   link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/HalfYear2016.pdf?v=1683550138",
    //   description: "",
    // },
    {
      name: "Annual Report 2021",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/Annual-Report-2021.pdf?v=1683564398",
      description: "",
    },
    {
      name: "Annual Report 2020",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/Annual-Report-2020-TRPOL.pdf?v=1683564372",
      description: "",
    },
    {
      name: "Annual Report 2019",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/Annual-Report-2019.pdf?v=1683564338",
      description: "",
    },
    {
      name: "Annual Report 2018",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/Annual-Report-2018.pdf?v=1683564304",
      description: "",
    },
    {
      name: "Annual Report 2017",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/Annual_Report_2017.pdf?v=1683550654",
      description: "",
    },
    {
      name: "Annual Report 2016",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/June-2016-TPL.pdf?v=1683550615",
      description: "",
    },
    // Notice
    {
      name: "Notice for credit of unpaid Right into CDS of CDC account holder",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/CDC.pdf?v=1683564761",
      description: "",
    },
    {
      name: "Notice of Annual General Meeting (AGM) 2017",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/AGM.pdf?v=1683564804",
      description: "",
    },
    {
      name: "Notice of Annual General Meeting (AGM) 2016",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/AGM16.pdf?v=1683564842",
      description: "",
    },
    //
  ];
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
            className="flex py-4 hover:bg-gray-50"
          >
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
  }

  // Mobile menu toggle function for + / -
  const toggleDropdown = () => {
    setIsDOpen(!isDOpen);
  };
  const toggleDropdownTwo = () => {
    setIsDtOpen(!isDtOpen);
  };
  const Investor = () => {
    toggleDropdown();
    handleClick("investor");
  };
  const governance = () => {
    toggleDropdownTwo();
    handleClick("governance");
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
      <div className="flex justify-center -mt-[1rem] -mb-[1.2rem] xs:hidden md:flex">
        <Link
          to="/"
          activeClassName="active"
          onClick={() => handleClick("home")}
        >
          <img
            // className="md:h-[10rem] lg:h-[13rem]"
            className="h-[8rem]"
            src={logo}
            alt="logo"
          />
        </Link>
      </div>
      {/* Desktop menu */}
      <div className={isSticky ? "sticky" : ""}>
        <nav className="hidden md:flex items-center justify-between bg-black px-4 py-4">
          <ul className="flex items-center justify-center xll:w-[95%] desk-ul">
            {/* Menu items */}
            <li>
              <NavLink
                exact
                activeClassName="active"
                onClick={() => handleClick("home")}
                to="/"
                className="text-[#d1d5db] hover:text-white xm:text-base md:text-xs lg:text-sm xl:text-base iconChecker "
              >
                {/* {activeLink === "home" && (
                <i class="fa-solid fa-house mr-2 iconCheckerI text-white"></i>
              )} */}
                <span className={activeLink === "home" && "text-white"}>
                  Home
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink
                activeClassName="active"
                onClick={() => handleClick("about")}
                to="/about-us"
                className="text-[#919191] hover:text-white md:text-xs lg:text-sm xl:text-base iconChecker"
              >
                {/* {activeLink === "about" && (
                <i className="fa-solid fa-address-card mr-2 iconCheckerI text-white"></i>
              )} */}

                <span className={activeLink === "about" && "text-white"}>
                  About us
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink
                activeClassName="active"
                onClick={() => handleClick("journey")}
                to="/our-journey"
                className="text-[#919191] hover:text-white md:text-xs lg:text-sm xl:text-base iconChecker"
              >
                {/* {activeLink === "journey" && (
                <i class="fa-sharp fa-solid fa-plane mr-2 iconCheckerI text-white"></i>
              )} */}
                <span className={activeLink === "journey" && "text-white"}>
                  Our Journey
                </span>
              </NavLink>
            </li>

            {/* drop-1 */}
            <li>
              <div className="dropdown-1">
                <NavLink
                  activeClassName="active"
                  onClick={Investor}
                  className="dropdown-link1 text-[#919191] hover:text-white md:text-xs lg:text-sm xl:text-base iconChecker"
                >
                  {/* {activeLink === "investor" && (
                  <i class="fas fa-comments-dollar mr-2 iconCheckerI text-white"></i>
                )} */}

                  <span className={activeLink === "investor" && "text-white"}>
                    Investor Relations
                  </span>
                </NavLink>

                {isDOpen && (
                  <div className="dropdown-menu-1">
                    <ul className="investor-droplink">
                      <li>
                        <Link
                          onClick={handleClickClose}
                          to="/investor-relation/corporate-information"
                          className="dropdown-link text-[#919191] hover:text-white md:text-sm py-2"
                        >
                          Corporate Information
                        </Link>
                      </li>

                      <li>
                        <Link
                          onClick={handleClickClose}
                          to="/investor-relation/financial-statement"
                          className="dropdown-link text-[#919191] hover:text-white md:text-sm py-2"
                        >
                          Financial Statements
                        </Link>
                      </li>

                      <li>
                        <Link
                          onClick={handleClickClose}
                          to="/investor-relation/share-register"
                          className="dropdown-link text-[#919191] hover:text-white md:text-sm py-2"
                        >
                          Share Registrar
                        </Link>
                      </li>

                      <li>
                        <Link
                          onClick={handleClickClose}
                          to="/investor-relation/notice-&-other-downloads"
                          className="dropdown-link text-[#919191] hover:text-white md:text-sm py-2"
                        >
                          Notice & Other Downloads
                        </Link>
                      </li>

                      <li>
                        <Link
                          onClick={handleClickClose}
                          to="/investor-relation/election-of-directors"
                          className="dropdown-link text-[#919191] hover:text-white md:text-sm py-2"
                        >
                          Election of Directors
                        </Link>
                      </li>

                      <li>
                        <Link
                          onClick={handleClickClose}
                          to="/investor-relation/compliance-certificate"
                          className="dropdown-link text-[#919191] hover:text-white md:text-sm py-2"
                        >
                          Compliance Certificate
                        </Link>
                      </li>

                      <li>
                        <Link
                          onClick={handleClickClose}
                          to="/investor-relation/secp-investor-complaint"
                          className="dropdown-link text-[#919191] hover:text-white md:text-sm py-2"
                        >
                          SECP Investor Complaint
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </li>
            {/* -------------- */}

            <li>
              <div className="dropdown-2">
                <NavLink
                  onClick={governance}
                  className="dropdown-link2 text-[#919191] hover:text-white md:text-xs lg:text-sm xl:text-base iconChecker"
                >
                  {/* {activeLink === "governance" && (
                  <i class="fa-solid fa-sitemap mr-2 iconCheckerI text-white"></i>
                )} */}
                  <span className={activeLink === "governance" && "text-white"}>
                    Governance
                  </span>
                </NavLink>

                {isDtOpen && (
                  <div className="dropdown-menu-2">
                    <ul className="investor-droplink">
                      <li>
                        <Link
                          onClick={handleClickClose}
                          to="/governance/legal-advisor"
                          className="dropdown-link text-[#919191] hover:text-white md:text-sm py-1"
                        >
                          Legal Advisor
                        </Link>
                      </li>

                      <li>
                        <Link
                          onClick={handleClickClose}
                          to="/governance/pattern-of-share"
                          className="dropdown-link text-[#919191] hover:text-white md:text-sm py-1"
                        >
                          Pattern of Share
                        </Link>
                      </li>

                      <li>
                        <Link
                          onClick={handleClickClose}
                          to="/governance/auditor"
                          className="dropdown-link text-[#919191] hover:text-white md:text-sm py-1"
                        >
                          Auditor
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </li>
            {/* --------------- */}
            <li>
              <NavLink
                activeClassName="active"
                onClick={() => handleClick("events")}
                to="/events-media"
                className="text-[#919191] hover:text-white md:text-xs lg:text-sm xl:text-base iconChecker"
              >
                {/* {activeLink === "events" && (
                <i class="fa-solid fa-calendar-days mr-2 iconCheckerI text-white"></i>
              )} */}
                <span className={activeLink === "events" && "text-white"}>
                  Events & Media
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink
                activeClassName="active"
                onClick={() => handleClick("touch")}
                to="/get-in-touch"
                className="text-[#919191] hover:text-white md:text-xs lg:text-sm xl:text-base iconChecker"
              >
                {/* {activeLink === "touch" && (
                <i class="fas fa-comments mr-2 iconCheckerI text-white"></i>
              )} */}
                <span className={activeLink === "touch" && "text-white"}>
                  Get in touch
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink
                activeClassName="active"
                onClick={() => handleClick("careers")}
                to="/our-team"
                className="text-[#919191] hover:text-white md:text-xs lg:text-sm xl:text-base iconChecker"
              >
                {/* {activeLink === "careers" && (
                <i class="fa-solid fa-people-group mr-2 iconCheckerI text-white"></i>
              )} */}

                <span className={activeLink === "careers" && "text-white"}>
                  Our Team
                </span>
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
                className="lg:text-black ss:text-black mx-8 border-none top-[10%] right-0 flex justify-end absolute"
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
      <div className={`${isSearchOpen ? "overlay lg:hidden" : ""}`}>
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
                    className="fa-solid fa-xmark flex justify-end text-[20px] hover:text-white "
                  ></i>
                </div>
                <h1 className="text-center text-2xl mb-8 font-semibold text-[#475569]">
                  Menu
                </h1>
              </div>
              <ul>
                <li className="py-2.5">
                  <Link
                    onClick={handleClickCloseMob}
                    to="/"
                    className="text-[#919191]  lg:text-base md:text-xs"
                  >
                    <i className="fa-solid fa-house mr-2"></i>
                    Home
                  </Link>
                </li>

                <li className="py-2.5">
                  <Link
                    onClick={handleClickCloseMob}
                    to="/about-us"
                    className="text-[#919191] text-base"
                  >
                    <i className="fa-solid fa-address-card mr-2"></i>
                    About us
                  </Link>
                </li>

                <li className="py-2">
                  <Link
                    onClick={handleClickCloseMob}
                    to="/our-journey"
                    className="text-[#919191] text-base"
                  >
                    <i className="fa-sharp fa-solid fa-plane mr-2"></i>
                    Our Journey
                  </Link>
                </li>

                {/* ---------------------- */}
                <li className="py-2.5 ">
                  <div className="dropdown-mob">
                    <div className="flex justify-between">
                      <div>
                        <Link
                          to="/investor-relations"
                          className="text-[#919191] text-base"
                        >
                          <i className="fas fa-comments-dollar mr-2"></i>
                          Investor Relations
                        </Link>
                      </div>

                      <div onClick={toggleDiv}>
                        {showDiv ? (
                          <i className="fa fa-minus" aria-hidden="true"></i>
                        ) : (
                          <i className="fa-solid fa-plus"></i>
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
                              className="dropdown-link text-[#919191] hover:text-black md:text-sm py-2"
                            >
                              Corporate Information
                            </Link>
                          </li>

                          <li>
                            <Link
                              onClick={handleClickCloseMob}
                              to="/investor-relation/financial-statement"
                              className="dropdown-link text-[#919191] hover:text-black md:text-sm py-2"
                            >
                              Financial Statements
                            </Link>
                          </li>

                          <li>
                            <Link
                              onClick={handleClickCloseMob}
                              to="/investor-relation/share-register"
                              className="dropdown-link text-[#919191] hover:text-black md:text-sm py-2"
                            >
                              Share Registrar
                            </Link>
                          </li>

                          <li>
                            <Link
                              onClick={handleClickCloseMob}
                              to="/investor-relation/notice-&-other-downloads"
                              className="dropdown-link text-[#919191] hover:text-black md:text-sm py-2"
                            >
                              Notice & Other Downloads
                            </Link>
                          </li>

                          <li>
                            <Link
                              onClick={handleClickCloseMob}
                              to="/investor-relation/election-of-directors"
                              className="dropdown-link text-[#919191] hover:text-black md:text-sm py-2"
                            >
                              Election of Directors
                            </Link>
                          </li>

                          <li>
                            <Link
                              onClick={handleClickCloseMob}
                              to="/investor-relation/compliance-certificate"
                              className="dropdown-link text-[#919191] hover:text-black md:text-sm py-2"
                            >
                              Compliance Certificate
                            </Link>
                          </li>

                          <li>
                            <Link
                              onClick={handleClickCloseMob}
                              to="/investor-relation/secp-investor-complaint"
                              className="dropdown-link text-[#919191] hover:text-black md:text-sm py-2"
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

                <li className="py-2.5">
                  <div className="dropdown-mob-Gov">
                    <div className="flex justify-between">
                      <div>
                        <Link
                          to="/governance"
                          className="text-[#919191] text-base"
                        >
                          <i className="fa-solid fa-sitemap mr-2"></i>
                          Governance
                        </Link>
                      </div>

                      <div onClick={toggleDivGov}>
                        {showDivGov ? (
                          <i className="fa fa-minus" aria-hidden="true"></i>
                        ) : (
                          <i className="fa-solid fa-plus"></i>
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
                              className="dropdown-link text-[#919191] hover:text-black md:text-sm py-2"
                            >
                              Legal Advisor
                            </Link>
                          </li>

                          <li>
                            <Link
                              onClick={handleClickCloseMob}
                              to="/governance/pattern-of-share"
                              className="dropdown-link text-[#919191] hover:text-black md:text-sm py-2"
                            >
                              Pattern of Share
                            </Link>
                          </li>

                          <li>
                            <Link
                              onClick={handleClickCloseMob}
                              to="/governance/auditor"
                              className="dropdown-link text-[#919191] hover:text-black md:text-sm py-2"
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

                <li className="py-2.5">
                  <Link
                    onClick={handleClickCloseMob}
                    to="/events-media"
                    className="text-[#919191] text-base"
                  >
                    <i className="fa-solid fa-calendar-days mr-2"></i>
                    Events & Media
                  </Link>
                </li>

                <li className="py-2.5">
                  <Link
                    onClick={handleClickCloseMob}
                    to="/get-in-touch"
                    className="text-[#919191] text-base"
                  >
                    <i className="fas fa-comments mr-2"></i>
                    Get in touch
                  </Link>
                </li>

                <li className="py-2.5">
                  <Link
                    onClick={handleClickCloseMob}
                    to="/our-team"
                    className="text-[#919191] text-base"
                  >
                    {/* <i class="fa fa-graduation-cap mr-2"></i> */}
                    <i className="fa-solid fa-people-group mr-2"></i>
                    Our Team
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
