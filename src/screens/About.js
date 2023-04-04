import { useContext, useEffect } from "react";
import Button from '../components/Button.js';
import '../styles/dist/about.css';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { SelectedPageContext } from "../App.js";

function About() {
    const [selectedPage, setSelectedPage] = useContext(SelectedPageContext);
    const navigate = useNavigate();

    // To scroll to top when page is changed
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleClick = () => {
        setSelectedPage("portfolio");
        navigate('/portfolio');
    }

    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >

            <br />
            <br />
            <br />
            <br />

            <div className="card" >
                <h1>Education:</h1>
                <div className="card-body" alt={selectedPage}>
                    <p>
                        <b>Mediterranean Institute of Technology</b> <br />
                        <small>Excellence Scholarship <br /></small>
                        <span className="date" >2022 - 2025</span> <br />
                        <i>Software Engineering</i> <br />
                        <span className="date" >2020 - 2022</span> <br />
                        <i>Pre-Engineering</i> <br />
                    </p>
                    <p>
                        <b>Pioneer High School of Sfax</b> <br />
                        <span className="date" >2016 - 2020</span> <br />
                        <i>Baccalaureate of Mathematics</i>
                    </p>
                </div>
            </div>

            <br />

            <div className="card" >
                <h1>Relevant Experience:</h1>
                <div className="card-body">
                    <p>
                        <span className="date" >2021 - 2022</span> <br />
                        <b>Graphic Designer</b> <br />
                        <i>Birou Suite</i> <br />
                    </p>
                    <p>
                        <span className="date" >June 2022</span> <br />
                        <b>Web Developer intern</b> <br />
                        <i>BluePen Labs</i> <br />
                    </p>
                    <p>
                        <span className="date" >August 2020</span> <br />
                        <b>Graphic Design Trainer</b> <br />
                        <i>Ecozone Coworking Space Sfax</i> <br />
                    </p>
                </div>
            </div>

            <br />

            <div style={{ width: "100%", textAlign: "center" }}>
                <Button text={"Check out my work"} 
                clicked={handleClick}
                />
            </div>
        </motion.div>

    );
}

export default About;
