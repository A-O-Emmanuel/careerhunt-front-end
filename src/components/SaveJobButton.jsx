import favorite from '../assets/favorite.svg';
import {useState, useEffect, useRef} from 'react';
import { useRouteLoaderData} from 'react-router-dom';

function SaveJobButton({jobTitle, company,jobLocation,salaryMax,salaryMin,description,contract,applyLink, setJobTitle}) {
    
const [saveJob, setSaveJob] = useState({});
const isMounted = useRef(false);

const token = useRouteLoaderData('root')

function handleSave() {
 setSaveJob({
    jobTitle, 
    company, 
    jobLocation, 
    salaryMax, 
    salaryMin, 
    description, 
    contract, 
    applyLink, 
    setJobTitle});
}



    useEffect(function() {
        if (isMounted.current) {
        async function saveJobs() {
            const jobInfo = {
                jobTitle: saveJob.jobTitle,
                company: saveJob.compay,
                jobLocation: saveJob.jobLocation,
                salayMax: saveJob.salaryMax,
                salaryMin: saveJob.salaryMin,
                description: saveJob.description,
                contract: saveJob.contract,
                applyLink: saveJob.applyLink,
            }
            
           try {
             const response = await fetch('http://localhost:4000/savejob', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'x-auth-token': token
                },
                body: JSON.stringify(jobInfo)
        
            });
        
            const res = await response.json();
            console.log(res)
          
           } catch(err) {
            console.log(err)
           }
           
        }
        saveJobs()
    } else {
        isMounted.current = true;
    }
    }, [saveJob])
    

    return (
        <>        
          <button onClick={handleSave} className='single-job__container--save-job'><img src={favorite} alt="" />  Save Job</button>
        </>
    )
}

export default SaveJobButton;

