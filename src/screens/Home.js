import IconsBar from '../components/IconsBar';
//import bootstrap icons:
import 'bootstrap-icons/font/bootstrap-icons.css';

import '../styles/dist/home.css';
import Button from '../components/Button';
import avatar from '../assets/avatar.jpg';
import Smile from '../components/Smile';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/about');
    }


    // To scroll to top when page is changed
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="full-page-div" >
                <div style={{ width: "100%" }}>

                    <div className='section'>
                        <img src={avatar} alt='avatar' />
                        <p>
                            Hi! <br />
                            I'm Ahmed Chelly. <br />
                            I'm a software engineer and a UX designer.
                        </p>
                    </div>
                    <div style={{ width: "100%", textAlign: "center" }}>
                        <Button text={"Check me out"} 
                        clicked={handleClick}
                        />
                    </div>
                </div>
                <IconsBar />
            </div>
            <Smile />
        </>
    );
}

export default Home;