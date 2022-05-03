import PropTypes from 'prop-types'
import Button from './Button';

function Header({ title }) {
  const handleClick = (e) => {
    console.log('click', e)
  }

  return (
    <header className='header'>
      {/* <h1 style={{ color: 'red', backgroundColor: 'black' }}>{title}</h1> */}
      {/* <h1 style={headingStyle}>{title}</h1> */}

      <h1>{title}</h1>
      <Button color="green" text="Add" handleClick={handleClick} />
    </header>
  )
}

// prop 默认值
Header.defaultProps = {
  title: 'Task Tracker'
}

// prop 类型定义
Header.propTypes = {
  // title: PropTypes.string
  title: PropTypes.string.isRequired // 加 .isRequired 表示必填
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }

export default Header;

// 与 Vue 不同，React 是分开定义默认值和参数类型的。
// props: {
//   title: {
//     type: String, // 类型
//     default: 'Task Tracker', // 默认值
//     required: true // 是否属于必填项
//   }
// }