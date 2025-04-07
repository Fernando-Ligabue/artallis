import PropTypes from 'prop-types'
  
const InputContact = ({id, name, type, label, htmlFor, value, onChange}) => {
    return (
        <div className="w-full relative">
            <input
                required
                className="peer w-full bg-custom outline-none px-4 py-2 text-md text-artMidBlue-50 rounded-md border border-artMidBlue-50 focus:ring-1 focus:ring-white focus:shadow-md"
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
            />
            <label
                className="absolute top-1/2 translate-y-[-50%] left-2 px-2 rounded-md peer-focus:top-0 peer-focus:left-3 font-light font-barlow text-sm text-artMidBlue-50  peer-focus:text-[10px] peer-focus:text-white peer-focus:bg-artMidBlue-50 peer-valid:-top-0 peer-valid:left-3 peer-valid:text-[10px]  peer-valid:text-white peer-valid:bg-artMidBlue-50  duration-150"
                htmlFor={htmlFor}
            >
                {label}</label>
        </div>
    )
}

InputContact.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    htmlFor: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
}

export default InputContact
