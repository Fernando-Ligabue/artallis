import PropTypes from 'prop-types'

const ScrollingText = ({imgsrc, imgalt}) => {
    return (
        <div className="w-full relative overflow-hidden">
            <img src={imgsrc} alt={imgalt} className="object-cover rounded-md w-full max-h-[420px]" />
            <div className="flex flex-col py-6 text-center whitespace-nowrap text-4xl sm:text-7xl font-black text-artMidBlue-50 absolute top-0 right-4 space-y-14 sm:space-y-24 scrolling-text overflow-hidden">
                {/* <span>Artes Plásticas</span> */}
                <span>Música</span>
                <span>Teatro</span>
                <span>Dança</span>
            </div>
        </div>
    )
}

ScrollingText.propTypes = {
  imgsrc: PropTypes.string,
  imgalt: PropTypes.string
}


export default ScrollingText