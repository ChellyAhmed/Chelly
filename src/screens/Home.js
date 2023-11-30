import IconsBar from '../components/IconsBar';
//import bootstrap icons:
import 'bootstrap-icons/font/bootstrap-icons.css';

import '../styles/dist/home.css';
import Button from '../components/Button';
import avatar from '../assets/avatar.jpg';
import avatarW from '../assets/avatar.webp';
import Smile from '../components/Smile';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { SelectedPageContext } from '../App';
import { motion } from "framer-motion";

function Home() {
    const [selectedPage, setSelectedPage] = useContext(SelectedPageContext);

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
                                I'm a software engineer and a UX designer.
                            </p>
                        </div>
                        <div style={{ width: "100%", textAlign: "center" }}>
                            <Button text={"More about me"}
                                clicked={handleClick}
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