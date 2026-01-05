import React from 'react'

function About() {
    return (
        <div className='container-fluid my-3' >
            <div className="d-flex justify-content-around align-items-center" id='about_section'>
                <div className='d-flex flex-column justify-content-start flex-wrap ps-5 ms-2 col-6' id='about'>
                    <div style={{ width: "400px" }}>
                        <img src="/media/my_img.png" id='my_img' style={{ width: "100%",borderRadius: "20px" }} alt="AKash's_img" />
                    </div>
                    <div className='mt-4' id='info'>
                        <p>Name : AKash Gupta</p>
                        <p>College : FS University, Shikohabad</p>
                        <p>Email : deepak.gpta96@gmail.com </p>
                    </div>
                </div>
                <div className='my-3 p-3' >
                    <h1 className='mt-2 fw-semibold text-center contact-title'>About Me</h1>
                    <p className='fw-medium lh-lg p-3 text-justify' >
                        Hi, My name is AKash Gupta. I'm a Full stack developer focused on MERN stack.
                        My primary toolkit is React.js for building the User's Interfaces (UI), node.js  and express.js for RESTful APIs and mongoDB for the data management.
                        I've also using Git for version control and also have basic knowledge of JAVA
                        and Microsoft Excel. 🚀 In addition to my technically endeavors, I am also passionate about language learning.
                    </p>
                    <ul className='list-unstyled p-3'>
                        <li> <b>Profile</b> : &nbsp;  FullStack Developer</li>
                        <li><b>Domain</b> : &nbsp; Web Developement</li>
                        <li><b>Education</b> : &nbsp; Bachelor of Computer Application</li>
                        <li><b>Language</b> : &nbsp; Hindi and English</li>
                    </ul>
                </div>
            </div>
            <div className='container-fluid'>
                <h1 className='text-center fw-semibold mb-3 contact-title'>Education </h1>
                <div className='d-flex justify-content-evenly align-items-center flex-wrap'>
                    <div className=" border p-3 mb-3" style={{ width: "500px" }}>
                        <h3 className='fw-semibold ' style={{ color: "rgb(163 130 225)" }}>2023-2026</h3>
                        <p className='fw-semibold fs-5'>Bachelor of Computer Application</p>
                        <p className='lh-lg'>FS University, Shikohabad</p>
                        <p className='fw-semibold fs-5' style={{ color: "rgb(163 130 225)" }}>CGPA : 8.0 </p>
                    </div>
                    <div className=" border p-3 mb-3" style={{ width: "500px" }}>
                        <h3 className='fw-semibold ' style={{ color: "rgb(163 130 225)" }}>2022-2023</h3>
                        <p className='fw-semibold fs-5'>Senior Secondary School</p>
                        <p className='lh-lg'>St. J. B. Global Academy, Shikohabad</p>
                        <p className='fw-semibold fs-5' style={{ color: "rgb(163 130 225)" }}>Percentage : 78 % </p>
                    </div>
                </div>
                <div className='text-center my-4'>
                    <a href="https://docs.google.com/document/d/e/2PACX-1vR5FO1FdXhYXvDDPUCRgyBb8N6OdFb5nKzw5yERlRbIJKaF-AZovEB0aK0-7uxU2pV8AHu2e1Oerqv7/pub">
                    <button type="button" style={{ background: "rgb(163 130 225)" }} className=" rounded-pill btn  btn-lg">Resume</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;