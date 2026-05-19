import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./index.css";

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleRegister = (e) => {

        e.preventDefault();

        if(name && email && password){

            // Store user data
            const userData = {
                name,
                email,
                password
            };

            localStorage.setItem("user", JSON.stringify(userData));

            alert("Registration Successful");

            navigate("/login");
        }
        else{
            alert("Please fill all fields");
        }
    }

    return(

        <div className="register-container">

            <form className="register-form" onSubmit={handleRegister}>

                <h1>Register</h1>

                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />

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
                    Register
                </button>

                <p>
                    Already have an account ?
                    <Link to="/login"> Login</Link>
                </p>

            </form>

        </div>
    )
}

export default Register;