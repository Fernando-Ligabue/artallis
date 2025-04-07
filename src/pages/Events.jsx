import ContentEvents from '@/components/events/ContentEvents'
import TitleEvents from '@/components/events/TitleEvents'
import MainSection from '@/Layout/MainSection'
import { Helmet } from 'react-helmet'

const News = () => {
  return (
    <>
      <Helmet>
        <title>Eventos | Conservatório Artallis </title>
        <meta name="description" content="Conservatório Artallis | Aprende" />
      </Helmet>
      <MainSection>
        <TitleEvents title='Liga-te' subtitle='Eventos' />
        <ContentEvents />
      </MainSection>
    </>
  )
}

export default News