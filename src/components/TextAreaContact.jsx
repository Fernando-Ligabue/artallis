import PropTypes from 'prop-types'

const TextAreaContact = ({ id, name, label, htmlFor, value, onChange }) => {
    return (
        <div className="w-full relative">
            <textarea
                required
                className="peer w-full bg-custom outline-none px-4 py-2 text-md text-artMidBlue-50 rounded-md border border-artMidBlue-50 resize-none focus:ring-1 focus:ring-artMidBlue-50 focus:shadow-md"
                id={id}
                name={name}
                rows={3}
                value={value}
                onChange={onChange}
            />
            <label
                className="absolute top-1/4 translate-y-[-50%] bg-custom left-2 px-2 rounded-md peer-focus:top-0 peer-focus:left-3 font-light text-sm text-artMidBlue-50 peer-focus:text-[10px]  peer-focus:text-white peer-focus:bg-artMidBlue-50 peer-valid:-top-0 peer-valid:left-3 peer-valid:text-[10px] peer-valid:text-white peer-valid:bg-artMidBlue-50 duration-150"
                htmlFor={htmlFor}
            >
                {label}</label>
        </div>
    )
}

TextAreaContact.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    htmlFor: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func

}
export default TextAreaContact
