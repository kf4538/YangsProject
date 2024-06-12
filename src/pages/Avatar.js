import { useState } from "react";
import ImageOption from "../components/ImageOption";
import LinkButton from "../components/LinkButton";

function Avatar() {
    const avatars = [
        { src: '/images/avatar1.png' },
        { src: '/images/avatar2.png' },
        { src: '/images/avatar3.png' },
        { src: '/images/avatar4.png' },
        { src: '/images/avatar5.png' },
        { src: '/images/avatar6.png' }
    ]

    const [selectedAvatar, setSelectedAvatar] = useState(null)

    const handleAvatarChosen = (src) => {
        setSelectedAvatar(src);
    }

    return (
        <div
            className={'flex flex-col items-center'}
        >

        <h1>Choose your Avatar!</h1>

        {avatars.map((avatar) => (
            <ImageOption
                key={avatar.src}
                src={avatar.src}
                onClick={handleAvatarChosen}
                isSelected={selectedAvatar === avatar.src}
            />
        ))}

        <LinkButton
            to={'game'}
            text={'Now onto the game!'}
        />

        </div>
    );
}

export default Avatar;