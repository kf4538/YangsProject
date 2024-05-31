function OptionRadio({text, questionNumber, value}) {
    return (
        <div className={'flex flex-row bg-black/10 gap-2 px-4 rounded-lg my-1'}>
            <input
                type={'radio'}
                name={questionNumber}
                value={text}
            />
            <p>{text}</p>
        </div>
    );
}

export default OptionRadio;