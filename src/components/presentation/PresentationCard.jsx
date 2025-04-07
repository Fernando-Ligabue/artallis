import PropTypes from 'prop-types';

const PresentationCard = ({ bg, image, title, content }) => {
    return (
        <div 
            className={`section ${bg} px-8 sm:px-14 py-14 sm:py-24 rounded-md`} 
            style={image ? { backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '550px' } : {}}
        >
            {!image && (
                <div className="content space-y-14">
                    <h2 className='font-barlow font-bold text-4xl sm:text-5xl'>{title}</h2>
                    <p className='font-barlow font-medium'>{content}</p>
                </div>
            )}
        </div>
    );
}

PresentationCard.propTypes = {
    bg: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string
}

export default PresentationCard;
