import React from 'react'

function Contact() {
    return (
        <div className="contact-container">
            <h1 className='contact-title'>Contact Me</h1>
            <p className='contact-subtitle'>Below are the details to reach out to me</p>

            <div className="contact-grid">
                <div className="contact-card">
                    <div className="contact-icon">
                        <i className="fa-solid fa-house"></i>
                    </div>
                    <h3 className="contact-card-title">ADDRESS</h3>
                    <p className="contact-card-text">
                        Ramesh Nagar, <br />
                        Mainpuri Chauraha,<br />
                        Shikohabad, U.P.
                    </p>
                </div>

                <div className="contact-card">
                    <div className="contact-icon">
                        <i className="fa-solid fa-phone"></i>
                    </div>
                    <h3 className="contact-card-title">MOBILE NO.</h3>
                    <a href="tel:+919528131653" className="contact-link">+91 9528131653</a>
                </div>

                <div className="contact-card">
                    <div className="contact-icon">
                        <i className="fa-solid fa-envelope-open"></i>
                    </div>
                    <h3 className="contact-card-title">EMAIL ADDRESS</h3>
                    <a href="mailto:deepak.gpta96@gmail.com" className="contact-link">deepak.gpta96@gmail.com</a>
                </div>

                <div className="contact-card">
                    <div className="contact-icon">
                        <i className="fa-solid fa-file-arrow-down"></i>
                    </div>
                    <h3 className="contact-card-title">RESUME</h3>
                    <a href="#" className="contact-link">Download Resume</a>
                </div>
            </div>
            <div className='text-center fs-5 fw-medium mt-5'>
                Find me on
                &nbsp;<span><a href="https://www.linkedin.com/in/itzakashgupta8055/" style={{color:"rgb(163,130,225)"}}><i class="fa-brands fa-linkedin"></i></a></span>
                &nbsp;<span><a href="https://github.com/Akash-gupta0005" style={{color:"rgb(163,130,225)"}}><i class="fa-brands fa-github"></i></a></span>
                &nbsp;<span><a href="https://www.instagram.com/akash_gupta0004/?hl=en" style={{color:"rgb(163,130,225)"}}><i class="fa-brands fa-instagram"></i></a></span>
            </div>
        </div>
    );
}

export default Contact;