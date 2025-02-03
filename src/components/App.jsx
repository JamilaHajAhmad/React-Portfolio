import Profile from "./Profile"
import Qualifications from "./Qualifications";
import Courses from "./Courses";
import "../main.css"
import Socials from "./Socials";

function App() {
    return (
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
    )
}

export default App;