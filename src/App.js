import { useState } from "react";
import { Navbar, Footer } from "./components/index";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  Aboutus,
  Ourjourney,
  Events,
  GetInTouch,
  Career,
  PageNotFound,
  CorporateInformation,
  FinancialStatement,
  ShareRegister,
  NoticeDownloads,
  ElectionofDirectors,
  ComplianceCertificate,
  SECP,
  LegalAdvisor,
  PatternShare,
  Auditor,
  DesignersRetreat,
  WomensDay,
  Matrix,
  BreastCancer,
  IndependenceDay,
  BoardOfDirectors,
} from "./components/page/index";

function App() {
  const [activeSections, setActiveSections] = useState(null);
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonChange = (buttonId) => {
    setActiveButton(buttonId);
  };
  const handleLinkClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <>
      <Navbar
        activeSections={activeSections}
        setActiveSections={setActiveSections}
        activeButton={activeButton}
        onLinkClick={handleLinkClick}
      />
      <main>
        {/* @Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <Home
                activeButton={activeButton}
                onButtonChange={handleButtonChange}
              />
            }
          />
          <Route
            path="/about-us"
            element={<Aboutus activeSections={activeSections} />}
          />
          <Route path="/our-journey" element={<Ourjourney />} />
          <Route path="/events-media" element={<Events />} />
          <Route path="/get-in-touch" element={<GetInTouch />} />
          <Route path="/our-team" element={<Career />} />

          {/* @investor relations */}
          <Route
            path="/investor-relation/corporate-information"
            element={<CorporateInformation />}
          />
          <Route
            path="/investor-relation/financial-statement"
            element={<FinancialStatement />}
          />
          <Route
            path="/investor-relation/share-register"
            element={<ShareRegister />}
          />
          <Route
            path="/investor-relation/notice-&-other-downloads"
            element={<NoticeDownloads />}
          />
          <Route
            path="/investor-relation/election-of-directors"
            element={<ElectionofDirectors />}
          />
          <Route
            path="/investor-relation/compliance-certificate"
            element={<ComplianceCertificate />}
          />
          <Route
            path="/investor-relation/secp-investor-complaint"
            element={<SECP />}
          />
          {/* Governance */}
          <Route path="/governance/legal-advisor" element={<LegalAdvisor />} />
          <Route
            path="/governance/pattern-of-share"
            element={<PatternShare />}
          />
          <Route path="/governance/auditor" element={<Auditor />} />
          <Route
            path="/governance/board-of-directors"
            element={<BoardOfDirectors />}
          />

          {/* 404 */}
          <Route path="/*" element={<PageNotFound />} />

          {/* Events-Media */}
          <Route
            path="/events-media/Designer-Retreat"
            element={<DesignersRetreat />}
          />
          <Route path="/events-media/women-day" element={<WomensDay />} />

          <Route path="/events-media/matrix-fit" element={<Matrix />} />
          <Route
            path="/events-media/breast-cancer"
            element={<BreastCancer />}
          />
          <Route
            path="/events-media/independence-day"
            element={<IndependenceDay />}
          />
        </Routes>

        <Footer />
      </main>
    </>
  );
}

export default App;
