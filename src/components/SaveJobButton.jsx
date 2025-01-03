import favorite from '../assets/favorite.svg';
import { useState } from 'react';
import { useRouteLoaderData} from 'react-router-dom';

function SaveJobButton({jobId, jobTitle, company,jobLocation,salaryMax,salaryMin,description,contract,applyLink, setJobTitle}) {
    
const [response, setResponse] = useState('');


console.log(response)
const token = useRouteLoaderData('root')

async function handleSave() {
 const jobInfo = {
    jobId,
    jobTitle, 
    company, 
    jobLocation, 
    salaryMax, 
    salaryMin, 
    description, 
    contract, 
    applyLink, 
    setJobTitle};

    try {
        const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/savejob`, {
           method: 'POST',
           headers: {
               'content-type': 'application/json',
               'x-auth-token': token
           },
           body: JSON.stringify(jobInfo)
   
       });
   
       const res = await response.json();
       setResponse(res)

       setTimeout(()=> {
        setResponse('')
    }, 4000)
     
      } catch(err) {
       console.log(err)
      }  
}

    return (
        <>        
          <button onClick={handleSave} className='single-job__container--save-job'><img src={favorite} alt="" />  Save Job</button>
          <p>{response}</p>
        </>
    )
}

export default SaveJobButton;

