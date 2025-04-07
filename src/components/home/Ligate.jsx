import { Link } from "react-router-dom";
import TitleSectionsHome from "./TitleSections";
import { ligateHome } from '@/lib/constants'

const Ligate = () => {
    return (
        <div className="main-container flex-col-center space-y-6 p-4 my-14 overflow-hidden">
            <TitleSectionsHome title={"Liga-te"} subtitle={"Veja o que nossos alunos podem fazer"} />
            <img src={ligateHome} alt="Liga-te Conservatório Artallis" className="object-cover rounded-md w-full max-h-[420px]" />
            <Link to="/noticias" className="rounded-full px-8 py-3 bg-artYellow-50 hover:bg-artYellow-50 hover:shadow-md text-black font-barlow font-semibold text-md transition-all ease-in-out duration-300">Descobre Mais</Link>
        </div>
    );
};

export default Ligate;
