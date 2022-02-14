import React, { useState } from 'react';
import JobList from './components/JobList';
import './App.css';
import Filter from './components/Filter';
import jobs from './components/Jobs';

const App = () => {

  const [requireKeywords, setRequireKeywords] = useState([]);

  const addRequireKeywords = (jobs) => {
    if (!requireKeywords.includes(jobs)) {
      setRequireKeywords([...requireKeywords, jobs]);
    }
  };

  const deleteRequireKeywords = (jobs) => {
    const newKeywords = requireKeywords.filter((key) => key !== jobs);
    setRequireKeywords(newKeywords);
  };

  const clearAllKeywords = () => {
    setRequireKeywords([]);
  };

  return (
    <div className="App">
      <div className='header'>
        {requireKeywords.length > 0 && (
          <Filter keywords={requireKeywords} removeKeywords={deleteRequireKeywords} clearAll={clearAllKeywords} />
        )}
      </div>
      <JobList keywords={requireKeywords} jobs={jobs} setKeywords={addRequireKeywords} />
    </div>
  );
}

export default App;
