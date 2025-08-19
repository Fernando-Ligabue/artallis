import LogoHeader from "@/components/brand/LogoHeader"
import { NavigationMenu } from "@/Layout/NavigationMenu";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();

    const textColor = location.pathname === "/" ? "white" : "black";

    const isHome = location.pathname === "/" ? "z-50" : "";

    return (
        <header className={`absolute top-0 left-0 w-full flex justify-between items-center p-2 ${isHome}`} style={{ color: textColor }}>
            <div className="main-container flex justify-between items-center gap-2 py-1 px-4 lg:px-0">
                <div className="w-44 p-1">
                    <LogoHeader/>
                </div>
                <div className="flex justify-end items-center gap-10 p-1">
                    <NavigationMenu />
                    <Button className="rounded-full px-14 py-6 bg-artYellow-50 hover:bg-artYellow-50 hover:shadow-md text-black font-barlow font-semibold text-md hidden lg:flex transition-all ease-in-out duration-300">Portal Alunos</Button>
                </div>
            </div>
        </header>
    )
}

export default Header