// import './Home.css'

import LinkButton from "../components/LinkButton";

function Home() {
    return (
        <div className="flex flex-col items-center ">
            <h1>Yang's Project</h1>
            <p>Please participate in this study </p>
            <h4>Click to begin!</h4>

            <LinkButton
                to={'pre-survey'}
                text={'Begin'}
            />
        </div>
    );
}

export default Home;