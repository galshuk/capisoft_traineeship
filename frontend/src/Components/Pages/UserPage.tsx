import { Link } from 'react-router-dom'
export default UserPage;
import { useAuth } from '../Utility/AuthContext.tsx';

function UserPage() {

    const { logout } = useAuth();

    function handleLogOut() {
        logout();
    }

    return (
        <div>
            <h1> Welcome to the Users Page </h1>

            <nav>
                <Link to="/">Home</Link> <br />
                <Link to="/login">Login</Link> <br />
                <Link to="/dashboard">Dashboard</Link> <br />
            </nav>

            <input onClick = {handleLogOut} type="button" id="log_out" value="Log out" />
        </div>
    );
}
