import PropTypes from 'prop-types'

const TitleSectionsHome = ({title, subtitle}) => {
    return (
        <div className="flex-col-center space-y-4">
            <h6 className="font-barlow font-normal uppercase">{title}</h6>
            <h2 className="text-3xl font-barlow font-bold text-center">{subtitle}</h2>
        </div>
    )
}

TitleSectionsHome.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default TitleSectionsHome