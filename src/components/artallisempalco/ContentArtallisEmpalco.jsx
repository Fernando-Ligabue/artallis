import { contentArtallisEmPalco } from '@/lib/constants';
import { ArrowLeft, PlusCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const ContentArtallisEmpalco = () => {
    const [openModal, setOpenModal] = useState(false);
    const [selectedArea, setSelectedArea] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    const checkMobile = () => {
        if (window.innerWidth <= 469) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    useEffect(() => {
        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    const handleOpenModal = (area) => {
        setSelectedArea(area);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedArea(null);
    };

    return (
        <div className="grid w-full justify-center grid-cols-1 lg:grid-cols-2 gap-10">
            {contentArtallisEmPalco.map((area, index) => (
                <div className="relative flex justify-center items-center h-full w-full" key={index}>
                    <div
                        className="w-full h-full min-h-80 bg-cover bg-center bg-no-repeat rounded-lg"
                        style={{ backgroundImage: `url(${area.imageInstrument})` }}
                    >
                        <div className="relative flex items-center justify-between gap-16 w-full h-full p-14">
                            <h2 className='w-full max-w-56 text-3xl sm:text-4xl font-bold font-barlow text-white'>{area.instrument}</h2>
                            <PlusCircle
                                size={28}
                                onClick={() => handleOpenModal(area)}
                                className='text-white cursor-pointer'
                            />
                        </div>
                    </div>
                    {/* Modal para telas maiores (min 469px) */}
                    {openModal && selectedArea === area && !isMobile && (
                        <div className="absolute inset-0 w-full h-full min-h-80 flex flex-col justify-center items-center bg-white shadow-sm shadow-artDarkBlue-50/50 rounded-md p-4">
                            <div className="relative w-full text-center space-y-4">
                                <p className='text-sm sm:text-md text-center select-none'>{selectedArea.description}</p>
                                <span
                                    onClick={handleCloseModal}
                                    className='text-artDarkBlue-50 cursor-pointer w-full flex-center'
                                >
                                    <ArrowLeft size={24} /> Voltar
                                </span>
                            </div>
                        </div>
                    )}

                    {/* Modal para telas menores (abaixo de 469px) */}
                    {openModal && selectedArea === area && isMobile && (
                        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 p-4">
                            <div className="relative w-full max-w-4xl p-4 rounded-md shadow-lg bg-white">
                                <X
                                    size={20}
                                    onClick={handleCloseModal}
                                    className='text-artDarkBlue-50 cursor-pointer absolute right-2 top-1'
                                />
                                <p className="text-md">{selectedArea.description}</p>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ContentArtallisEmpalco;
