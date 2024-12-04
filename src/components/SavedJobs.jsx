import { useRouteLoaderData} from 'react-router-dom';
import { useState, useEffect } from 'react';

function SavedJobs() {

    const [savedJobs, setSavedJobs] = useState([]);

    const token = useRouteLoaderData('root');

    console.log(savedJobs)

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
    }, [])
    

    return (
        <>
            <h4>Saved Jobs</h4>
        </>
    )
}

export default SavedJobs;
