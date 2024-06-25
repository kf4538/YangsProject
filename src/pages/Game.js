import LinkButton from "../components/LinkButton";

function Game() {
    return (
        <>
            <LinkButton
                to={'post-survey'}
                text={'Now onto the post survey!'}
                classes={'fixed left-0 top-0'}
            />
        </>
    );
}

export default Game;