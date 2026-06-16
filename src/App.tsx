import { Link } from 'react-router-dom'
import "./index.css";
import './App.css'


function App() {

  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link to="/login">Login</Link> <br />
        <Link to="/dashboard">Dashboard</Link> <br />
        <Link to="/userpage">User Page</Link> <br />
      </nav>
    </div>
  )
}

export default App
