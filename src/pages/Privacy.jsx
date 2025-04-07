import TitlePolicies from '@/components/Policies/TitlePolicies'
import MainSection from '@/Layout/MainSection'
import { Helmet } from 'react-helmet'

const Privacy = () => {
  return (
    <>
    <Helmet>
      <title>Política de Privacidade e Cookies | Conservatório Artallis </title>
      <meta name="description" content="Conservatório Artallis | Política de Privacidade e Cookies" />
    </Helmet>
    <MainSection>
      <TitlePolicies title='Nossas Políticas' subtitle='Políticas de Privacidade e Cookies' />
    </MainSection>
  </>
  )
}

export default Privacy