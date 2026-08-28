import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import TopBar from "../components/Topbar";

export default function MainLayout() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main>
        <Outlet />
      </main>
    </>
  );
}