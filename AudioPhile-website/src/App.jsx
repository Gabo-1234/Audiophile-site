import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navi from "./Components/Navigation.jsx";
import Home from "./Components/Home.jsx";
import FooterNavi from "./Components/FooterNav.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navi />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <FooterNavi />
    </BrowserRouter>
  );
}

export default App;
