import { ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const FloatingButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="relative z-30">
            {isVisible && (
                <button
                    onClick={handleClick}
                    className="fixed bottom-4 right-4 p-1 bg-artLime-50 text-white rounded-full border border-x-artLightBlue-50 shadow-lg hover:bg-artYellow-50 transition-colors"
                >
                    <ChevronUp size={24} />
                </button>
            )}
        </div>
    );
};

export default FloatingButton;
