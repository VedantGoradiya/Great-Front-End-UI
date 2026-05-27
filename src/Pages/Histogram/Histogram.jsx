import React, { useEffect, useState } from "react";
import "./graph.css";

const API_URL = "https://dummyjson.com/users?limit=100&select=birthDate";

const Histogram = () => {
  const [data, setData] = useState({});

  const fetchData = async () => {
    const resp = await fetch(API_URL);
    const data = await resp.json();

    let birthYearFreq = {};

    data.users.forEach((val) => {
      const year = new Date(val.birthDate).getFullYear();
      birthYearFreq[year] = (birthYearFreq[year] ?? 0) + 1;
    });

    setData(birthYearFreq);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Graph data={data} />
    </div>
  );
};

const Graph = ({ data }) => {
  const years = Object.keys(data);

  return (
    <div className="main-div">
      <div className="graph-cont">
        {years.map((val, id) => (
          <div className="graph">
            <span>{data[val]}</span>
            <div style={{
                height: `${data[val] * 10}px`
            }} className="bar"></div>
            <span>{val}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Histogram;
