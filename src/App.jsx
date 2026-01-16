import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProgramPage from "./pages/ProgramPage";
import LocationPage from "./pages/LocationPage";
import FaqPage from "./pages/FaqPage";
import RoomPage from "./pages/Retreat Grouping List";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* 상단 헤더 */}
      <Header />

      {/* 라우팅 */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/program" element={<ProgramPage />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/room" element={<RoomPage />} />
      </Routes>

      {/* 하단 네비게이션 */}
      <Navbar />
    </Router>
  );
}
export default App;
