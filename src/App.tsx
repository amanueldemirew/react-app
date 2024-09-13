import React, { useState } from "react";

const App = () => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  const[person, setPerson] =useState(
    {
       firstname: '',
       lastname: ''
    }
  )
  const [isLoading, setLoading] = useState(false);
  return <div></div>;
};

export default App;
