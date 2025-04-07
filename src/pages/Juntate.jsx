import ContentJuntate from '@/components/juntate/ContentJuntate'
import TitleJuntate from '@/components/juntate/TitleJuntate'
import MainSection from '@/Layout/MainSection'
import { Helmet } from 'react-helmet'

const Juntate = () => {
  return (
    <>
      <Helmet>
        <title>Junta-te | Conservatório Artallis </title>
        <meta name="description" content="Conservatório Artallis | Aprende" />
      </Helmet>
      <MainSection>
        <TitleJuntate title='Junta-te' />
        <ContentJuntate />
      </MainSection>
    </>
  )
}

export default Juntate