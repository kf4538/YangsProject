import '../stylesheets/OptionSlider.css'

function OptionRadio({text, questionNumber}) {
    return (
        <div className={'bg-black/10 gap-2 px-4 rounded-lg my-1'}>
            <input
                type={'range'}
                name={questionNumber}
                min={'0'}
                max={'10'}
                step={'1'}
                list={'markers'}
                id={'0'}
            />
            <datalist
                id="markers"
                className={'flex flex-col justify-between'}
            >
                <option value="0" label='0'></option>
                <option value="5" label='5'></option>
                <option value="10" label='10'></option>
            </datalist>
            <p>{text}</p>
        </div>
    );
}

export default OptionRadio;