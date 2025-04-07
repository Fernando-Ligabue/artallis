import CommunityText from '@/components/comunidadeCal/CommunityText'
import TitleCommunity from '@/components/comunidadeCal/TitleArtallisEmPalco'
import SliderCommunity from '@/components/comunidadeCal/SliderCommunity'
import MainSection from '@/Layout/MainSection'
import { slideComContent } from '@/lib/constants'
import { Helmet } from 'react-helmet'

const Comunnity = () => {
  return (
    <>
      <Helmet>
        <title>Comunidade CAL | Conservatório Artallis </title>
        <meta name="description" content="Conservatório Artallis | Aprende" />
      </Helmet>
      <MainSection>
        <TitleCommunity title='Vivencia' subtitle='COMUNIDADE CAL' />
        <CommunityText />
        <SliderCommunity slides={slideComContent} />
      </MainSection>
    </>
  )
}

export default Comunnity