import React, { useEffect, useRef } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Administer = () => {
  const navigate = useNavigate();
  const inputPatientNameRef = useRef();
  const inputDateRef = useRef();
  const inputDateAdministeredRef = useRef();
  const [state, setState] = useState({
    values: [],
  });
  const cancelDataHandler = (event) => {
    event.preventDefault();
    navigate("/Home");
  };

  const saveDataHandler = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    {
      axios
        .get("http://localhost:9000/patient-Details")
        .then(function (res) {
          console.log(res.data);
          setState({
            values: [...res.data],
          });
          console.log(state);
          return res.json;
        })
        .then((json) => {});
    }
  }, []);
  return (
    <div className="row">
      <div className="drop-down col-6 offset-3 border">
        <p>Select the Name of the Patient :</p>
        <select className="form-control" ref={inputPatientNameRef}>
          {state.values.map((obj) => {
            console.log(obj);

            return (
              <option key={obj.id} value={obj.id}>
                {obj.Name}
              </option>
            );
          })}
        </select>
        <br />
        <label>Date of Birth:</label>
        <input type="date" className="form-control" ref={inputDateRef}></input>

        <br />
        <h6>Vaccination:</h6>
        <select htmlFor="vaccination" className="form-control">
          <option>Vaccination Dose 1</option>
          <option>Vaccination Dose 2</option>
          <option>Vaccination Dose 3</option>
        </select>
        <br />
        <label htmlFor="date">Date Administered:</label>
        <input
          type="date"
          max={"2022 - 08 - 26"}
          className="form-control"
          ref={inputDateAdministeredRef}
          // max="08 / 26 / 2022"
        ></input>
        <br />
        <label htmlFor="Brand-name">Brand-Name</label>
        <input className="form-control" type="text"></input>
        <br />
        <label htmlFor="Given-at">Name of the Hospital:</label>
        <input className="form-control" type="text"></input>

        <br />

        <div className="row">
          <div className="col-12">
            <button
              className="btn btn-primary  col-4"
              onSubmit={saveDataHandler}
            >
              Save
            </button>
            <button
              className="btn btn-danger offset-2 col-4"
              onClick={cancelDataHandler}
            >
              Cancel
            </button>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Administer;

// const patient = {
//   vaccineAdminister : {
//     first :{
//       name :"",
//       date: ""
//     },
//     second : {

//     }
//   }
// }
