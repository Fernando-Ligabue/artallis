import ContentAgenda from '@/components/agenda/ContentAgenda'
import TitleAgenda from '@/components/agenda/TitleAgenda'
import MainSection from '@/Layout/MainSection'
import { Helmet } from 'react-helmet'

const Schedule = () => {
  return (
    <>
      <Helmet>
        <title>Agenda | Conservatório Artallis </title>
        <meta name="description" content="Conservatório Artallis | Aprende" />
      </Helmet>
      <MainSection>
        <TitleAgenda title='Liga-te' subtitle='Agenda' />
        <ContentAgenda />
      </MainSection>
    </>
  )
}

export default Schedule