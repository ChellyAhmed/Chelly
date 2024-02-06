import IconsBar from '../components/IconsBar';
//import bootstrap icons:
import 'bootstrap-icons/font/bootstrap-icons.css';

import Button from '../components/Button';
import avatar from '../assets/avatar.jpg';
import avatarW from '../assets/avatar.webp';
import Smile from '../components/Smile';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { SelectedPageContext } from '../App';
import { motion } from "framer-motion";
import Ahmed_Chelly_Resume from '../assets/Ahmed_Chelly_Resume.pdf';

function Home() {
    const [selectedPage, setSelectedPage] = useContext(SelectedPageContext);

    const downloadResume = () => {
        // window.open(Ahmed_Chelly_Resume, "_blank");
        const link = document.createElement('a');
        link.href = Ahmed_Chelly_Resume;
        link.download = 'Ahmed_Chelly_Resume.pdf';
        link.click();
    }

    const navigate = useNavigate();

    const handleClick = () => {
        setSelectedPage("about");
        navigate('/about');
    }

    return (
        <>
            <motion.div className='home'
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="full-page-div" >
                    <div style={{ width: "100%" }}>

                        <div className='section'>
                            <picture className='rounded'>
                                <source type='image/webp' srcSet={avatarW} alt={"Picture of Ahmed Chelly"} />
                                <img src={avatar} alt={"avatar of Ahmed Chelly for" + selectedPage} />
                            </picture>
                            <p>
                                Hi! <br />
                                I'm Ahmed Chelly. <br />
                                I'm a passionate software engineering student.
                            </p>
                        </div>
                        <div className="centered-buttons">
                            <Button text={"More about me"}
                                clicked={handleClick}
                            />
                            <Button text={"Download my Resume"}
                                clicked={downloadResume}
                            />
                        </div>
                    </div>
                    <IconsBar />
                </div>
            </motion.div>
            <Smile />
        </>
    );
}

export default Home;
