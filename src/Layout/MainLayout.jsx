/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import BouncingBalls from "./BouncingBalls";
import Header from "./Header";
import Footer from "./Footer";
import FloatingButton from "@/Layout/FloatingButton";

const MainLayout = ({ children }) => {
  const location = useLocation();

  const logocolor = location.pathname === "/" ? "white" : "black";
  const isMission = location.pathname === "/missao";

  return (
    <main className="w-full max-w-full overflow-hidden">
      <div className="z-0">
        <BouncingBalls />
        <BouncingBalls />
      </div>
      <Header logocolor={logocolor} />
      <div className={`relative z-20 mb-10 ${isMission ? "h-auto" : "h-auto min-h-dvh"}`}>
        <main>
          {children}
        </main>
      </div>

      <Footer />
      <FloatingButton />
    </main>
  );
};

export default MainLayout;
