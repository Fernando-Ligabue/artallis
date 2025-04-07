import ProjectsArtallisPlus from "@/components/artallis+/ProjectsArtallisPlus"
import TitleArtallisPlus from "@/components/artallis+/TitleArtallisPlus"
import MainSection from "@/Layout/MainSection"
import { Helmet } from "react-helmet"

const ArtallisPlus = () => {
  return (
    <>
      <Helmet>
        <title>Artallis + | Conservatório Artallis </title>
        <meta name="description" content="Conservatório Artallis | Aprende" />
      </Helmet>
      <MainSection>
        <TitleArtallisPlus title="Junta-te a" subtitle="Mais projetos" />
        <ProjectsArtallisPlus />
      </MainSection>
    </>
  )
}

export default ArtallisPlus