function OptionRadio({text, name}) {
    return (
        <div className={'flex flex-row bg-black/10 gap-2 px-4 rounded-lg my-1'}>
            <input type={'checkbox'} name={`q${name}`}/>
            <p>{text}</p>
        </div>
    );
}

export default OptionRadio;