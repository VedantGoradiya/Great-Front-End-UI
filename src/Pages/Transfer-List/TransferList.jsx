import React, { useState } from "react";
import "./list.css";

const TransferList = () => {
  const [list1, setList1] = useState([
    { id: 1, name: "HTML", check: false },
    { id: 2, name: "JavaScript", check: false },
    { id: 3, name: "CSS", check: false },
    { id: 4, name: "TypeScript", check: false },
  ]);

  const [list2, setList2] = useState([
    { id: 5, name: "React", check: false },
    { id: 6, name: "Angular", check: false },
    { id: 7, name: "Vue", check: false },
    { id: 8, name: "Svelte", check: false },
  ]);

  const handleCheckBoxClick = (e, numb, id) => {
    const tempList = numb == 1 ? list1 : list2;
    const updateMeth = numb == 1 ? setList1 : setList2;
    const temp = tempList.map((val) => {
      if (val.id == id) {
        return { ...val, check: e.target.checked };
      } else {
        return val;
      }
    });
    updateMeth(temp);
  };

  const handleTransAll = (fromList, toList, updateFrom, updateTo) => {
    updateTo((prev) => {
      return [...prev, ...fromList];
    });
    updateFrom([]);
  };

  const handleTransSing = (fromList, toList, updateFrom, updateTo) => {
    const updatedFromList = fromList.filter((val) => !val.check);

    const movedItem = fromList.filter((val) => val.check);

    updateTo([...toList, ...movedItem]);

    updateFrom(updatedFromList);
  };

  return (
    <div>
      <div className="list-cont">
        <div>
          {list1.map((val, index) => (
            <div key={val.id}>
              <label>
                <input
                  className="m-2"
                  defaultChecked={val.check}
                  onChange={(e) => handleCheckBoxClick(e, 1, val.id)}
                  type="checkbox"
                />
                {val.name}
              </label>
            </div>
          ))}
        </div>

        <div>
          <div className="btn-div">
            <button
              onClick={() => handleTransAll(list1, list2, setList1, setList2)}
            >{`>>`}</button>
            <button
              onClick={() => handleTransSing(list1, list2, setList1, setList2)}
            >{`>`}</button>
            <button
              onClick={() => handleTransSing(list2, list1, setList2, setList1)}
            >{`<`}</button>
            <button
              onClick={() => handleTransAll(list2, list1, setList2, setList1)}
            >{`<<`}</button>
          </div>
        </div>

        <div>
          {list2.map((val, index) => (
            <div key={val.id}>
              <label>
                <input
                  className="m-2"
                  defaultChecked={val.check}
                  onChange={(e) => handleCheckBoxClick(e, 2, val.id)}
                  type="checkbox"
                />
                {val.name}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransferList;
