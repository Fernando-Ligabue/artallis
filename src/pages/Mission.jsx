import TitleMission from '@/components/Mission/TitleMission'
import MainSection from '@/Layout/MainSection'
import { misisonText, missionImg } from '@/lib/constants'
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
        <section className='flex-col-center py-10 space-y-10'>
          <p className='text-4xl text-center text-artMidBlue-50 font-barlow font-medium'>
            {misisonText}
          </p>
          <img className="object-cover rounded-md w-full max-h-[420px]" src={missionImg} alt="Conservatório Artallis" />
        </section>
      </MainSection>
    </>
  )
}

export default Mission