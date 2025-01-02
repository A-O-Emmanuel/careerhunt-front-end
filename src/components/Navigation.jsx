
import { useState, useEffect, useRef } from "react";

import FoundJobs from "./FoundJobs";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import Pagination from "./Pagination";


function Navigation () {

const jobTitle = useRef();
const cityTitle = useRef();
const [jobSearch, setJobSearch] = useState("");
const [citySearch, setCitySearch] = useState("");   
const [search, setSearch] = useState([])

const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState("");

const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage, setPostsPerPage] = useState(5);


function handleSubmit(e) {
    const enteredJobTitle = jobTitle.current.value;
    const enteredCityTitle = cityTitle.current.value;
    setJobSearch(enteredJobTitle)
    setCitySearch(enteredCityTitle)
   e.preventDefault()
}


const app_id = import.meta.env.VITE_APP_ID;
const app_key = import.meta.env.VITE_APP_KEY;

console.log(app_id)
console.log(app_key)

useEffect( function () { 
    setIsLoading(true);
    setError("")
    fetch(`https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${app_id}&app_key=${app_key}&results_per_page=20&what=${jobSearch}&where=${citySearch}&content-type=application/json`)
     .then((res) => {
        if(!res.ok) throw new Error()
        return res.json()
        })
     .then((data) => {
        console.log(data.results)
        if (data.results.length === 0) throw new Error("Please enter a valid search query")
        setSearch(data.results)
     })
     .catch(err => setError(err.message))
     .finally(() => setIsLoading(false))
}, [jobSearch, citySearch])

/* pagination logic*/
const lastPostIndex = currentPage * postsPerPage;
const firstPostIndex = lastPostIndex - postsPerPage;
const currentPosts = search.slice(firstPostIndex, lastPostIndex)
const totalPosts = search.length;

     return <>
        <div className="div form-container">
            <form className="form-container__form"  onSubmit={handleSubmit}> 
                        <input 
                        className="form-container__jobtitle"
                        type="text" 
                        name="enterJOb"
                        ref={jobTitle}
                        placeholder="Search Job"
                        />
                    
                    <input 
                        className="form-containter__location"
                        type="text"
                        name="enterCity"
                        ref={cityTitle}
                        placeholder="City or Postcode"
                        />
                        <button className="form-container__search-button">Find jobs</button>                          
            </form>
        </div>
            {search && jobSearch && citySearch && !error && !isLoading && <h5 className="available-jobs-text">{search.length} {jobSearch} jobs in {citySearch}.</h5>}
            {search && !jobSearch && !citySearch && !error && !isLoading && <h5 className="available-jobs-text">{search.length} jobs available.</h5>}

        {isLoading && <Loader /> }
        {!isLoading && !error && currentPosts?.map((jobs) => {
            return <FoundJobs 
                        key={jobs.id} 
                        jobs={jobs}
                     />
                    
        })}

        {error && <ErrorMessage message={error} />}

        {!isLoading && !error && <Pagination 
            totalPosts={totalPosts} 
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage} 
            currentPage={currentPage}   
         />}


    </>
}

export default Navigation;