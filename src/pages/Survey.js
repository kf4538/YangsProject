import LinkButton from "../components/LinkButton";
import SurveyQuestion from "../components/SurveyQuestion";

function Survey() {
    return (
        <div
            className={'flex flex-col items-center'}
        >
            <LinkButton to={''} word={'Back'} classes={'absolute left-0 top-0'}/>
            <h1>Survey</h1>
            <p>The following will ask you questions... Answer them</p>

            <SurveyQuestion
                props={{
                    'question': 'What is your favorite color?',
                    'answers' : [
                        'Cunt',
                        'fuck',
                        'balls'
                    ]
                }}
            ></SurveyQuestion>
        </div>
    );
}

export default Survey;