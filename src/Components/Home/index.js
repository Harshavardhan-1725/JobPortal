import "./index.css";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    return(

        <div className="home-container">

            {/* WELCOME SECTION */}

            <div className="welcome-box">

                <h1>Find Your Dream Job</h1>

                <p className="main-text">
                    Explore jobs from top companies and build your career.
                </p>

                <p className="sub-text">
                    Search jobs based on your skills, experience and interests.
                    Start your professional journey today.
                </p>



                <button
                    onClick={() => navigate("/jobs")}
                >
                    Explore Jobs
                </button>

            </div>



            {/* JOB SECTION */}

            <div className="job-section">

                <h2>Popular Categories</h2>

                <div className="job-cards">

                    <div className="job-card">

                        <h3>Frontend Developer</h3>

                        <p>
                            React, HTML, CSS and JavaScript opportunities.
                        </p>

                    </div>



                    <div className="job-card">

                        <h3>Backend Developer</h3>

                        <p>
                            Node.js, Java and Python backend roles.
                        </p>

                    </div>



                    <div className="job-card">

                        <h3>Data Science</h3>

                        <p>
                            AI, Machine Learning and Analytics jobs.
                        </p>

                    </div>



                    <div className="job-card">

                        <h3>UI / UX Design</h3>

                        <p>
                            Design modern and user-friendly applications.
                        </p>

                    </div>



                    <div className="job-card">

                        <h3>Remote Jobs</h3>

                        <p>
                            Work-from-home opportunities from top companies.
                        </p>

                    </div>



                    <div className="job-card">

                        <h3>Cloud & DevOps</h3>

                        <p>
                            AWS, Docker and Kubernetes related jobs.
                        </p>

                    </div>

                </div>

            </div>



            {/* WHY CHOOSE US */}

            <div className="why-section">

                <h2>Why Choose Us ?</h2>

                <div className="why-cards">

                    <div className="why-card">

                        <h3>Easy Job Search</h3>

                        <p>
                            Find jobs quickly using simple search and filters.
                        </p>

                    </div>



                    <div className="why-card">

                        <h3>Trusted Companies</h3>

                        <p>
                            Apply for jobs from verified and top companies.
                        </p>

                    </div>



                    <div className="why-card">

                        <h3>Career Growth</h3>

                        <p>
                            Build your profile and improve your career opportunities.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Home;