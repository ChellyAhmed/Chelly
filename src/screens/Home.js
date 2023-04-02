//import bootstrap icons:
import 'bootstrap-icons/font/bootstrap-icons.css';

function Home() {
    return (
        <div className="full-page-div" >
            <h1 className="smile" >^_^</h1>
            <p>
                Hi! <br />
                I'm Ahmed Chelly. <br />
                I'm a software engineer and a UX designer.
            </p>

            <div className="icons" >
                <a href="#">
                    <i className="bi bi-linkedin"/>
                </a>
                <a href="#">
                    <i className="bi bi-behance" />
                </a>
                <a href="#">
                    <i className="bi bi-github"/>
                </a>
                <a href="#">
                    <i className="bi bi-whatsapp"/>
                </a>
                <a href="#">
                    <i className="bi bi-envelope-at-fill"/>
                </a>
            </div>

        </div>
    );
}

export default Home;