import PropTypes from 'prop-types'

const Button = ({ color, text, handleClick }) => {
  return (
    <button style={{ backgroundColor: color }} className='btn' onClick={handleClick}>
      {text}
    </button>
  )
}

Button.defaultProps = {
  color: 'green'
}

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  handleClick: PropTypes.func
}

export default Button