import { X } from 'lucide-react';
import FormApply from './FormApply';
import PropTypes from 'prop-types';

const ButtonApply = ({ isPopupOpen, setIsPopupOpen }) => {
    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className="flex gap-2 items-center justify-center w-full">
            <div
                className='flex gap-2 items-center justify-center w-full cursor-pointer bg-artYellow-50 rounded-md px-4 py-2'
                onClick={handleOpenPopup}
            >
                <span className='text-black text-lg font-barlow font-semibold'>Quero Fazer parte!</span>
            </div>

            {isPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-100 p-2.5">
                    <div className="bg-artDarkBlue-50 rounded-lg w-full sm:max-w-[70%] xl:max-w-[40%] relative">
                        <X
                            size={28}
                            className="text-white absolute top-4 right-4 cursor-pointer"
                            onClick={handleClosePopup}
                        />
                        <div>
                            <FormApply onFormSubmitSuccess={handleClosePopup} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

ButtonApply.propTypes = {
    isPopupOpen: PropTypes.func,
    setIsPopupOpen: PropTypes.func,
}

export default ButtonApply;
