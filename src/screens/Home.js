import IconsBar from '../components/IconsBar';
//import bootstrap icons:
import 'bootstrap-icons/font/bootstrap-icons.css';
import Button from '../components/Button';
import avatar from '../assets/avatar.jpg';
import smile from '../assets/smile.png';

function Home() {
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
                    <Button text={"Check me out"} />
                </div>
            </div>
            <IconsBar />
        </div>
        <img className='smile' src={smile} alt='cute smile' />
        </>
    );
}

export default Home;