import { useEffect } from "react";
import Button from '../components/Button.js';
import '../styles/dist/about.css';

function About() {
    // To scroll to top when page is changed
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <div className="card" >
                <h1>Education:</h1>
                <div className="card-body">
                    <p>
                        <b>Mediterranean Institute of Technology</b> <br />
                        <span className="date" >2022 - 2025</span> <br />
                        <i>Software Engineering</i> <br />
                        <span className="date" >2020 - 2022</span> <br />
                        <i>Pre-Engineering</i> <br />
                    </p>
                    <p>
                        <b>Pioneer High School of Sfax</b> <br />
                        <span className="date" >2020 - 2022</span> <br />
                        <i>Baccalaureate of Mathematics</i>
                    </p>
                </div>
            </div>
            <Button text={"Check out my work"} />
        </>
    );
}

export default About;
