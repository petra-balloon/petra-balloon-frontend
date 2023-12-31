import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import CaseStudyDetails from "./pages/CaseStudyDetails";
import Contact from "./pages/Contact";
import HomeFour from "./pages/HomeFour";
import HomeOne from "./pages/HomeOne";
import HomeThree from "./pages/HomeThree";
import HomeTwo from "./pages/HomeTwo";
import Service from "./pages/Service";
import ServiceDetails from "./pages/ServiceDetails";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import HomeFive from "./pages/HomeFive";
import Experience from "./pages/Experience";
import Pricing from "./pages/Pricing";
import PlanYourFlight from "./pages/Plan-your-flight";
import PhotoMemory from "./pages/Photo-memory";
import TicketCreate from "./pages/TicketCreate";
import TermsAndConditions from './pages/TermsAndConditions';
import OrderConfirm from './pages/OrderConfirm';
import Faqs from './pages/petra-FAQs';
function App() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: "ease",
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeOne />} />
        <Route exact path="/index-2" element={<HomeTwo />} />
        <Route exact path="/index-3" element={<HomeThree />} />
        <Route exact path="/index-4" element={<HomeFour />} />
        <Route exact path="/index-5" element={<HomeFive />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/blog-details" element={<BlogDetails />} />
        <Route exact path="/case-study-details" element={<CaseStudyDetails />}/>
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/service-details" element={<ServiceDetails />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/experience" element={<Experience />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/plan-your-flight" element={<PlanYourFlight />} />
        <Route exact path="/photo-memory" element={<PhotoMemory />} />
        <Route exact path="/team-details" element={<TeamDetails />} />
        <Route exact path="/ticket" element={<TicketCreate />}></Route>
        <Route exact path="/terms&condition" element={<TermsAndConditions />}></Route>
        <Route exact path="/order-confirm" element={<OrderConfirm />}></Route>
        <Route exact path="/faqs" element={<Faqs />}></Route>
      </Routes>
      <ScrollToTop smooth color="#246BFD" />
    </BrowserRouter>
  );
}

export default App;
