import React, { useState, useEffect } from "react";

import "./jobBoard.css";

const JobBoard = () => {
  const [jobCodes, setJobCodes] = useState([]);
  const [jobData, setJobData] = useState([]);
  const [currCount, setCurrCount] = useState(6);

  const fetchCodes = async () => {
    try {
      const data = await fetch(
        "https://hacker-news.firebaseio.com/v0/jobstories.json",
      );
      const resp = await data.json();

      setJobCodes(resp);

      const firstLoad = resp.slice(0, currCount);

      getJobes(firstLoad);
    } catch (error) {
      console.error("Error fetching job codes:", error);
    }
  };

  const getJobes = async (list) => {
    try {
      const promises = list.map(async (id) => {
        const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;

        const resp = await fetch(url);
        return resp.json();
      });

      const data = await Promise.all(promises);

      console.log(data)

      setJobData((prev) => [...prev, ...data]);
    } catch (error) {
      console.error("Error fetching job data:", error);
    }
  };

  const handleClick = () => {
    setCurrCount((prev) => prev + 6);
    const newCodes = jobCodes.slice(currCount, currCount + 6);

    getJobes(newCodes)
  };

  useEffect(() => {
    fetchCodes();
  }, []);

  return (
    <div className="main">
      <div className="cont">
        <h2 className="headline">Hacker News Jobs Board</h2>
        <div className="job">
          {jobData &&
            jobData.map((val) => (
              <div className="job-info" key={val.id}>
                <a className="link" href={val.url}>
                  {val.title}
                </a>
                <div>
                  <p>
                    By {val.by} . {new Date(val.time).toLocaleDateString()} .{" "}
                    {new Date(val.time).toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
        </div>
        <div>
          <button onClick={handleClick} className="button">
            Load more jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobBoard;
