import IconsBar from '../components/IconsBar';
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
            <IconsBar/>

        </div>
    );
}

export default Home;