import { useEffect, useRef, useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [catagory, setCatagory] = useState("");

  return (
    <div>
      <select className="form-select" onChange={(event) => setCatagory(event.target.value)}>
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="HouseHold">HouseHold</option>
      </select>
      <ProductList catagory = {catagory} />
    </div>
  );
}

export default App;
