import GridProtocol from '@/components/protocol/GridProtocol'
import TitleProtocol from '@/components/protocol/TitleProtocol'
import MainSection from '@/Layout/MainSection'
import { Helmet } from 'react-helmet'

const Protocol = () => {
  return (
    <>
      <Helmet>
        <title>Protocolos e Parcerias | Conservatório Artallis </title>
        <meta name="description" content="Conservatório Artallis | Aprende" />
      </Helmet>
      <MainSection>
        <TitleProtocol title='Junta-te' subtitle='PROTOCOLOS E PARCERIAS' />
        <GridProtocol />
      </MainSection>
    </>
  )
}

export default Protocol