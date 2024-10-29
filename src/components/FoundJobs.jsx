import { useState } from "react"

export default function FoundJobs({jobs}) {
 const [showContent, setShowContent] = useState(true);

 function handleShow() {
    setShowContent(false)
 }

 function handleClose() {
    setShowContent(true)
 }

     return (
        <>
            <div className="grid text-center job-info--border">
                <div className="g-col-6 g-col-md-4 job-info--box" >
                    <h4>{jobs.company.display_name}</h4>
                    <h6 className="job-info--title" >{jobs.title}</h6>
                    <p className="job-info--description">{jobs.description}<span onClick={handleShow} >..more</span></p>
                    <div className={showContent === true ? "hide-content" : "show-content"}>
        
                            <p className="job-info--location">{jobs.location.display_name}</p>
                            {jobs.contract_time && <p>{jobs.contract_time}</p>}
                            {jobs.contract_type && <p>{jobs.contract_type}</p>}
                            <p className="job-info--salary">Max Salary: {jobs.salary_max}</p>
                            <p className="job-info--salary-min">Min Salary: {jobs.salary_min}</p>
                            <button><a href={jobs.redirect_url}>apply for this job</a></button>
                            <span onClick={handleClose}>X</span>
            
                    </div>
                    
                </div>
            </div>
        </>
    )
}