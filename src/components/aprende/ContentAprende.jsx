import { useState } from 'react';
import { learnSections, gallerySlideImages } from '@/lib/constants';
import SliderImages from '../SliderImages';
import ButtonContact from '../ButtonContact';

const ContentAprende = () => {
    const [isActive, setIsActive] = useState(1);
    const [activeColor, setActiveColor] = useState(null);

    const handleSelect = (id) => {
        setIsActive(id);
        setActiveColor(id);
    };

    return (
        <div className="relative w-full flex flex-col gap-16 py-20">
            <div className="flex flex-col sm:flex-row items-start justify-between w-full gap-8 sm:gap-32">
                <div className="w-max flex flex-col">
                    {learnSections.map((section) => (
                        <div
                            key={section.id}
                            className={`flex items-center justify-between w-full max-w-md text-left ${isActive === section.id ? "selected" : ""}`}
                            onClick={() => handleSelect(section.id)}
                        >
                            <h2
                                className={`text-6xl text-black ${activeColor === section.id ? "!text-artMidBlue-50" : ""} font-semibold font-barlow mb-12 cursor-pointer`}
                            >
                                {section.title}
                            </h2>
                        </div>
                    ))}
                </div>
                <div className="w-full max-w-4xl">
                    <img
                        className="w-full bg-cover bg-center bg-no-repeat object-cover rounded-lg h-full max-h-96"
                        src={isActive === 0 ? "" : learnSections[isActive - 1].img}
                    />
                </div>
            </div>

            {isActive && (
                <div className="flex flex-col items-start justify-center gap-8">
                    {learnSections[isActive - 1].info && (
                        <p className='font-barlow font-normal text-base text-justify'>{learnSections[isActive - 1].info}</p>
                    )}
                    <div>
                        {learnSections[isActive - 1].list_title && (
                            <p className='font-barlow font-medium text-base'>{learnSections[isActive - 1].list_title}</p>
                        )}
                        {learnSections[isActive - 1].list && (
                            <ul>
                                {learnSections[isActive - 1].list.map((elem, index) => (
                                    <li className="font-barlow font-normal text-base list-disc marker:text-artLime-50 ml-6" key={index}>
                                        {elem}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            )}
            <SliderImages images={gallerySlideImages} />
            <div
                className={`fixed top-36 lg:top-40 right-2 transition-opacity duration-300`} >
                <ButtonContact />
            </div>
        </div>
    );
}

export default ContentAprende;
