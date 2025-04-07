import { Link } from "react-router-dom";
import TitleSectionsHome from "./TitleSections";

const Juntate = () => {
    return (
        <div className="main-container flex-col-center space-y-6 p-4 my-14 overflow-hidden">
            <TitleSectionsHome title={"Junta-te"} subtitle={"Conheça a nossa Equipa"} />
            <Link to="equipa-artallis" className="rounded-full px-10 py-3 bg-artYellow-50 hover:bg-artYellow-50 hover:shadow-md text-black font-barlow font-semibold text-md transition-all ease-in-out duration-300">VER TODOS</Link>
        </div>
    );
};

export default Juntate;
