import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Philosophy from '../pages/Philosophy'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/filosofia" element={<Philosophy />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/contacto" element={<Contact />} />
        </Routes>
    )
}