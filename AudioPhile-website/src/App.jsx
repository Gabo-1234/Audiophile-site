import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navi from "./Components/Navigation.jsx";
import Home from "./Components/Home.jsx";
import FooterNavi from "./Components/FooterNav.jsx";
import "./Components/Pages/Page.css"
import Headphone from "./Components/Pages/HeadphonesPage.jsx"
import Earphone from "./Components/Pages/EarphonesPage.jsx"
import Speaker from "./Components/Pages/SpeakerPage.jsx"

function App() {
  return (
    <BrowserRouter>
      <Navi />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HeadphonesPage" element={<Headphone />} />
        <Route path="/SpeakersPage" element={<Speaker />} />
        <Route path="/EarphonesPage" element={<Earphone />} />
      </Routes>
      <FooterNavi />
    </BrowserRouter>
  );
}

export default App;
