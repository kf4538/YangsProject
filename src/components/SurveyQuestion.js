function SurveyQuestion(props) {
    props = props.props;

    return (
        <div
            className={'flex flex-col items-center bg-red-400 rounded-3xl w-1/2 min-w-[600px]'}
        >
            <h1>{props.question}</h1>
            <div
                className={'flex flex-col items-center justify-center '}
            >
                {
                    props.answers.map((answer) => (
                        <div
                            className={'text-xl'}
                        >
                            {answer}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default SurveyQuestion;