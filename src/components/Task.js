import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
      <h3>
        {task.text}
        <FaTimes color='red'
          style={{ cursor: 'pointer' }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <span>{task.day}</span>
    </div>
  )
}

Task.propTypes = {
  task: PropTypes.object
}

export default Task