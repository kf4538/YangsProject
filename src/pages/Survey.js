import LinkButton from "../components/LinkButton";
import SurveyQuestion from "../components/SurveyQuestion";

function Survey() {
    const allQuestions = [
        {
            'type': 'radio',
            'question': 'What is your favorite color?',
            'answers' : [
                'answer1',
                'answer2',
                'answer3',
                'answer4'
            ]
        },
        {
            'type': 'check',
            'question': 'Check Box Question!',
            'answers' : [
                'answer5',
                'answer6',
                'answer7',
                'answer8'
            ]
        },
        {
            'type': 'slider',
            'question': 'Slider Question!',
            'name': 'fart'
        }
    ];

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
            {
                allQuestions.map((question, index) => (
                    <SurveyQuestion props={question} number={index} />
                ))
            }
        </div>
    );
}

export default Survey;