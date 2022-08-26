import React, { useEffect, useRef } from "react";
import { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const Patient = (props) => {
  //   const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const inputNameRef = useRef();
  const inputDateRef = useRef();
  const inputGenderRef = useRef();
  const inputBirthPlaceRef = useRef();
  const inputBloodGroupRef = useRef();
  const inputHeightRef = useRef();
  const inputWeightRef = useRef();

  //   useEffect(() => {}, []);
  const cancelHandler = (event) => {
    event.preventDefault();
    navigate("/Home");
  };
  const saveHandler = (event) => {
    event.preventDefault();
    console.log(inputNameRef.current.value);
    axios
      .post("http://localhost:9000/patient-Details", {
        Name: inputNameRef.current.value,
        Date: inputDateRef.current.value,
        Gender: inputGenderRef.current.value,
        Place_of_birth: inputBirthPlaceRef.current.value,
        Blood_Group: inputBloodGroupRef.current.value,
        Height: inputHeightRef.current.value,
        Weight: inputWeightRef.current.value,
      })
      .then((Response) => {
        // setUsers(Response.data);
        navigate("/Home");
      })
      .catch(console.error());
  };

  return (
    <div className="row ">
      <div className="col-6 offset-3">
        <div className="card">
          <h1>Patient Details</h1>
          <div className="card-body">
            <form>
              <label htmlFor="Name">Name of the Patient:</label>
              <input
                type="text"
                required
                ref={inputNameRef}
                className="form-control"
                name="name"
                id="name"
              ></input>

              <br />

              <label htmlFor="Date">Date:</label>
              <input
                type="date"
                className="form-control"
                ref={inputDateRef}
                name="date"
                id="date"
              ></input>

              <br />

              <h6>Gender</h6>

              <select
                id="gender"
                className="form-control  "
                ref={inputGenderRef}
              >
                <option value="male">Male</option>
                <option>Female</option>
                <option>Not to disclose</option>
              </select>

              <br />
              <label htmlFor="BirthPlace">Place of Birth</label>
              <input
                type="text"
                ref={inputBirthPlaceRef}
                className="form-control"
                name="BirthPlace"
                id="BirthPlace"
              ></input>

              <br />

              <h6>Blood Group:</h6>

              <select
                id="group"
                className="form-control"
                ref={inputBloodGroupRef}
              >
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>

              <br />

              <label htmlFor="height"> Height :</label>
              <input
                type="number"
                required
                name="height"
                step="0.05"
                ref={inputHeightRef}
                className="form-control"
              ></input>

              <br />

              <label htmlFor="weight"> Weight :</label>
              <input
                type="number"
                required
                name="weight"
                ref={inputWeightRef}
                step="0.05"
                className="form-control"
              ></input>
              <br />
              <div className="row">
                <button
                  className="btn btn-primary offset-1 col-4 "
                  onClick={saveHandler}
                >
                  Save
                </button>
                <button
                  className="btn btn-danger offset-2 col-4"
                  onClick={cancelHandler}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patient;
