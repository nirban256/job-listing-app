import React, { useState, useEffect } from 'react'
import JobList from './JobList';

const Main = ({ keywords, jobs, setKeywords }) => {

    const [filteredJobs, setfilteredJobs] = useState([]);

    const modifiedJobs = () => {
        if (keywords) {
            const newJobs = jobs.filter((job) => {
                return keywords.every((key) => {
                    return (
                        job.role === key ||
                        job.level === key ||
                        job.languages.includes(key) ||
                        job.tools.includes(key)
                    );
                });
            });
            setfilteredJobs(newJobs);
        }
        else {
            setfilteredJobs(jobs);
        }
    };

    return (
        <div className='main'>
            <JobList keywords={keywords} jobs={jobs} setKeywords={setKeywords} />;
        </div>
    )
}

export default Main;