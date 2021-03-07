import { React} from 'react'
const Input = ({
  name,
  type,
  placeholder,
  onChange,
  className,
  value,
  error,
  children,
  label,
  min,
  max,
  ...props
}) => {
  
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={className}
        style={error && {border: 'solid 1px red'}}
        min= {min}
        max={max}
      />
      { error && <p>{ error }</p>}
    </div>
  )
}

Input.defaultProps = {
  type: "text",
  className: ""
}
// Input.propTypes = {
//   name: PropTypes.string.isRequired,
//   type: PropTypes.string,
//   type: PropTypes.oneOf(['text', 'number', 'password', 'checkbox']),
//   className: PropTypes.string,
//   value: PropTypes.any,
//   onChange: PropTypes.func.isRequired
// }
export default Input