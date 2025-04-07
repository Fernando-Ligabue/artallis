import ContentAprende from '@/components/aprende/ContentAprende'
import TitleAprende from '@/components/aprende/TitleAprende'
import MainSection from '@/Layout/MainSection'
import { Helmet } from 'react-helmet'

const Aprende = () => {
  return (
    <>
      <Helmet>
        <title>Aprende | Conservatório Artallis </title>
        <meta name="description" content="Conservatório Artallis | Aprende" />
      </Helmet>
      <MainSection>
        <TitleAprende title='Aprende' subtitle='Aulas mais populares' />
        <ContentAprende />
      </MainSection>
    </>
  )
}

export default Aprende