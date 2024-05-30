import LinkButton from "../components/LinkButton";
import SurveyQuestion from "../components/SurveyQuestion";

function Survey() {
    return (
        <div
            className={'flex flex-col items-center'}
        >
            <LinkButton
                to={''}
                text={'Back'}
                classes={'absolute left-0 top-0'}
            />
            <h1>Survey</h1>
            <p>The following will ask you questions... Answer them</p>

            <SurveyQuestion
                props={{
                    'number': 1,
                    'type': 'radio',
                    'question': 'What is your favorite color?',
                    'answers' : [
                        'answer1',
                        'answer2',
                        'answer3',
                        'answer4'
                    ]
                }}
            />
        </div>
    );
}

export default Survey;