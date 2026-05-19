import { Link, useNavigate } from "react-router-dom";
import "./index.css";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {

    const navigate = useNavigate();



    /* LOGOUT */

    const handleLogout = () => {

        localStorage.removeItem("login");

        setIsLoggedIn(false);

        navigate("/");
    };



    return(

        <nav className="navbar">

            <h2 className="logo">

                Job Portal

            </h2>



            <ul className="nav-links">

                {/* HOME */}

                <li>

                    <Link to="/">

                        Home

                    </Link>

                </li>



                {/* CONTACT */}

                <li>

                    <Link to="/contact">

                        Contact

                    </Link>

                </li>



                {/* BEFORE LOGIN */}

                {

                    !isLoggedIn && (

                        <>

                            <li>

                                <Link to="/register">

                                    Register

                                </Link>

                            </li>



                            <li>

                                <Link to="/login">

                                    Login

                                </Link>

                            </li>

                        </>

                    )

                }



                {/* AFTER LOGIN */}

                {

                    isLoggedIn && (

                        <>

                            <li>

                                <Link to="/jobs">

                                    Jobs

                                </Link>

                            </li>



                            <li>

                                <Link to="/profile">

                                    Profile

                                </Link>

                            </li>



                            <li>

                                <button
                                    className="logout-btn"
                                    onClick={handleLogout}
                                >

                                    Logout

                                </button>

                            </li>

                        </>

                    )

                }

            </ul>

        </nav>
    )
}

export default Navbar;