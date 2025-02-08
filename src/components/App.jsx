import Profile from "./Profile"
import Qualifications from "./Qualifications";
import Courses from "./Courses";
import "../main.css"
import Socials from "./Socials";
import Title from "./Title";

function App() {
    return (
        <div>
            <Title />
            <div className="container">
                <div className="row">
                    <div>
                        <Profile />
                    </div>
                    <div>
                        <Qualifications />
                    </div>
                </div>
                <div>
                    <Courses />
                </div>
                <Socials />
            </div>
        </div>
    )
}

export default App;