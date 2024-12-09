import business_center from '../assets/business_center.svg';
import location from '../assets/location2.svg';
import payments from '../assets/payments.svg';
import bin from '../assets/delete.svg'
import { useRouteLoaderData} from 'react-router-dom';

import { useState, useEffect, useRef} from 'react';


function FetchedSavedJobs({id, jobTitle, company, jobLocation, salaryMax, salaryMin, description, contract, applyLink}) {
const [deleteJob, setDeleteJob] = useState('')
const token = useRouteLoaderData('root')
const isMounted = useRef(false);



function handleDelete() {
    setDeleteJob(id)
    console.log(deleteJob)
}

useEffect(function() {
    if (isMounted.current) {
    async function removeJob() {
        
       try {
         const response = await fetch('http://localhost:4000/deletejob', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'x-auth-token': token
            },
            body: JSON.stringify(deleteJob)
    
        });
    
        const res = await response.json();
        console.log(res)
      
       } catch(err) {
        console.log(err)
       }
       
    }
    removeJob()
} else {
    isMounted.current= true;
}
}, [deleteJob])


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