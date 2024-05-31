function OptionRadio({text, questionNumber, value}) {
    return (
        <div className={'flex flex-row bg-black/10 gap-2 px-4 rounded-lg my-1'}>
            <input
                type={'checkbox'}
                name={questionNumber}
                value={value}
            />
            <p>{text}</p>
        </div>
    );
}

export default OptionRadio;