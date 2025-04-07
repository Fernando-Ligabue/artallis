import PropTypes from 'prop-types'

const TitleJuntate = ({title}) => {
    return (
        <div className="flex-col-center space-y-4">
            <h1 className="font-barlow font-normal uppercase">{title}</h1>
        </div>
    )
}

TitleJuntate.propTypes = {
    title: PropTypes.string,
}

export default TitleJuntate