import HistoryContent from '@/components/history/HistoryContent'
import TitleHistory from '@/components/history/TitleHistory'
import MainSection from '@/Layout/MainSection'
import { historyImg1, historyImg2, historyTextInfo2, historyTextInfo3, historyTextInfo4 } from '@/lib/constants'
import { Helmet } from 'react-helmet'

const History = () => {
    return (
        <>
            <Helmet>
                <title>História | Conservatório Artallis </title>
                <meta name="description" content="Conservatório Artallis | Aprende" />
                    </Helmet>
            <MainSection>
                <TitleHistory title='DESCOBRINDO A HISTÓRIA DO CONSERVATÓRIO ARTALLIS:' />
                <section className='flex flex-col items-center justify-center gap-10 py-28'>
                    <div className='grid grid-col-1 lg:grid-cols-2 place-items-stretch gap-10'>
                        <div className='flex flex-col justify-center items-center gap-20 p-8'>
                            <img
                                src={historyImg1}
                                alt="Conservatório Artallis"
                                className='rounded-md min-h-96 max-h-96 w-full object-cover object-center'
                            />
                            <img
                                src={historyImg2}
                                alt="Conservatório Artallis"
                                className='rounded-md min-h-96 max-h-96 w-full object-cover object-top'
                            />
                        </div>
                        <HistoryContent />
                    </div>

                    <p className='font-barlow text-base text-black font-normal max-w-2xl text-center'>{historyTextInfo2}</p>
                    <h6 className='font-barlow text-3xl text-artMidBlue-50 font-bold max-w-xl text-center'>{historyTextInfo3}</h6>
                    <h4 className='font-barlow text-5xl text-artMidBlue-50 font-bold max-w-2xl text-center'>{historyTextInfo4}</h4>
                </section>
            </MainSection>
        </>
    )
}

export default History