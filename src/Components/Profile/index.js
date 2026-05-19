import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

const Profile = () => {

    const [profile, setProfile] = useState({

        username: "",
        firstname: "",
        lastname: "",
        email: "",
        skills: "React, JavaScript, Python, Django"

    });

    const [edit, setEdit] = useState(false);



    /* FETCH PROFILE */

    useEffect(() => {

        const fetchProfile = async () => {

            try {

                const res = await axios.get(
                    "https://job-application-jj7o.onrender.com/api/profile/"
                );

                console.log(res.data);

                setProfile({

                    username: res.data.username || "",
                    firstname: res.data.firstname || "",
                    lastname: res.data.lastname || "",
                    email: res.data.email || "",
                    skills: res.data.skills || "React, JavaScript, Python, Django"

                });

            }

            catch (err) {

                console.log(
                    "Profile Fetch Error:",
                    err.response?.data || err.message
                );

            }

        };

        fetchProfile();

    }, []);



    /* HANDLE CHANGE */

    const handleChange = (e) => {

        setProfile({

            ...profile,

            [e.target.name]: e.target.value

        });

    };



    /* UPDATE PROFILE */

    const handleUpdate = async () => {

        try {

            const updatedData = {

                username: profile.username,
                firstname: profile.firstname,
                lastname: profile.lastname,
                email: profile.email

            };

            const res = await axios.patch(

                "https://job-application-jj7o.onrender.com/api/profile/",

                updatedData,

                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }

            );

            console.log("Updated:", res.data);

            alert("Profile Updated Successfully");

            setEdit(false);

        }

        catch (err) {

            console.log(
                "UPDATE ERROR:",
                err.response?.data || err.message
            );

            alert("Unable to Update Profile");

        }

    };



    return (

        <div className="profile-container">

            <div className="profile-card">



                {/* LEFT SECTION */}

                <div className="profile-top">

                    <div className="profile-image">

                        {

                            profile.username

                            ? profile.username.charAt(0).toUpperCase()

                            : "U"

                        }

                    </div>



                    <div className="profile-info">

                        <h1>

                            {
                                profile.firstname || profile.lastname

                                ? `${profile.firstname} ${profile.lastname}`

                                : "Your Name"
                            }

                        </h1>



                        <p>

                            {
                                profile.email

                                ? profile.email

                                : "No Email Added"
                            }

                        </p>



                        <span>

                            @
                            {
                                profile.username

                                ? profile.username

                                : "username"
                            }

                        </span>

                    </div>

                </div>



                {/* RIGHT SECTION */}

                <div className="profile-details">



                    <div className="profile-field">

                        <label>Username</label>

                        <input
                            type="text"
                            name="username"
                            value={profile.username}
                            onChange={handleChange}
                            disabled={!edit}
                        />

                    </div>



                    <div className="profile-field">

                        <label>First Name</label>

                        <input
                            type="text"
                            name="firstname"
                            value={profile.firstname}
                            onChange={handleChange}
                            disabled={!edit}
                        />

                    </div>



                    <div className="profile-field">

                        <label>Last Name</label>

                        <input
                            type="text"
                            name="lastname"
                            value={profile.lastname}
                            onChange={handleChange}
                            disabled={!edit}
                        />

                    </div>



                    <div className="profile-field">

                        <label>Email</label>

                        <input
                            type="email"
                            name="email"
                            value={profile.email}
                            onChange={handleChange}
                            disabled={!edit}
                        />

                    </div>



                    <div className="profile-field">

                        <label>Skills</label>

                        <textarea
                            name="skills"
                            value={profile.skills}
                            onChange={handleChange}
                            disabled={!edit}
                        />

                    </div>



                    {/* BUTTON */}

                    <div className="button-group">

                        {

                            edit ? (

                                <button onClick={handleUpdate}>

                                    Save Changes

                                </button>

                            ) : (

                                <button onClick={() => setEdit(true)}>

                                    Edit Profile

                                </button>

                            )

                        }

                    </div>

                </div>

            </div>

        </div>

    );

};

export default Profile;