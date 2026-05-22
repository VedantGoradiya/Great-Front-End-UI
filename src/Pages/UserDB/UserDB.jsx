import React, { useState } from "react";

import "./user.css";

const UserDB = () => {
  const [users, setUsers] = useState([]);

  const [isEdit, setIsEdit] = useState({
    id: "",
    editMode: false,
  });

  const [showForm, setShowForm] = useState(false);

  const [formVal, setFormVal] = useState({
    name: "",
    age: 0,
    occupation: "",
  });

  const [formErr, setFormErr] = useState({
    name: "",
    age: "",
    occupation: "",
  });

  const handleChange = (e) => {
    setFormErr({
      name: "",
      age: "",
      occupation: "",
    });
    const { id, value } = e.target;
    setFormVal((prev) => {
      return { ...prev, [id]: value.trim(), id: new Date().getTime() };
    });
  };

  const validateValues = (values) => {
    if (values.name == "") {
      setFormErr((prev) => {
        return { ...prev, name: "Value cannot be empty" };
      });
      return false;
    }

    if (values.age == 0) {
      setFormErr((prev) => {
        return { ...prev, age: "Value cannot be 0" };
      });
      return false;
    }

    if (values.occupation == "") {
      setFormErr((prev) => {
        return { ...prev, occupation: "Value cannot be empty" };
      });
      return false;
    }

    return true;
  };

  const handleSub = (e) => {
    e.preventDefault();

    const validate = validateValues(formVal);

    if (validate && !formErr.name && !formErr.age && !formErr.occupation) {
      if (isEdit.editMode) {
        const newUser = users.map((val) => {
          if (val.id === isEdit.id) {
            return {
              ...formVal,
            };
          } else {
            return val;
          }
        });

        setUsers(newUser);
      } else {
        setUsers((prev) => [...prev, formVal]);
      }
      setShowForm(false);
    } else {
      console.log("have some error");
    }
  };

  const handleEdit = (id, name, age, occupation) => {
    setIsEdit({ id: id, editMode: true });
    setShowForm(true);
    setFormVal({
      name,
      age,
      occupation,
    });
  };

  return (
    <div className="cont">
      <div className="ctrl">
        <input placeholder="Search user" type="text" />
        <button onClick={() => setShowForm(true)}>Add</button>
      </div>
      {showForm && (
        <div>
          <form className="styled-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                onChange={handleChange}
                value={formVal.name}
                id="name"
                type="text"
                placeholder="Enter your name"
              />
              <span>{formErr.name}</span>
            </div>

            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                onChange={handleChange}
                value={formVal.age}
                id="age"
                type="number"
                placeholder="Enter your age"
              />
              <span>{formErr.age}</span>
            </div>

            <div className="form-group">
              <label htmlFor="occupation">Occupation</label>
              <input
                onChange={handleChange}
                value={formVal.occupation}
                id="occupation"
                type="text"
                placeholder="Enter your occupation"
              />
              <span>{formErr.occupation}</span>
            </div>

            <button onClick={handleSub} type="submit">
              Submit
            </button>
          </form>
        </div>
      )}
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
                <th key={key}>{label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map(({ id, name, age, occupation }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{age}</td>
                <td>{occupation}</td>
                <td>
                  <div>
                    <button
                      onClick={() => handleEdit(id, name, age, occupation)}
                    >
                      Edit
                    </button>
                    <button>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDB;
