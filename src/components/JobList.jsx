import React from 'react';

const JobList = ({ jobs, keywords, setKeywords }) => {

    return (
        <div>
            {jobs.map((j) => (
                <div className="j-container">
                    <div className="main">
                        <div className="company-logo">
                            <img src={j.logo} alt="company-logo" />
                        </div>
                        <div className="description">
                            <div className="names">
                                <span className="company-name">{j.company}</span>
                                <span className="new">{j.new === true ? "NEW!" : ""}</span>
                                <span className="featured">{j.featured === true ? "FEATURED" : ""}</span>
                            </div>
                            <div className="position">
                                <h3>{j.position}</h3>
                            </div>
                            <div className="accessibility">
                                <span className="post-time">{j.postedAt}</span>
                                <span>&nbsp;•&nbsp;</span>
                                <span className="contract">{j.contract}</span>
                                <span>&nbsp;•&nbsp;</span>
                                <span className="location">{j.location}</span>
                            </div>
                        </div>
                    </div>
                    <div className="keywords">
                        <span type='submit' className="role">{j.role}</span>
                        <span type='submit' className="level">{j.level}</span>
                        {j.languages.map(language => (
                            <span type="submit" className='language'>{language}</span>
                        ))}
                        <span type='submit' className="tools">{j.tools}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default JobList;