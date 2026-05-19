import { useState } from "react";
import "./index.css";

const Jobs = () => {

    const jobsData = [

        {
            id: 1,
            role: "Frontend Developer",
            company: "Infosys",
            location: "Hyderabad",
            experience: "1 - 3 Years",
            salary: "6 LPA",
            type: "Full Time"
        },

        {
            id: 2,
            role: "Backend Developer",
            company: "TCS",
            location: "Bangalore",
            experience: "2 Years",
            salary: "7 LPA",
            type: "Full Time"
        },

        {
            id: 3,
            role: "UI / UX Designer",
            company: "Wipro",
            location: "Chennai",
            experience: "Fresher",
            salary: "4 LPA",
            type: "Internship"
        },

        {
            id: 4,
            role: "Software Developer",
            company: "Accenture",
            location: "Pune",
            experience: "1 Year",
            salary: "5 LPA",
            type: "Full Time"
        },

        {
            id: 5,
            role: "Data Scientist",
            company: "Google",
            location: "Hyderabad",
            experience: "3 Years",
            salary: "15 LPA",
            type: "Full Time"
        },

        {
            id: 6,
            role: "Cloud Engineer",
            company: "Amazon",
            location: "Bangalore",
            experience: "2 - 4 Years",
            salary: "12 LPA",
            type: "Remote"
        },

        {
            id: 7,
            role: "DevOps Engineer",
            company: "Capgemini",
            location: "Chennai",
            experience: "2 Years",
            salary: "8 LPA",
            type: "Full Time"
        },

        {
            id: 8,
            role: "Cyber Security Analyst",
            company: "Tech Mahindra",
            location: "Hyderabad",
            experience: "Fresher",
            salary: "5 LPA",
            type: "Part Time"
        },

        {
            id: 9,
            role: "Remote React Developer",
            company: "Zoho",
            location: "Remote",
            experience: "1 Year",
            salary: "9 LPA",
            type: "Remote"
        },

        {
            id: 10,
            role: "Java Developer",
            company: "HCL",
            location: "Pune",
            experience: "2 Years",
            salary: "6.5 LPA",
            type: "Full Time"
        },

        {
            id: 11,
            role: "Python Developer",
            company: "IBM",
            location: "Bangalore",
            experience: "1 - 2 Years",
            salary: "7.5 LPA",
            type: "Full Time"
        },

        {
            id: 12,
            role: "Full Stack Developer",
            company: "Deloitte",
            location: "Hyderabad",
            experience: "3 Years",
            salary: "10 LPA",
            type: "Remote"
        }

    ];


    const [roleFilter, setRoleFilter] = useState("All Jobs");
    const [locationFilter, setLocationFilter] = useState("All Locations");
    const [experienceFilter, setExperienceFilter] = useState("All Experience");
    const [salaryFilter, setSalaryFilter] = useState("All Salaries");
    const [typeFilter, setTypeFilter] = useState("All Types");


    const filteredJobs = jobsData.filter((job) => {

        const salaryValue = parseFloat(job.salary);

        return (

            (roleFilter === "All Jobs" || job.role === roleFilter) &&

            (locationFilter === "All Locations" || job.location === locationFilter) &&

            (experienceFilter === "All Experience" || job.experience.includes(experienceFilter)) &&

            (typeFilter === "All Types" || job.type === typeFilter) &&

            (

                salaryFilter === "All Salaries" ||

                (salaryFilter === "3 LPA - 5 LPA" &&
                    salaryValue >= 3 &&
                    salaryValue <= 5) ||

                (salaryFilter === "5 LPA - 8 LPA" &&
                    salaryValue > 5 &&
                    salaryValue <= 8) ||

                (salaryFilter === "8 LPA - 12 LPA" &&
                    salaryValue > 8 &&
                    salaryValue <= 12) ||

                (salaryFilter === "12+ LPA" &&
                    salaryValue > 12)

            )

        );
    });


    return (

        <div className="jobs-container">

            {/* FILTERS */}

            <div className="filters-section">

                <h2>Filters</h2>

                <div className="filter-box">

                    <label>Job Role</label>

                    <select
                        value={roleFilter}
                        onChange={(e) => setRoleFilter(e.target.value)}
                    >

                        <option>All Jobs</option>
                        <option>Frontend Developer</option>
                        <option>Backend Developer</option>
                        <option>UI / UX Designer</option>
                        <option>Software Developer</option>
                        <option>Data Scientist</option>
                        <option>Cloud Engineer</option>
                        <option>DevOps Engineer</option>
                        <option>Cyber Security Analyst</option>
                        <option>Remote React Developer</option>
                        <option>Java Developer</option>
                        <option>Python Developer</option>
                        <option>Full Stack Developer</option>

                    </select>

                </div>



                <div className="filter-box">

                    <label>Location</label>

                    <select
                        value={locationFilter}
                        onChange={(e) => setLocationFilter(e.target.value)}
                    >

                        <option>All Locations</option>
                        <option>Hyderabad</option>
                        <option>Bangalore</option>
                        <option>Chennai</option>
                        <option>Pune</option>
                        <option>Remote</option>

                    </select>

                </div>



                <div className="filter-box">

                    <label>Experience</label>

                    <select
                        value={experienceFilter}
                        onChange={(e) => setExperienceFilter(e.target.value)}
                    >

                        <option>All Experience</option>
                        <option>Fresher</option>
                        <option>1 Year</option>
                        <option>2 Years</option>
                        <option>3 Years</option>
                        <option>5+ Years</option>

                    </select>

                </div>



                <div className="filter-box">

                    <label>Salary</label>

                    <select
                        value={salaryFilter}
                        onChange={(e) => setSalaryFilter(e.target.value)}
                    >

                        <option>All Salaries</option>
                        <option>3 LPA - 5 LPA</option>
                        <option>5 LPA - 8 LPA</option>
                        <option>8 LPA - 12 LPA</option>
                        <option>12+ LPA</option>

                    </select>

                </div>



                <div className="filter-box">

                    <label>Job Type</label>

                    <select
                        value={typeFilter}
                        onChange={(e) => setTypeFilter(e.target.value)}
                    >

                        <option>All Types</option>
                        <option>Full Time</option>
                        <option>Part Time</option>
                        <option>Internship</option>
                        <option>Remote</option>

                    </select>

                </div>

            </div>



            {/* JOBS SECTION */}

            <div className="jobs-section">

                <h1>Available Jobs</h1>

                <div className="jobs-grid">

                    {

                        filteredJobs.length > 0 ? (

                            filteredJobs.map((job) => (

                                <div className="job-card" key={job.id}>

                                    <h2>{job.role}</h2>

                                    <p>
                                        <strong>Company :</strong> {job.company}
                                    </p>

                                    <p>
                                        <strong>Location :</strong> {job.location}
                                    </p>

                                    <p>
                                        <strong>Experience :</strong> {job.experience}
                                    </p>

                                    <p>
                                        <strong>Salary :</strong> {job.salary}
                                    </p>

                                    <p>
                                        <strong>Job Type :</strong> {job.type}
                                    </p>

                                    <div className="button-container">

                                        <button>Apply Now</button>

                                    </div>

                                </div>

                            ))

                        ) : (

                            <h3>No Jobs Found</h3>

                        )

                    }

                </div>

            </div>

        </div>

    );

}

export default Jobs;