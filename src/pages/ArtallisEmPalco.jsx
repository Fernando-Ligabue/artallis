import ContentArtallisEmpalco from '@/components/artallisempalco/ContentArtallisEmpalco'
import TitleArtallisEmPalco from '@/components/artallisempalco/TitleArtallisEmPalco'
import MainSection from '@/Layout/MainSection'

import { introText } from '@/lib/constants'
import { Helmet } from 'react-helmet'

const ArtallisEmPalco = () => {
  return (
    <>
      <Helmet>
        <title>Artallis em Palco | Conservatório Artallis </title>
        <meta name="description" content="Conservatório Artallis | Artallis em Palco" />
      </Helmet>
      <MainSection className="space-y-10">
        <TitleArtallisEmPalco title="Vivencia" subtitle="Artallis em Palco" />
        <h3 className='mt-3 text-2xl md:text-4xl text-center text-artMidBlue-50 font-barlow font-bold'>{introText}</h3>
        <ContentArtallisEmpalco />
      </MainSection>
    </>
  )
}

export default ArtallisEmPalco