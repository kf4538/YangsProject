import {Link} from "react-router-dom";

function LinkButton({to, word, classes}) {
    /*
        to -> for routing purposes, location of where to route to.
        word -> what to display in the header tag
        classes -> (optional) any additional classes to add.
     */

    return (
        <Link
            to={`/${to}`}
            className={`no-underline m-2 p-4 bg-white hover:bg-gray-200 transition-all rounded-lg ${classes}`}
        >
            <h1 className={'m-0 p-0 text-black'}>{word}</h1>
        </Link>
    )
}

export default LinkButton;