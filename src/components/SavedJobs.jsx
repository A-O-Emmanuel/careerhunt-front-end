import { useRouteLoaderData} from 'react-router-dom';
import { useState, useEffect } from 'react';
import FetchedSavedJobs from './FetchedSavedJobs';


function SavedJobs() {

    const [savedJobs, setSavedJobs] = useState([]);
    const [triggerFetch, setTriggerFetch] = useState(0);

    const token = useRouteLoaderData('root');

 

    useEffect(function() {
        async function getsavedJobs() {
           try {
             const response = await fetch('http://localhost:4000/savedjobs', {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'x-auth-token': token
                },
            });
        
            const res = await response.json();
            setSavedJobs(res)

           } catch(err) {
            console.log(err)
           }

        }
        getsavedJobs()
    }, [triggerFetch])
    

    return (
        <>
        {
            savedJobs.map((jobs) => {
              return (
               <FetchedSavedJobs
                key={jobs._id}
                id={jobs._id}
                jobTitle={jobs.jobTitle}
                company={jobs.company}
                jobLocation={jobs.jobLocation} 
                salaryMax={jobs.salaryMax} 
                salaryMin={jobs.salaryMin}
                description={jobs.description}
                contract={jobs.contract}
                applyLink={jobs.applyLink}
                setTriggerFetch={setTriggerFetch}
               />
              )                
            })
        }
            
        </>
    )
}

export default SavedJobs;
