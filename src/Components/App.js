import React, { useState } from "react";
import Forms from "./Forms";
import Users from "./Users";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div>
      <Forms setUsers={setUsers} />
      <Users users={users} />
    </div>
  );
}

export default App;
