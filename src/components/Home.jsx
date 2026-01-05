import React from 'react'
import Typed from 'typed.js';

function Home() {
    const el = React.useRef(null);
    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Fullstack Developer', 'MERN stack Developer'],
            typeSpeed: 50,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);
    return (
        <>
            <div className="d-flex justify-content-evenly flex-wrap align-items-center my-3">
                <div className='fs-4 fw-medium '>
                    Hey, <br /><span className='fw-semibold' style={{ color: "rgb(163 130 225)", fontSize: "2.8rem" }}> I'm Akash Gupta </span>
                    <div>and I'm a passionate </div>
                    <span className='fw-semibold' style={{ color: "rgb(163 130 225)", fontSize: "2.8rem" }} ref={el}></span>
                    <br /> <br />
                    <button type="button" className="rounded-pill btn btn-outline-primary btn-lg me-3">LinkendIn</button>
                    <button type="button" className="rounded-pill btn btn-outline-primary btn-lg">GitHub</button>
                </div>
                <div className='mt-5'>
                    <img
                        src="/media/bg.png"
                        alt="dev_img"
                        style={{ width: "450px" }}
                    />
                </div>
            </div>
        </>
    );
}

export default Home;