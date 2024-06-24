import LinkButton from "../components/LinkButton";
import Circle from "../components/Circle";
import Timer from "../components/Timer";

function Game() {
    return (
        <div
            className={'flex flex-col items-center'}
        >
            <LinkButton
                to={'post-survey'}
                text={'Now onto the post survey!'}
                classes={'fixed left-0 top-0 text-center'}
            />

            <div className={'grid grid-cols-3 gap-1 items-center'}>
                <p className="text-center">Your score: </p>
                <p className="text-center">Click circle corresponding to: </p>
                <Timer />
            </div>
            <div>
                <Circle x={50} y={10} backgroundColor={"red"}/>
            </div>
        </div>
    );
}

export default Game;