import { useContext, useEffect } from 'react';
import Button from '../components/Button.js';
import '../styles/dist/portfolio.css';
import { motion } from "framer-motion";
import { SelectedPageContext } from '../App';
import { useNavigate } from 'react-router-dom';
import P1 from '../assets/projects/1.png'
import P2 from '../assets/projects/2.png'
import P3 from '../assets/projects/3.png'
import P4 from '../assets/projects/4.png'
import P5 from '../assets/projects/5.png'
import P6 from '../assets/projects/6.png'
import P7 from '../assets/projects/7.png'
import P8 from '../assets/projects/8.png'


function Portfolio() {

    const [selectedPage, setSelectedPage] = useContext(SelectedPageContext);
    const navigate = useNavigate();

    // To scroll to top when page is changed
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleClick = () => {
        setSelectedPage("contact");
        navigate('/contact');
    }
    // TODO: Fix the hrefs for anchors.


    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >

            <br />
            <br />
            <br />

            <div style={{ width: "78%", margin: "auto" }} >
                <h1>My projects</h1>
                <p>Click on a project and it will open in a new tab!</p>
            </div>
            <div className="container" alt={selectedPage} >
                <div className='project' >
                    <a href='#' target="_blank" rel="noreferrer" >
                        <img src={P1} alt="project" />
                    </a>
                </div>
                <div className='project' >
                    <a href='#' target="_blank" rel="noreferrer" >
                        <img src={P2} alt="project" />
                    </a>
                </div>
                <div className='project' >
                    <a href='#' target="_blank" rel="noreferrer" >
                        <img src={P3} alt="project" />
                    </a>
                </div>
                <div className='project' >
                    <a href='#' target="_blank" rel="noreferrer" >
                        <img src={P4} alt="project" />
                    </a>
                </div>
                <div className='project' >
                    <a href='#' target="_blank" rel="noreferrer" >
                        <img src={P5} alt="project" />
                    </a>
                </div>
                <div className='project' >
                    <a href='#' target="_blank" rel="noreferrer" >
                        <img src={P6} alt="project" />
                    </a>
                </div>
                <div className='project' >
                    <a href='#' target="_blank" rel="noreferrer" >
                        <img src={P7} alt="project" />
                    </a>
                </div>
                <div className='project' >
                    <a href='#' target="_blank" rel="noreferrer" >
                        <img src={P8} alt="project" />
                    </a>
                </div>
            </div>

            <div style={{ width: "100%", textAlign: "center" }}>
                <Button text={"Contact me!"}
                    clicked={handleClick}
                />
            </div>
        </motion.div>

    );
}

export default Portfolio;
