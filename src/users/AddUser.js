import { useState, useRef } from "react";

import Card from "../common/Card";
import Button from "../common/Button";
import ErrorModal from "../common/ErrorModal";

import styles from "./css/AddUser.module.css";

const AddUser = (props) => {
  const [error, setError] = useState("");
  const nameRef = useRef();
  const ageRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const Name = nameRef.current.value;
    const Age = ageRef.current.value;
    if (Name.trim().length === 0 || Age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+Age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.onAddUser(Name, Age);

    nameRef.current.value = null;
    ageRef.current.value = null;
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Card className={styles.input}>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" ref={nameRef} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" ref={ageRef} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
