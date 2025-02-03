import SOCIALS from "../data/socials";

const Socials = () => {
    return (
        <div style={{textAlign: "center"}}>
            <h2>Connect with Me</h2>
            {
                SOCIALS.map(SOCIAL => <Social key={SOCIAL.id} social={SOCIAL} />)
            }
        </div>
    );
}

const Social = (props) => {
    const {name,img,link} = props.social;
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={img} alt={name} style={{height: "40px", width: "40px", margin: "10px"}} />
        </a>
    );
}

export default Socials;