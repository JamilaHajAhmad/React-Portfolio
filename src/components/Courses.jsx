import course1 from '../assets/course1.jpg';
//import course2 from '../assets/course2.jpg';
//import course3 from '../assets/course3.jpg';
function Courses() {
    return (
        <div>
            <h2>Courses</h2>
            <div className='card'>
                <img src={course1} alt="Course" />
                <h3>HTML</h3>
                <p>
                Learn the basics of HTML, the essential language for creating web pages.
                </p>
                <button>Enroll</button>
            </div>
        </div>
    )
}

export default Courses;