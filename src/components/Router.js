import { Routes, Route } from "react-router-dom";
import Header from "./layout/Header";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Header />} />
        </Routes>
    )
}