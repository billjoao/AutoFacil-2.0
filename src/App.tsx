import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { Cadastro } from "./pages/Cadastro";
import { Login } from "./pages/Login";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}
