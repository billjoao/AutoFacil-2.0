import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { Cadastro } from "./pages/Cadastro";
import { Login } from "./pages/Login";
import { AutoHome } from "./pages/Auto/AutoHome";
import { AutoProdutos } from "./pages/Auto/AutoProdutos";
import AutoLayout from "./pages/Auto/AutoLayout";
import { AutoRastreamento } from "./pages/Auto/AutoRastreamento";
import { AutoDashboard } from "./pages/Auto/AutoDashboard";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar" element={<Cadastro />} />

        <Route path="/auto" element={<AutoLayout />}>
          <Route path="home" element={<AutoHome />} />
          <Route path="produtos" element={<AutoProdutos />} />
          <Route path="dashboard" element={<AutoDashboard />} />
          <Route path="rastramento" element={<AutoRastreamento />} />
        </Route>

      </Routes>
    </Router>
  );
}
