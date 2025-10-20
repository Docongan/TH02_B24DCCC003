import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WeatherApp from "./components/Thoitiet";
import StudentList from "./components/Sinhvien";
import StudentDetail from "./components/Chitietsv";
import NewsApp from "./components/Tintuc";
import "./Style.css"



export default function Trangchu() {
  return (
    <Router>
      <nav>
        <Link to="/">Trang chủ</Link>
        <Link to="/bai1">Bài 1</Link>
        <Link to="/bai2">Bài 2</Link>
        <Link to="/bai3">Bài 3</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h2>Đang ở trang chủ TH02_B24DCCC165</h2>} />
        <Route path="/bai1" element={<WeatherApp />} />
        <Route path="/bai2" element={<StudentList />} />
        <Route path="/bai2/:id" element={<StudentDetail />} />
        <Route path="/bai3" element={<NewsApp/>}/>
      </Routes>
    </Router>
  );
}
