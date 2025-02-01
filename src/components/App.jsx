import Profile from "./Profile"
import Qualifications from "./Qualifications";
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
        </div>
    )
}

export default App;