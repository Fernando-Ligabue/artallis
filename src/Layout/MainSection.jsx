import PropTypes from 'prop-types'

const MainSection = ({ children, className }) => {
  return (
    <section className={`flex-col-center max-w-container mx-auto mt-40 p-4 ${className}`}>
        { children }
    </section>
  )
}

MainSection.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
}

export default MainSection