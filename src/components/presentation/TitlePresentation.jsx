import PropTypes from 'prop-types'

const TitlePresentation = ({title, subtitle}) => {
    return (
        <div className="flex-col-center space-y-4">
            <h1 className="text-4xl sm:text-6xl text-artMidBlue-50 max-w-3xl font-barlow font-bold text-center uppercase">{title}</h1>
            <h6 className="text-3xl text-artMidBlue-50 font-barlow font-normal text-center uppercase">{subtitle}</h6>
        </div>
    )
}

TitlePresentation.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default TitlePresentation