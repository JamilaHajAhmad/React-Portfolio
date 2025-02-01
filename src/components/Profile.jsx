import { useState } from "react";
import profileImg from "../assets/profile-img.jpg";
function Profile() {
    const imgStyle = {width: "200px", height: "200px", borderRadius: "50%"};
    const btnStyle = {backgroundColor: "teal", color: "white",
            padding: "10px 20px", border: "none", borderRadius: "5px", fontSize: "16px"};
    const [state, setDisplayBio] = useState({displayBio: false});
    const toggle = () => {
        setDisplayBio({displayBio: !state.displayBio});
        console.log(state);
    }

    return(
        <div>
            <img src={profileImg} alt="profile photo" style={imgStyle} />
            <h2>Hello</h2>
            <p>My name is Jamila HajAhmad and I&apos;m a software engineer </p>
            {state.displayBio ? (
                <div>
                    <p>My skills:</p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                    </ul>
                    <button onClick={toggle} style={btnStyle}>Hide</button>
                </div>
            ) : (
                <button onClick={toggle} style={btnStyle}>Show More</button>
            )}
        </div>
    )
}

export default Profile;