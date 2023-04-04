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
import P1W from '../assets/projects/1.webp'
import P2W from '../assets/projects/2.webp'
import P3W from '../assets/projects/3.webp'
import P4W from '../assets/projects/4.webp'
import P5W from '../assets/projects/5.webp'
import P6W from '../assets/projects/6.webp'
import P7W from '../assets/projects/7.webp'
import P8W from '../assets/projects/8.webp'


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
                    <a href='https://www.behance.net/gallery/143704277/Mobile-Application-Mockup' target="_blank" rel="noreferrer" >
                        <picture>
                            <source type='image/webp' srcSet={P2W} alt="Mobile-Application-Mockup"/>
                            <img src={P2} alt="Mobile-Application-Mockup" />
                        </picture>
                    </a>
                </div>
                <div className='project' >
                    <a href='https://www.behance.net/gallery/160294367/Case-study-for-street-food-vendor-mobile-app' target="_blank" rel="noreferrer" >
                        <picture>
                            <source type='image/webp' srcSet={P1W} alt="Case-study-for-street-food-vendor-mobile-app"/>
                            <img src={P1} alt="Case-study-for-street-food-vendor-mobile-app" />
                        </picture>
                    </a>
                </div>
                <div className='project' >
                    <a href='https://www.behance.net/gallery/160293743/Case-study-for-graphic-designers-portfolio-website' target="_blank" rel="noreferrer" >
                        <picture>
                            <source type='image/webp' srcSet={P3W} alt="Case-study-for-graphic-designers-portfolio-website"/>
                            <img src={P3} alt="Case-study-for-graphic-designers-portfolio-website" />
                        </picture>
                    </a>
                </div>
                <div className='project' >
                    <a href='https://www.behance.net/gallery/160292921/Yalla-Eat-Case-study-for-a-cross-platform-service' target="_blank" rel="noreferrer" >
                        <picture>
                            <source type='image/webp' srcSet={P4W} alt="Yalla-Eat-Case-study-for-a-cross-platform-service"/>
                            <img src={P4} alt="Yalla-Eat-Case-study-for-a-cross-platform-service" />
                        </picture>
                    </a>
                </div>
                <div className='project' >
                    <a href='https://www.behance.net/gallery/161814569/Landing-page-for-Camch-Website' target="_blank" rel="noreferrer" >
                        <picture>
                            <source type='image/webp' srcSet={P5W} alt="Landing-page-for-Camch-Website"/>
                            <img src={P5} alt="Landing-page-for-Camch-Website" />
                        </picture>
                    </a>
                </div>
                <div className='project' >
                    <a href='https://www.behance.net/gallery/103266977/Redesign-minimalist-for-Loup-garou-game' target="_blank" rel="noreferrer" >
                        <picture>
                            <source type='image/webp' srcSet={P6W} alt="Redesign-minimalist-for-Loup-garou-game"/>
                            <img src={P6} alt="Redesign-minimalist-for-Loup-garou-game" />
                        </picture>
                    </a>
                </div>
                <div className='project' >
                    <a href='https://www.behance.net/gallery/109383191/Terra-brand' target="_blank" rel="noreferrer" >
                        <picture>
                            <source type='image/webp' srcSet={P7W} alt="Terra-brand"/>
                            <img src={P7} alt="Terra-brand" />
                        </picture>
                    </a>
                </div>
                <div className='project' >
                    <a href='https://www.behance.net/gallery/120457891/Penguintn-graphical-charter' target="_blank" rel="noreferrer" >
                        <picture>
                            <source type='image/webp' srcSet={P8W} alt="Penguintn-graphical-charter"/>
                            <img src={P8} alt="Penguintn-graphical-charter" />
                        </picture>
                    </a>
                </div>
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
