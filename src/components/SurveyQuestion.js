import QuestionOption from "./QuestionOption";

function SurveyQuestion(props) {
    props = props.props;

    /* types of SurveyQuestions:
        1) 'radio' -> radio buttons, multiple choice, >1 options
        2) 'checkbox' -> check boxes, multiple choice select all, >1 options
        3) 'slider' -> slider bar, yang requested.
    */

    function parseType() {
        switch (props.type) {
            case 'radio':
                return (
                    <>{
                        props.answers.map((answer, index) => (
                            <QuestionOption
                                text={answer}
                                name={props.number}
                                key={index}
                            />
                        ))
                    }</>
                );
            default:
                console.log(`error on question #${props.number}`);
                return null;
        }
    }

    return (
        <div
            className={'flex flex-col items-center bg-red-300 rounded-3xl w-1/2 min-w-[600px] py-4'}
        >
            <h1 className={'mt-0'}>{props.question}</h1>
            <div
                className={'flex flex-col items-center justify-center '}
            >
                {
                    parseType()
                }
            </div>
        </div>
    );
}

export default SurveyQuestion;