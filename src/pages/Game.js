import LinkButton from "../components/LinkButton";
import Circle from "../components/Circle";

function Game() {
    return (
        <div
            className={'flex flex-col items-center'}
        >
            <Circle backgroundColor={'red'}/>
            <LinkButton
                to={'post-survey'}
                text={'Now onto the post survey!'}
                classes={'fixed left-0 top-0'}
            />

        </div>
    );
}

export default Game;