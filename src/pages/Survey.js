import LinkButton from "../components/LinkButton";
import SurveyQuestion from "../components/SurveyQuestion";

function Survey({questions}) {
    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        for (const [key, value] of formData) {
            console.log(`${key}: ${value}`);
        }

        // sendInputValueToApi(inputValue).then(() => /* Do something */)
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