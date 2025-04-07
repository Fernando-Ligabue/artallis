import PropTypes from 'prop-types'

const TitleHistory = ({title}) => {
    return (
        <div className="flex-col-center space-y-4">
            <h1 className="text-4xl sm:text-6xl text-artMidBlue-50 max-w-5xl font-barlow font-bold text-center uppercase">{title}</h1>
        </div>
    )
}

TitleHistory.propTypes = {
    title: PropTypes.string,
}

export default TitleHistory