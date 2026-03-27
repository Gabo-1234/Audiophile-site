import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Responsive.css"
import Navi from "./Navigations/Navigation.jsx";
import HomePage from "./Pages/HomePage.jsx";
import FooterNavi from "./Navigations/FooterNav.jsx";
import Page from "./Pages/Page.jsx";
import ProductPage from "./Pages/ProductPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navi />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HeadphonesPage" element={<Page />} />
        <Route path="/SpeakersPage" element={<Page />} />
        <Route path="/EarphonesPage" element={<Page />} />
        <Route path="/Product/:id" element=
        {<ProductPage />} />
      </Routes>
      <FooterNavi />
    </BrowserRouter>
  );
}

export default App;
