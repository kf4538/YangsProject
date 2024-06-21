import LinkButton from "../components/LinkButton";
import Circle from "../components/Circle";
import Timer from "../components/Timer";

function Game() {
    return (
        <div
            className={'flex flex-col items-center'}
        >
            <div className={'grid grid-cols-3 gap-1 items-center'}>
                <p className="text-center">Your score: </p>
                <p className="text-center">Click circle corresponding to: </p>
                <Timer />

            </div>
            <LinkButton
                to={'post-survey'}
                text={'Now onto the post survey!'}
                classes={'text-center'}
            />
        </div>
    );
}

export default Game;