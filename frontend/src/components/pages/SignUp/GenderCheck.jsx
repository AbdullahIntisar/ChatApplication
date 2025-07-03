import React from "react";

const GenderCheck = ({ onCheckBoxChange, selectedGender }) => {
  return (
    <div className="flex ">
      <div className="form-control mt-2">
        <label
          className={`label gap-2 cursor-pointer mr-2 text-white ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === "male"}
            onChange={() => onCheckBoxChange("male")}
          />
        </label>
      </div>

      <div className="form-control mt-2">
        <label
          className={`label gap-2 cursor-pointer text-white ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === "female"}
            onChange={() => onCheckBoxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheck;
