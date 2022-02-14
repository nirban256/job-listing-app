import React from 'react';

const JobList = ({ jobs, keywords, setKeywords }) => {

    return (
        <div>
            {jobs.map(job => (
                <div className="job-container">
                    <div className="main">
                        <div className="company-logo">
                            <img src={job.logo} alt="company-logo" />
                        </div>
                        <div className="description">
                            <div className="names">
                                <span className="company-name">{job.company}</span>
                                <span className="new">{job.new === true ? "NEW!" : ""}</span>
                                <span className="featured">{job.featured === true ? "FEATURED" : ""}</span>
                            </div>
                            <div className="position">
                                <h3>{job.position}</h3>
                            </div>
                            <div className="accessibility">
                                <span className="post-time">{job.postedAt}</span>
                                <span>&nbsp;•&nbsp;</span>
                                <span className="contract">{job.contract}</span>
                                <span>&nbsp;•&nbsp;</span>
                                <span className="location">{job.location}</span>
                            </div>
                        </div>
                    </div>
                    <div className="filter">
                        {/*<button type='submit' className="role">{job.role}</button>
                        <button type='submit' className="level">{job.level}</button>
                        {job.languages.map(language => (
                            <button type="submit" className='language'>{language}</button>
                        ))}
                        <button type='submit' className="tools">{job.tools}</button>*/}
                        {keywords.map((key, id) => (
                            <span onClick={() => setKeywords(key)} key={id}>
                                {key}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default JobList;