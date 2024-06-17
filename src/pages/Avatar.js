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
    const [teammate, setTeammate] =useState(null)

    const handleAvatarChosen = (src) => {
        setSelectedAvatar(src);
        const filtered_avatars = avatars.filter((avatar) => avatar.src !== src);
        console.log(filtered_avatars)
        const teammate = filtered_avatars[(Math.floor(Math.random() * filtered_avatars.length))];
        console.log(teammate.src)
        setTeammate(teammate.src);
    }

    //if user has chosen an avatar, their teammate will show
    if (teammate) {
        return (
            <div
                className={'flex flex-col items-center'}
            >
    
            <h1>Choose your Avatar!</h1>
    
            <div className={'flex flex-row flex-wrap'}>
                {
                    avatars.map((avatar) => (
                        <ImageOption
                            key={avatar.src}
                            src={avatar.src}
                            onClick={handleAvatarChosen}
                            isSelected={selectedAvatar === avatar.src}
                        />))
                }
            </div>
    
            <h2>You are paired with...</h2>
            
            <img src={teammate} height={100} width={100} alt="Avatar of random teammate"></img>
    
            <LinkButton
                to={'game'}
                text={'Now onto the game!'}
            />
    
            </div>
        );
    } else {
        return (
            <div
                className={'flex flex-col items-center'}
            >
    
            <h1>Choose your Avatar!</h1>
    
            <div className={'flex flex-row flex-wrap'}>
                {
                    avatars.map((avatar) => (
                        <ImageOption
                            key={avatar.src}
                            src={avatar.src}
                            onClick={handleAvatarChosen}
                            isSelected={selectedAvatar === avatar.src}
                        />))
                }
            </div>
    
            <LinkButton
                to={'game'}
                text={'Now onto the game!'}
            />
    
            </div>
        );
    }
}

export default Avatar;