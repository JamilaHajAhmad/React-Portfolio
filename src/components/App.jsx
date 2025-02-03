import Profile from "./Profile"
import Qualifications from "./Qualifications";
import Courses from "./Courses";
import "../main.css"

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
            <hr></hr>
            <div>
                <Courses />
            </div>
        </div>
    )
}

export default App;