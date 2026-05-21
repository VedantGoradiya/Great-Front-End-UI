import { useState } from "react";
import { users } from "../../constants/dataTable";

import "./dataTable.css";

export default function DataTable() {
  const [message, setMessage] = useState("Data Table");

  const [currPage, setCurrPage] = useState(1);

  const [usersPerPage, setUsersPerPage] = useState(5);

  const [sortType, setSortType] = useState("asc");

  const [sortCol, setSortCol] = useState(null);

  const handleSort = (colName) => {
    setSortCol(colName);

    setSortType((prev) =>
      colName === sortCol && prev === "asc" ? "desc" : "asc",
    );
  };

  const sortedUserList = [...users].sort((a, b) => {
    if (a[sortCol] < b[sortCol]) return sortType == "asc" ? -1 : 1;
    if (a[sortCol] > b[sortCol]) return sortType == "asc" ? 1 : -1;

    return 0;
  });

  const lastPage = currPage * usersPerPage;
  const firstPage = lastPage - usersPerPage;

  const usersToShow = sortedUserList.slice(firstPage, lastPage);

  const totalPage = Math.ceil(users.length / usersPerPage);

  const handleNext = () => {
    if (currPage < totalPage) {
      setCurrPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currPage == 1) return;
    setCurrPage((prev) => prev - 1);
  };

  return (
    <div className="cont">
      <h1>{message}</h1>
      <div className="main-div">
        <div>
          <table>
            <thead>
              <tr>
                {[
                  { label: "ID", key: "id" },
                  { label: "Name", key: "name" },
                  { label: "Age", key: "age" },
                  { label: "Occupation", key: "occupation" },
                ].map(({ label, key }) => (
                  <th onClick={() => handleSort(key)} key={key}>
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {usersToShow.map(({ id, name, age, occupation }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{age}</td>
                  <td>{occupation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="ctrl">
          <div className="select-styl">
            <label>Select users per page</label>
            <select onChange={(e) => setUsersPerPage(e.target.value)}>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
            </select>
          </div>
          <div className="btn-ctrl">
            <button onClick={handlePrev}>Prev</button>
            <p>
              {currPage} of {totalPage}
            </p>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
