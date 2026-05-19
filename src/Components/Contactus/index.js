import "./index.css";

const Contact = () => {

    return(

        <div className="contact-container">

            <div className="contact-card">

                {/* LEFT SECTION */}

                <div className="contact-left">

                    <h1>Contact Us</h1>

                    <p className="contact-text">
                        We'd love to hear from you. Feel free to contact us
                        regarding job opportunities, support, or any queries.
                    </p>



                    <div className="contact-details">

                        <div className="contact-item">

                            <h3>Email</h3>

                            <p>support@jobportal.com</p>

                        </div>



                        <div className="contact-item">

                            <h3>Phone</h3>

                            <p>+91 8885821629</p>

                        </div>



                        <div className="contact-item">

                            <h3>Location</h3>

                            <p>Chirala , Andhra Pradesh</p>

                        </div>

                    </div>

                </div>



                {/* RIGHT SECTION */}

                <div className="contact-right">

                    <form className="contact-form">

                        <div className="input-box">

                            <label>Full Name</label>

                            <input
                            type="text"
                            placeholder="Enter your full name"
                            />

                        </div>



                        <div className="input-box">

                            <label>Email Address</label>

                            <input
                            type="email"
                            placeholder="Enter your email"
                            />

                        </div>



                        <div className="input-box">

                            <label>Message</label>

                            <textarea
                            placeholder="Type your message here..."
                            ></textarea>

                        </div>



                        <div className="button-box">

                            <button type="submit">
                                Send Message
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    )
}

export default Contact;