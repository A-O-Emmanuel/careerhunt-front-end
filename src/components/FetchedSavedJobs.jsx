import business_center from '../assets/business_center.svg';
import location from '../assets/location2.svg';
import payments from '../assets/payments.svg';
import bin from '../assets/delete.svg'
import { useRouteLoaderData} from 'react-router-dom';


function FetchedSavedJobs({id, jobTitle, company, jobLocation, salaryMax, salaryMin, description, contract, applyLink, setTriggerFetch}) {
const token = useRouteLoaderData('root')



async function handleDelete() {
    const jobId = {
        id
    }

    console.log(id)
   try {
     const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/deletejob`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'x-auth-token': token
        },
        body: JSON.stringify(jobId)

    });
    const res = await response.json();
    setTriggerFetch(prev => prev + 1)
    console.log(res)
    
    
   } catch(err) {
    console.log(err)
   }
   
}
    return (
        <>
             <div className="jobs__container">
                <span onClick={handleDelete}><img src={bin} alt="" /></span>
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