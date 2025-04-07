import PresentationCard from '@/components/presentation/PresentationCard'
import TitlePresentation from '@/components/presentation/TitlePresentation'
import MainSection from '@/Layout/MainSection'
import { presentationPage } from '@/lib/constants'
import { Helmet } from 'react-helmet'

const Presentation = () => {
    return (
        <>
            <Helmet>
                <title>Apresentação | Conservatório Artallis </title>
                <meta name="description" content="Conservatório Artallis | Aprende" />
                    </Helmet>
            <MainSection>
                <TitlePresentation title='APRESENTANDO O CONSERVATÓRIO ARTALLIS:' subtitle='UM REFÚGIO PARA A EXPRESSÃO ARTÍSTICA' />
                <section className='flex flex-col items-center justify-center gap-32 py-28'>
                    <div className='grid grid-col-1 sm:grid-cols-2 place-items-stretch gap-10'>
                        {presentationPage.map((item) => (
                            <PresentationCard key={item.id} bg={item.bg} image={item.img} title={item.title} content={item.content} />
                        ))}
                    </div>
                </section>
            </MainSection>
        </>
    )
}

export default Presentation