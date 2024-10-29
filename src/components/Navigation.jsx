
import { useState, useEffect, useRef } from "react";

import FoundJobs from "./FoundJobs";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import Header from "./Header";
import Footer from "./Footer";


function Navigation () {

const jobTitle = useRef();
const cityTitle = useRef();
const [jobSearch, setJobSearch] = useState("");
const [citySearch, setCitySearch] = useState("");   
const [search, setSearch] = useState([])

const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState("");

function handleSubmit(e) {
    const enteredJobTitle = jobTitle.current.value;
    const enteredCityTitle = cityTitle.current.value;
    setJobSearch(enteredJobTitle)
    setCitySearch(enteredCityTitle)
    //console.log(jobSearch)
   //console.log(citySearch)
   e.preventDefault()
}


useEffect( function () { 
    setIsLoading(true);
    setError("")
    fetch (`http://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${app_id}&app_key=${app_key}&results_per_page=20&what=${jobSearch} &where=${citySearch}&content-type=application/json`)
     .then((res) => {
        if(!res.ok) throw new Error()
        return res.json()
        })
     .then((data) => {
        console.log(data.results)
        if (data.results.length === 0) throw new Error("Please enter a valid search query")
        setSearch(data.results)
       console.log(data)
     })
     .catch(err => setError(err.message))
     .finally(() => setIsLoading(false))
}, [jobSearch, citySearch])


     return <>
        <Header />
        <form className="form-style" onSubmit={handleSubmit}> 
       
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                    
                        <input 
                        className="form-style--jobtitle"
                        type="text" 
                        name="enterJOb"
                        ref={jobTitle}
                        placeholder="Search Job"
                        />

                    </div>
                    <div className="col">
                    
                        <input 
                        className="form-style--citytitle"
                        type="text"
                        name="enterCity"
                        ref={cityTitle}
                        placeholder="City"
                        />

                        <button className="search-button">Search</button>   
                    </div>

            </div>
            </div>
        </form>

        {isLoading && <Loader /> }
        {!isLoading && !error && search.map((jobs) => {
            return <FoundJobs 
                        key={jobs.id} 
                        jobs={jobs}
                     />
                    
        })}

        {error && <ErrorMessage message={error} />}   
        <Footer />
    </>
}

export default Navigation;