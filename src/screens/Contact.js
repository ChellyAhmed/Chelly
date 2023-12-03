import IconsBar from '../components/IconsBar';
//import bootstrap icons:
import 'bootstrap-icons/font/bootstrap-icons.css';
import avatar from '../assets/smile.svg';
import Smile from '../components/Smile';
import { motion } from "framer-motion";

function Contact() {

    return (
        <>
            <motion.div className='contact'
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="full-page-div" >
                    <div style={{ width: "100%" }}>

                        <div className='section'>
                            <img src={avatar} alt={"Smiley face"} />
                            <p>
                                Connect with me! <br />
                                You can reach me at:<br />
                                <div className='contact-details'>
                                    <p>
                                        <i className="bi bi-envelope-at-fill" style={{ marginRight: "1rem" }} />
                                        <a href="mailto:ahmed.chelly@medtech.tn" target="_blank" rel="noreferrer">
                                            ahmed.chelly@medtech.tn <br />
                                        </a>
                                        <i className="bi bi-telephone-fill" style={{ marginRight: "1rem" }} />
                                        <a href="tel:+21697556892" target="_blank" rel="noreferrer">
                                            +216 97 556 892
                                        </a>
                                    </p>
                                </div>
                            </p>
                        </div>
                    </div>
                    <div style={{ width: "100%", textAlign: "center" }}>
                        <span>
                            Check out the links below:
                            <IconsBar />
                        </span>
                    </div>
                </div>
            </motion.div>
            <Smile />
        </>
    );
}

export default Contact;
