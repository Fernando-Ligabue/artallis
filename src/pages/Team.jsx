import GridTeam from '@/components/team/GridTeam'
import ModalTeam from '@/components/team/ModalTeam'
import TitleTeam from '@/components/team/TitleTeam'
import MainSection from '@/Layout/MainSection'
import { Helmet } from 'react-helmet'

const Team = () => {
  return (
    <>
      <Helmet>
        <title>Equipa Artallis | Conservatório Artallis </title>
        <meta name="description" content="Conservatório Artallis | Aprende" />
      </Helmet>
      <MainSection>
        <TitleTeam title='Junte-se' subtitle='Conheça a nossa Equipa' />
        <GridTeam />
        <ModalTeam />
      </MainSection>
    </>
  )
}

export default Team