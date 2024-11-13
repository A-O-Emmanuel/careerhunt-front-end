import business_center from "../assets/business_center.svg";
import payments from "../assets/payments.svg"
import location from "../assets/location2.svg"

export default function FoundJobs({jobs}) {
 
     return (
        <>
                <div className="jobs__container">
                    <h4>{jobs.title}</h4>
                    <img src="" alt="" />
                    <p className="job__container--company-name"><img src={business_center} />  {jobs.company.display_name}</p> 
                    <p className="job__containter--job-location"><img src={location} />  {jobs.location.display_name}</p>
                    <p className="job__containter--salary"> <img src={payments} /> {jobs.salary_min} - {jobs.salary_max}</p>
                    <p className="job__containter--job-description">{jobs.description}</p>
                    <p className="job__container--date-created">posted: {jobs.created}</p>
                </div>
              
        </>
    )
}