import React from "react";

const Form = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log("submitted");
      }}
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          age
        </label>
        <input id="age" type="number" className="form-control" />
      </div>
      <button className="btn btn-primary">submit</button>
    </form>
  );
};

export default Form;
