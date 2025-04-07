import MainSection from '@/Layout/MainSection'
import { organization } from '@/lib/constants';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

const OrganizationalStructure = () => {
    const [rotation, setRotation] = useState(0);
    const circle = document.querySelector(".orgcircle");

    const disableScroll = () => {
        circle.style.overflow = "hidden";
    };

    const enableScroll = () => {
        circle.style.overflow = "auto";
    };

    const handleWheel = (event) => {
        setRotation((prevRotation) => prevRotation + event.deltaY * 0.2);
    };


    return (
        <>
            <Helmet>
                <title>Estrutura Organizacional | Conservatório Artallis </title>
                <meta name="description" content="Conservatório Artallis | Aprende" />
                    </Helmet>
            <MainSection>
                <div className='w-full space-y-10 flex-col-center mb-10'>
                    <div className='w-full'>
                        <h1 className='text-3xl sm:text-4xl font-barlow font-bold uppercase'>Estrutura <br />Organizacional</h1>
                    </div>

                    <img
                        className="orgcircle w-full max-w-2xl object-cover object-center"
                        src={organization}
                        alt="Estrutura Organizacional"
                        style={{ transform: `rotate(${rotation}deg)` }}
                        onWheel={handleWheel}
                        onMouseEnter={disableScroll}
                        onMouseLeave={enableScroll}
                    />
                </div>
            </MainSection>
        </>
    )
}

export default OrganizationalStructure