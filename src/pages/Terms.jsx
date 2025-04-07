import TitlePolicies from '@/components/Policies/TitlePolicies'
import MainSection from '@/Layout/MainSection'
import { Helmet } from 'react-helmet'

const Terms = () => {
  return (
    <>
    <Helmet>
      <title>Política de Privacidade e Cookies | Conservatório Artallis </title>
      <meta name="description" content="Conservatório Artallis | Política de Privacidade e Cookies" />
    </Helmet>
    <MainSection>
      <TitlePolicies title='Nossos Termos' subtitle='Termos e Condições' />
    </MainSection>
  </>
  )
}

export default Terms