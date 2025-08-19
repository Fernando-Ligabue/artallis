import { useState } from 'react'
import SliderImages from '../SliderImages';
import { gallerySlideImages, juntateSections } from '@/lib/constants';
import ButtonApply from '../ButtonApply';

const ContentJuntate = () => {
    const [isActive, setIsActive] = useState(1);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleSelect = (id) => {
        setIsActive(id);
    };

    return (
        <div className="w-full py-20">
            <div className="flex flex-col items-center justify-center gap-16">
                <div className="flex flex-col gap-8 sm:flex-row items-start justify-center w-full p-8">
                    <div className="flex flex-col items-start justify-center w-full gap-8">
                        {juntateSections.map((section) => (
                            <div
                                key={section.id}
                                className={`flex items-center justify-between w-full text-left ${isActive === section.id ? "text-artLime-50  font-barlow font-bold" : ""
                                    }`}
                                onClick={() => handleSelect(section.id)}
                            >
                                <h2 className='text-5xl lg:text-6xl mb-5 cursor-pointer'>{section.title}</h2>
                            </div>
                        ))}
                    </div>

                    {isActive && (
                        <div className="flex flex-col items-center justify-end gap-8 w-full">
                            {juntateSections[isActive - 1].description.map((e, index) => (
                                <p className="font-medium font-barlow text-base text-justify" key={index}>{e}</p>
                            ))}
                            <div className={`transition-opacity duration-300`}>
                                <ButtonApply
                                    isPopupOpen={isPopupOpen}
                                    setIsPopupOpen={setIsPopupOpen}
                                />
                            </div>
                        </div>
                    )}
                </div>

                {!isPopupOpen && isActive !== 1 && (
                    <SliderImages images={gallerySlideImages} />
                )}
            </div>
        </div>
    );
};

export default ContentJuntate;
