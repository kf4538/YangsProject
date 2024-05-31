import OptionRadio from "./OptionRadio";
import OptionCheck from "./OptionCheck";
import OptionSlider from "./OptionSlider";

function SurveyQuestion({questionData, questionNumber}) {

    /* types of SurveyQuestions:
        1) 'radio' -> radio buttons, multiple choice, >1 options
        2) 'check' -> checkboxes, multiple choice select all, >1 options
        3) 'slider' -> slider bar, yang requested.
    */

    function parseType() {
        switch (String(questionData.type)) {
            case "radio":
                return (
                    <>{
                        questionData.answers.map((answer, index) => (
                            <OptionRadio
                                text={answer}
                                questionNumber={questionNumber}
                                value={index+1}
                                key={index}
                            />
                        ))
                    }</>
                );
            case "check":
                return (
                    <>{
                        questionData.answers.map((answer, index) => (
                            <OptionCheck
                                text={answer}
                                questionNumber={questionNumber}
                                value={index+1}
                                key={index}
                            />
                        ))
                    }</>
                );
            case "slider":
                return (
                    <>{
                        <OptionSlider
                            questionNumber={questionNumber}
                            id={questionNumber}
                        />
                    }</>
                )

            default:
                console.log(`error on question #${questionNumber}`);
                return null;
        }
    }

    return (
        <div
            className={'relative flex flex-col items-center bg-black/20 rounded-3xl w-1/2 min-w-[600px] py-4 my-4'}
        >
            <p className={'absolute bottom-0 left-0 m-4 font-bold'}>
                {`Question: ${questionNumber}`}
            </p>
            <h1 className={'mt-0'}>
                {questionData.question}
            </h1>
            <div className={'flex flex-col items-center justify-center '}>
                {parseType()}
            </div>
        </div>
    );
}

export default SurveyQuestion;