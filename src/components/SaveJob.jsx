import favorite from '../assets/favorite.svg';
import {useState, useEffect} from 'react';


function SaveJob({jobTitle, company,jobLocation,salaryMax,salaryMin,description,contract,applyLink, setJobTitle}) {
const [saveJob, setSaveJob] = useState({});

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
 console.log(saveJob)
} 
    return (
        <>
            <button onClick={handleSave} className='single-job__container--save-job'><img src={favorite} alt="" />  Save Job</button>
        </>
    )
}

export default SaveJob;