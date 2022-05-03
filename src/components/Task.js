import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa';

const handleClick = () => {
  console.log('delete item')
}

const Task = ({ task }) => {
  return (
    <div className="task">
      <h3>{task.text} <FaTimes color='red' style={{ cursor: 'pointer' }} /></h3>
      <span>{task.day}</span>
    </div>
  )
}

Task.propTypes = {
  task: PropTypes.object
}

export default Task