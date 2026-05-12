import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AdminPage from "./pages/AdminPage";
import Header from "./components/Header";


export default function App() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </div>
  );
}