import PropTypes from 'prop-types'

const TitlePolicies = ({title, subtitle}) => {
    return (
        <div className="flex-col-center space-y-4">
            <h6 className="font-barlow font-normal uppercase">{title}</h6>
            <h1 className="text-5xl sm:text-6xl text-artMidBlue-50 font-barlow font-bold text-center uppercase">{subtitle}</h1>
        </div>
    )
}

TitlePolicies.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default TitlePolicies