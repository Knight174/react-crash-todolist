import PropTypes from 'prop-types'

const Button = ({ color, text, toggleAddTask }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className={`btn ${text === 'Close' ? 'close' : ''}`}
      onClick={() => toggleAddTask()}
    >
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