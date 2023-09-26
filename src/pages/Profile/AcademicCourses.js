import React from 'react';
// import './ProfileMain.css';
const AcademicCourses = () => {
    return (
        <div className='container'>
            <h2>Academic Courses</h2>

            

            <div className="content"> 

            <h3>
                Science
                <h4>
                    AP Biology
                </h4>
                <p>
                    <ul>
                        <li>
                            description about the course 
                        </li>
                    </ul>
                    Score/Grade: 
                </p>
            </h3>

            <h3>
                Math
                <h4>
                    AP Calculus
                </h4>
                <p>
                    <ul>
                        <li>
                            description about the course 
                        </li>
                    </ul>
                    Score/Grade: 
                </p>
            </h3>

            <h3>
                Other Relevant Coursework
                <h4>
                    Summer AP Computer Science
                </h4>
                <p>
                    <ul>
                        <li>
                            description about the course 
                        </li>
                    </ul>
                    Score/Grade: 
                </p>
            </h3>
            
            </div>
        </div>
    );
}
export default AcademicCourses;