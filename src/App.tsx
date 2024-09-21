import { useEffect, useRef, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
}

function App() {
  const [user, setUser] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUser(res.data));
  }, []);

  return (
    <ul>
      {user.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}

export default App;
