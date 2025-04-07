import ContentNews from '@/components/news/ContentNews'
import TitleNews from '@/components/news/TitleNews'
import MainSection from '@/Layout/MainSection'
import { Helmet } from 'react-helmet'

const News = () => {
  return (
    <>
      <Helmet>
        <title>Notícias | Conservatório Artallis </title>
        <meta name="description" content="Conservatório Artallis | Aprende" />
      </Helmet>
      <MainSection>
        <TitleNews title='Liga-te' subtitle='Notícias' />
        <ContentNews />
      </MainSection>
    </>
  )
}

export default News