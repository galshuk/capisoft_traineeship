import { Link } from 'react-router-dom'
export default Dashboard;
import { useAuth } from '../Utility/AuthContext.tsx';

function Dashboard() {
    const { logout } = useAuth();

        function handleLogOut() {
            logout();
        }

    return (
        <div>
            <h1> Welcome to the Dashboard </h1>

            <nav>
                <Link to="/">Home</Link> <br />
                <Link to="/login">Login</Link> <br />
                <Link to="/userpage">User Page</Link> <br />
            </nav>

            <input onClick = {handleLogOut} type="button" id="log_out" value="Log out" />
        </div>
    );
}
