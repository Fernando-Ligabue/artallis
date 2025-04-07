import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import CustomArrow from '../CustomArrow';

const SliderCommunity = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(3);
    const totalSlides = slides.length;

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 869) {
                setSlidesToShow(3); // Desktop
            } else if (window.innerWidth >= 540) {
                setSlidesToShow(2); // Tablet
            } else {
                setSlidesToShow(1); // Mobile
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const nextSlide = () => {
        if (currentIndex < totalSlides - slidesToShow) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="relative w-full">
            <div className="overflow-hidden">
                <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ 
                        transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
                        width: `${totalSlides * 100 / slidesToShow}%`
                    }}
                >
                    {slides.map((item, index) => (
                        <div
                            key={index}
                            style={{ 
                                width: `${100 / totalSlides}%`,
                                minHeight: '550px'
                            }}
                            className={`flex-shrink-0 bg-${item.customBg} p-6`}
                        >
                            <div className="flex flex-col items-start justify-between h-full min-h-[550px] p-4 lg:p-6">
                                <div className='h-full flex flex-col justify-between'>
                                    <div className='space-y-6'>
                                        <h4 className="text-3xl sm:text-4xl font-bold font-barlow text-white">{item.title}</h4>
                                        <p className='text-lg sm:text-xl font-light font-barlow text-white'>{item.description}</p>
                                    </div>
                                    <div className='flex justify-start items-center gap-0'>
                                        <CustomArrow color={item.iconcolor} />
                                        <CustomArrow color={item.iconcolor} />
                                    </div>
                                </div>
                                <div>
                                    <button style={{ color: item.iconcolor }}>
                                        {item.icon}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navegação */}
            <div className='w-full absolute -bottom-8 flex justify-center items-center gap-4'>
                <button
                    onClick={prevSlide}
                    className={`bg-artLime-50 p-2 rounded-full flex items-center justify-center ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={currentIndex === 0}
                >
                </button>
                                
                <button
                    onClick={nextSlide}
                    className={`bg-artLime-50 p-2 rounded-full flex items-center justify-center ${currentIndex >= totalSlides - slidesToShow ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={currentIndex >= totalSlides - slidesToShow}
                >
                </button>
            </div>
        </div>
    );
};

SliderCommunity.propTypes = {
    slides: PropTypes.array.isRequired
}

export default SliderCommunity;