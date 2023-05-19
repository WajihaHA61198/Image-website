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
} from "./components/page/index";
import ScrollTop from "./ScrollTop";

function App() {
  return (
    <>
      <Navbar />

      <main>
        {/* @Routes */}
        <Routes>
        {/* <ScrollTop /> */}
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<Aboutus />} />
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

          {/* 404 */}
          <Route path="/*" element={<PageNotFound />} />
        </Routes>

        <Footer />
      </main>
    </>
  );
}

export default App;
