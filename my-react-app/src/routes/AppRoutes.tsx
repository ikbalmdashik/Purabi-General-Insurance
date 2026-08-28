import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/about";
import Home from "../pages/home";
import Contact from "../pages/contact";
import Blogs from "../pages/blogs";
import NotFound from "./not-found";

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="*" element={<NotFound />} />
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="blogs" element={<Blogs />} />
            </Route>
        </Routes>
    );
}
