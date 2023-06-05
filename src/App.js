import { useState } from "react";

import AddUser from "./users/AddUser";
import UserList from "./users/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (enteredName, enteredAge) => {
    setUsers((prev) => {
      return [
        ...prev,
        { name: enteredName, age: enteredAge, id: Math.random() * 1000 },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
