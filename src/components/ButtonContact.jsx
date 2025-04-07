import { useState } from 'react';
import { X, Send } from 'lucide-react';
import FormContact from './FormContact';

const ButtonContact = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className="flex gap-2 items-center justify-center w-full">
            <div className='flex gap-2 items-center justify-center w-full cursor-pointer bg-white rounded-md p-1.5' onClick={handleOpenPopup}>
                <button
                    className="p-3 bg-artMidBlue-50 rounded-full text-white hover:bg-artLightBlue-50 transition duration-200"
                >
                    <Send size={24} />
                </button>
                <span className='text-artMidBlue-50 text-lg font-barlow font-semibold hidden lg:block'>Enviar Mensagem</span>
            </div>

            {isPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10 p-2.5">
                    <div className="bg-artDarkBlue-50 rounded-lg w-full sm:max-w-[70%] xl:max-w-[40%] relative">
                        <X
                            size={28}
                            className="text-white absolute top-4 right-4 cursor-pointer"
                            onClick={handleClosePopup}
                        />
                        <div>
                            <FormContact onFormSubmitSuccess={handleClosePopup} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ButtonContact;
