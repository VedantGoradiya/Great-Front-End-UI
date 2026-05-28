import React, { useRef, useState } from "react";

const suggestions = [
  "Apple",
  "Banana",
  "Blueberry",
  "Grape",
  "Lemon",
  "Mango",
  "Orange",
  "Peach",
  "Pear",
  "Pineapple",
  "Strawberry",
  "Watermelon",
];

const AutoComplete = () => {
  const [searchQry, setSearchQry] = useState("");
  const [filtered, setFiltered] = useState([]);

  const debounce = (fn, dly) => {
    let timer;

    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, dly);
    };
  };

  const handleChange = (e) => {
    setSearchQry(e.target.value);
    deBouncedFilter.current(e.target.value);
  };

  const handleFilter = (query) => {
    if (!query) {
      setFiltered([]);
      return;
    }
    const res = suggestions.filter((val) =>
      val.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
    );

    setFiltered(res);
  };

  const deBouncedFilter = useRef(debounce(handleFilter, 1000));

  return (
    <div className="main-div">
      <div>
        <input value={searchQry} onChange={handleChange} type="text" />
      </div>
      <div>
        {filtered.map((val, id) => (
          <div key={id}>{val}</div>
        ))}
      </div>
    </div>
  );
};

export default AutoComplete;
