import SurveyQuestion from "./SurveyQuestion";
import {useActionData, useNavigate} from "react-router-dom";

function Survey({questions, nextPage}) {
    const navigate = useNavigate();

    const navigateToNewPage = () => {
        // use the navigate function to navigate to /new-page
        navigate(`/${nextPage}`);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const correctAnswers = {};

        // parsing correct answer object.
        for (const [key, value] of formData) {
            correctAnswers[key] === undefined ? correctAnswers[key] = [value] : correctAnswers[key].push(value);
        }

        // map correct answers (values) to an array
        let answerArray = [];
        for (let key of Object.keys(correctAnswers)) {
            answerArray.push(correctAnswers[key]);
        }

        // console.log(answerArray);
        // console.log(correctAnswers);
        // console.log(questions);

        if (answerArray.length !== questions.length) {
            alert('Not all questions answered!');
            return;
        }

        const parsedObject = {};
        for (let i = 0; i < questions.length; i++) {
            const question = questions[i];

            parsedObject[question.question] = answerArray[i];
        }

        console.log(parsedObject);
        // sendToDatabase(parsedObject);
        // export correctAnswers object however we see fit.

        //Route to next page
        navigateToNewPage();
    };

    return (
        <form onSubmit={handleSubmit}>
            {
                questions.map((question, index) => (
                    <SurveyQuestion
                        questionData={question}
                        questionNumber={index+1}
                        key={index+1}
                    />
                ))
            }
            <button type="submit">Submit</button>
        </form>
    );
}

export default Survey;