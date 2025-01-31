import profileImg from "../assets/profile-img.jpg";
function Profile() {
    const imgStyle = {width: "200px", height: "200px", borderRadius: "50%"};
    return(
        <div>
            <img src={profileImg} alt="profile photo" style={imgStyle} />
            <h2>Hello</h2>
            <p>My name is Jamila HajAhmad and I&apos;m a software engineer </p>
        </div>
    )
}

export default Profile;