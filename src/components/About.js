import { Link } from "react-router-dom"; // 使用 Link 是为了切换路由时避免页面的刷新

const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      <Link to="/">Go Back</Link>
    </div>
  )
}

export default About;