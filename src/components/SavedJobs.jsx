
function SavedJobs() {

    return (
        <>
            <h4>Saved Jobs</h4>
        </>
    )
}

export default SavedJobs;

export function saveJobsLoader() {
        
    fetch(`http://localhost:4000/savedjobs`)
        .then((res) => {
           if(!res.ok) throw new Error()
           return res.json()
           })
        .then((data) => {
           if (data.length === 0) throw new Error("You don't have any saved Jobs")
        })
        .catch(err => setError(err.message))
}