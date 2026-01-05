import React from 'react'

function Projects() {
    return (
        <>
            <h1 className='fw-semibold text-center my-4 contact-title'>Projects</h1>
            <div className='container-fluid d-flex justify-content-evenly flex-wrap p-5'>
                <div className="card p-4 mb-3" style={{ width: "25rem" }}>
                    <img src="/media/fs-university-logo.png" style={{ width: "80%" }} className="card-img-top" alt="fs-university_img" />
                    <div className="card-body">
                        <h5 className="card-title fw-semibold" >FS-University</h5>
                        <p className="card-text">I’ve created the FS University website , basically a clone in which I've added the customized University ChatBot (trained on pre-defined data) which helps students to resolve queries . I’ve also included a feature in which students get an instant e-mail whenever they fill-up an admission form.</p>
                        <a href="https://fs-university-cgno.vercel.app" className="btn btn-primary">Check it out</a>
                    </div>
                </div>
                <div className="card p-4 mb-3" style={{ width: "25rem" }}>
                    <img src="/media/MeetHub.png" style={{ width: "350px", height: "190px" }} className="card-img-top" alt="MeetHub_Img" />
                    <div className="card-body">
                        <h5 className="card-title fw-semibold">MeetHub</h5>
                        <p className="card-text">I’ve developed a real-time video conferencing application using MERN stack.   Features included in it are peer-to-peer connection for video and audio streaming, screen sharing capabilities, and instant chat functionality within the conference room.</p>
                        <a href="#" className="btn btn-primary">Check it out</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;