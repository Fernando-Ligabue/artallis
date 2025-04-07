import TitleSectionsHome from "./TitleSections";
import { aprendeHome } from '@/lib/constants'
import ScrollingText from "./ScrollingText";

const Aprende = () => {
  return (
    <div className="main-container flex-col-center space-y-6 p-4 mb-16 overflow-hidden">
      <TitleSectionsHome title={"Aprende"} subtitle={"Aulas mais populares"} />
      <ScrollingText imgsrc={aprendeHome} imgalt="Ligate Conservatório Artallis"/>
    </div>
  );
};

export default Aprende;
