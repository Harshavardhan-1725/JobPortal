import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./index.css";

const Login = ({ setIsLoggedIn }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = (e) => {

        e.preventDefault();

        // Get stored user
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if(!storedUser){
            alert("No user found. Please register first.");
            return;
        }

        // Check credentials
        if(
            email === storedUser.email &&
            password === storedUser.password
        ){

            localStorage.setItem("login", "true");

            setIsLoggedIn(true);

            navigate("/home");
        }
        else{

            alert("Invalid Email or Password");
        }
    }

    return(

        <div className="login-container">

            <form className="login-form" onSubmit={handleLogin}>

                <h1>Login</h1>

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />

                <button type="submit">
                    Login
                </button>

                <p>
                    Don't have an account ?
                    <Link to="/register"> Register</Link>
                </p>

            </form>

        </div>
    )
}

export default Login;