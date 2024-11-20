import { useState } from "react";
import SingleJob from "./SingleJob"
import business_center from "../assets/business_center.svg";
import payments from "../assets/payments.svg"
import location from "../assets/location2.svg"


export default function FoundJobs({jobs}) {
const [jobtitle, setJobTitle] = useState('');
const [company, setCompany] = useState('');
const [jobLocation, setJobLocation] = useState('');
const [salaryMax, setSalaryMax] = useState('');
const [salaryMin, setSalaryMin] = useState('');
const [description, setDescription] = useState('');
const [contract, setContract] = useState('');
const [applyLink, setApplyLink] = useState('');


function handleSingleJob() {
    setJobTitle(jobs.title)
    setCompany(jobs.company.display_name)
    setJobLocation(jobs.location.display_name)
    setSalaryMax(jobs.salary_max)
    setSalaryMin(jobs.salary_min)
    setDescription(jobs.description)
    setContract(jobs.contract)
    setApplyLink(jobs.redirect_url)
}
 
     return (
        <>
                <div className="jobs__container" onClick={handleSingleJob}>
                    <h4>{jobs.title}</h4>
                    <img src="" alt="" />
                    <p className="job__container--company-name"><img src={business_center} />  {jobs.company.display_name}</p> 
                    <p className="job__containter--job-location"><img src={location} />  {jobs.location.display_name}</p>
                    <p className="job__containter--salary"> <img src={payments} /> {jobs.salary_min} - {jobs.salary_max}</p>
                    <p className="job__containter--job-description">{jobs.description}</p>
                    <p className="job__container--date-created">posted: {jobs.created}</p>
                </div>
            <SingleJob 
                jobTitle={jobtitle}
                company={company}
                jobLocation={jobLocation}
                salaryMax={salaryMax}
                salaryMin={salaryMin}
                description={description}
                contract={contract}
                applyLink={applyLink}
                setJobTitle={setJobTitle}
            />   
        </>
    )
}