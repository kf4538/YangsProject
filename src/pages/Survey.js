import LinkButton from "../components/LinkButton";
import SurveyQuestion from "../components/SurveyQuestion";

function Survey({questions}) {
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
    };

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

            <p>the bottom!</p>
        </div>
    );
}

export default Survey;