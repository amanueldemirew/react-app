import React from "react";
import catagories from "../catagories";


interface Props {
  onSelectCatagory: (catagory: string) => void;
}

const ExpenseFilter = ({ onSelectCatagory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCatagory(event.target.value)}
    >
      <option value="">All catagories</option>
      {catagories.map(catagories => <option key={catagories} value={catagories}> {catagories} </option> )}
    </select>
  );
};

export default ExpenseFilter;
