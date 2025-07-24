import { useContext, useEffect } from 'react';
import Button from '../components/Button.js';
import { motion } from "framer-motion";
import { SelectedPageContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { Project, TextProject } from '../components/Project.js';
import P1 from '../assets/projects/1.png'
import P2 from '../assets/projects/2.png'
import P3 from '../assets/projects/3.png'
import P4 from '../assets/projects/4.png'
import P5 from '../assets/projects/5.png'
import P1W from '../assets/projects/1.webp'
import P2W from '../assets/projects/2.webp'
import P3W from '../assets/projects/3.webp'
import P4W from '../assets/projects/4.webp'
import P5W from '../assets/projects/5.webp'

function Portfolio() {

    const [selectedPage, setSelectedPage] = useContext(SelectedPageContext);
    const navigate = useNavigate();

    const textProjects = [
        {
            title: "My personal website",
            link: "https://github.com/ChellyAhmed/Chelly",
            description: "The website you are currently viewing, created using ReactJs."
        },
        {
            title: "AiReal",
            link: "https://github.com/ChellyAhmed/roommie",
            description: "A Convolutional Neural Network trained to discriminate between AI-generated and real images"
        },
        {
            title: "Mastermind",
            link: "https://github.com/ChellyAhmed/mastermind",
            description: "A knowledge-based AI Agent developed with Python to play the game Mastermind on console."
        },
        {
            title: "QuizGame",
            link: "https://github.com/ChellyAhmed/Chelly",
            description: "A console-based quiz game that can be played between multiple hosts connected via sockets, created with Python."
        },
    ]

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

            <div className='portfolio-div' >
                <h1>Coding Projects</h1>
                <p>Most of these projects are created within a team. Some of them are more like side projects developed for fun. Click on one to open the Github repository.</p>
            </div>
            <div className="container" alt={selectedPage} >
                {textProjects.map((project, index) => {
                    return (
                        <TextProject
                            link={project.link}
                            title={project.title}
                            description={project.description}
                            key={index}
                        />
                    )
                })}
            </div>
            <div className='portfolio-div'>
                <span>
                    More projects in my <a href="https://github.com/ChellyAhmed " target="_blank" rel="noreferrer">Github Profile</a>
                </span>
            </div>
            <div className='portfolio-div' >
                <h1>UI/UX Design Projects</h1>
                <p>Click on a project and it will open in a new tab!</p>
            </div>
            <div className="container" alt={selectedPage} >
                <Project
                    link='https://www.behance.net/gallery/143704277/Mobile-Application-Mockup'
                    image={P2}
                    image_webp={P2W}
                    title="Mobile Application Mockup"
                />
                <Project
                    link='https://www.behance.net/gallery/160294367/Case-study-for-street-food-vendor-mobile-app'
                    image={P1}
                    image_webp={P1W}
                    title="Case study for street food vendor mobile app"
                />
                <Project
                    link='https://www.behance.net/gallery/160293743/Case-study-for-graphic-designers-portfolio-website'
                    image={P3}
                    image_webp={P3W}
                    title="Case study for graphic designers portfolio website"
                />
                <Project
                    link='https://www.behance.net/gallery/160292921/Yalla-Eat-Case-study-for-a-cross-platform-service'
                    image={P4}
                    image_webp={P4W}
                    title="Yalla Eat Case study for a cross-platform service"
                />
                <Project
                    link='https://www.behance.net/gallery/161814569/Landing-page-for-Camch-Website'
                    image={P5}
                    image_webp={P5W}
                    title="Landing page for Camch Website"
                />
            </div>
            <div className='portfolio-div'>
                <span>
                    More projects in my <a href="https://www.behance.net/ahmedchelly " target="_blank" rel="noreferrer">Behance Profile</a>
                </span>
            </div>

            <div style={{ width: "100%", textAlign: "center" }}>
                <Button text={"Contact me!"}
                    clicked={handleClick}
                />
            </div>

            <br />
        </motion.div>

    );
}

export default Portfolio;
