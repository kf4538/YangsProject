import OptionRadio from "./OptionRadio";
import OptionCheck from "./OptionCheck";
import OptionSlider from "./OptionSlider";

function SurveyQuestion(props) {
    props = props.props;

    /* types of SurveyQuestions:
        1) 'radio' -> radio buttons, multiple choice, >1 options
        2) 'check' -> checkboxes, multiple choice select all, >1 options
        3) 'slider' -> slider bar, yang requested.
    */

    function parseType() {
        console.log(String(props.type));

        switch (String(props.type)) {
            case "radio":
                return (
                    <>{
                        props.answers.map((answer, index) => (
                            <OptionRadio
                                text={answer}
                                name={props.number}
                                key={index}
                            />
                        ))
                    }</>
                );
            case "check":
                return (
                    <>{
                        props.answers.map((answer, index) => (
                            <OptionCheck
                                text={answer}
                                name={props.number}
                                key={index}
                            />
                        ))
                    }</>
                );
            case "slider":
                return (
                    <>{
                        <OptionSlider
                            name={props.name}
                        />
                    }</>
                )

            default:
                console.log(`error on question #${props.number}`);
                return null;
        }
    }

    return (
        <div
            className={'flex flex-col items-center bg-black/20 rounded-3xl w-1/2 min-w-[600px] py-4 my-4'}
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