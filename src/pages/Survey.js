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
                classes={'fixed left-0 top-0'}
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
            <SurveyQuestion
                props={{
                    'number': 2,
                    'type': 'check',
                    'question': 'Check Box Question!',
                    'answers' : [
                        'answer5',
                        'answer6',
                        'answer7',
                        'answer8'
                    ]
                }}
            />
            <SurveyQuestion
                props={{
                    'number': 3,
                    'type': 'slider',
                    'question': 'Slider Question!',
                    'name': 'fart'
                }}
            />
        </div>
    );
}

export default Survey;