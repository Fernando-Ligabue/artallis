import TitleMission from '@/components/Mission/TitleMission'
import MainSection from '@/Layout/MainSection'
import { misisonText } from '@/lib/constants'
import { Helmet } from 'react-helmet'

const Mission = () => {
  return (
    <>
      <Helmet>
        <title>Missão | Conservatório Artallis </title>
        <meta name="description" content="Conservatório Artallis | Aprende" />
      </Helmet>
      <MainSection>
        <TitleMission title='Viencia' subtitle='Missão' />
        <section className='flex-col-center py-10'>
          <p className='text-4xl text-center text-artMidBlue-50 font-barlow font-medium'>
            {misisonText}
          </p>
        </section>
      </MainSection>
    </>
  )
}

export default Mission