import { Route, Routes } from "react-router";

import MainLayout from "../layouts/MainLayout";
import About from "../pages/about";
import Home from "../pages/home";

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
            </Route>
        </Routes>
    );
}