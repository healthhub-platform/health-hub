import React from 'react';
import './ProfileMain.css';
const AcademicCourses = () => {
    return (
        <div className='container'>
            <h2>Academic Courses</h2>

            <ul className = "sidebar">
                <li> <span> Jane Doe </span></li>
                <li><span><i className="fa fa-title"></i> </span><span>Title</span> </li>
                <li><span><i className="fa fa-school"></i> </span><span>Education: <br /> High School <br /> College <br /> Certification Programs </span> </li>
                <li><span><i className="fa fa-qualifications"></i> </span><span>Qualifications: <br /> Certificate 1 <br /> Certificate 2 <br /> Certificate 3 </span> </li>
                <li><span><i className="fa fa-SeekingPositions"></i> </span><span>Seeking Opportunities In: <br/> list fields </span> </li>
                <li><span><i className="fa fa-interests"></i> </span><span>Interests: </span> </li>
                <li><span><i className="fa fa-location"></i> </span><span>Willing to Relocate: Y/N </span> </li>
            </ul>

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