import { useState } from "react";
import { useAuth } from '../Utility/AuthContext.tsx';
export default Login;

function Login() {
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e: React.SubmitEvent) {
        e.preventDefault();
        login(email, password);
    }

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <label htmlFor="user-email">E-mail:</label>
                <br />
                <input type="text" name="user-email" size={10} />
                <br />
                <br />
                <label htmlFor="password">Password:</label>
                <br />
                <input type="text" name="password" size={10} />
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>

            <input type="button" id="sign_up" value="Sign up" />
        </div>
    );
}
