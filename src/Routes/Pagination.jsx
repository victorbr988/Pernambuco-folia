import { Routes, Route } from "react-router-dom";
import { Bezerros } from "../pages/Bezerros";
import { Caruaru } from "../pages/Caruaru";
import { Gravata } from "../pages/Gravata";
import { Home } from "../pages/Home";
import { Pesqueira } from "../pages/Pesqueira";
import { Garanhuns } from "../pages/Garanhuns";

export function Pagination() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/caruaru" element={<Caruaru />} />
      <Route path="/bezerros" element={<Bezerros />} />
      <Route path="/pesqueira" element={<Pesqueira />} />
      <Route path="/gravata" element={<Gravata />} />
      <Route path="/garanhuns" element={<Garanhuns />} />
    </Routes>
  )
}