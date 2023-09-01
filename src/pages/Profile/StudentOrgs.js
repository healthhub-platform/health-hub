import React from 'react';
import './ProfileMain.css';
const StudentOrganisations = () => {
    return (
        <div className='container'>
            <h3>Student Organisations</h3>

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
                Student Organization Name
                <h4>
                    Role/Involvement in Organization
                </h4>
                <p>
                    <ul>
                        <li>
                            description about what you have done in the organization 
                        </li>
                    </ul>
                </p>
            </h3>

            
            </div>
        </div>
    );
}
export default StudentOrganisations;