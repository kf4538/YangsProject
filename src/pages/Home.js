// import './Home.css'

import {Link} from "react-router-dom";
import LinkButton from "../components/LinkButton";

function Home() {
    return (
        <div className="flex flex-col items-center ">
            <h1>Yang's Goofy ass Project</h1>
            <p>Please participate in this study</p>
            <h4>Click to begin!</h4>

            <LinkButton
                to={'survey'}
                word={'Begin'}
            />
        </div>
    );
}

export default Home;