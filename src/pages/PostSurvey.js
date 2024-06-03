import LinkButton from "../components/LinkButton";
import Survey from "../components/Survey";

function PostSurvey({questions}) {
    return (
        <div
            className={'flex flex-col items-center'}
        >
            <LinkButton
                to={''}
                text={'Home'}
                classes={'fixed left-0 top-0'}
            />
            <h1>Post Survey</h1>
            <p>The following will ask you questions... Answer them</p>

            <Survey questions={questions} nextPage={''}/>

            <p>the bottom!</p>
        </div>
    );
}

export default PostSurvey;