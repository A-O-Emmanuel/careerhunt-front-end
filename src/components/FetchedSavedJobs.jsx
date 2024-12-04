import business_center from '../assets/business_center.svg';
import location from '../assets/location2.svg';
import payments from '../assets/payments.svg';

function FetchedSavedJobs({jobTitle, company, jobLocation, salaryMax, salaryMin, description, contract, applyLink}) {
    return (
        <>
             <div className="jobs__container">
                <h4>{jobTitle}</h4>
                <p className="job__container--company-name"><img src={business_center} />  {company}</p> 
                <p className="job__containter--job-location"><img src={location} />  {jobLocation}</p>
                <p className="job__containter--salary"> <img src={payments} /> {salaryMin} - {salaryMax}</p>
                <p className="job__containter--job-description">{description}</p>
                <p className="job__container--date-created">posted: </p>
            </div>
        </>
    )
}

export default FetchedSavedJobs;