import Hero from "../components/Hero";
import Links from "../components/Links";
import Categories from "../components/Categories";
import Tracking from "../components/Tracking";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import WorkingProgress from "../components/WorkingProgress";

export default function Home() {
    return (
        <>
            <Hero />
            <Links />
            <Categories />
            <Tracking />
            <Partners />
            <WorkingProgress />
            <Footer />
        </>
    );
}