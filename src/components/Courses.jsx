import COURSES from '../data/courses';
function Courses() {
    return (
        <div>
            <h2 className='mainHeading'>Courses</h2>
            {COURSES.map(COURSE => <Course key={COURSE.id} course={COURSE} />)}
            <hr />
        </div>
    )
}

function Course(props) {
    const { title, description, img, link } = props.course;
    return (
        <div className="card">
            <img src={img} alt="Course"/>
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={() => window.location.href = link}>Enroll</button>
        </div>
    )
}

export default Courses;