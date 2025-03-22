import { useEffect, useState } from "react";
import Header from "./Header";

function Tasks() {
  const [inputValue, setInputValue] = useState("teste");

  const [messages, setMessage] = useState([
    "Hello world",
    "FSC isn the best course in the world",
    "I love React",
  ]);

  //componentDidMount
  useEffect(() => {
    console.log("Mounting...");
  }, []);

  function handleButtonClick() {
    setMessage([...messages, inputValue]);
  }

  return (
    <div>
      {messages.lenght <= 2 && (
        <Header>
          <h1>Add a tasks</h1>
        </Header>
      )}
      <input
        className="input"
        type="text"
        placeholder="Creatr your task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="button" onClick={handleButtonClick}>
        Add task
      </button>

      <Header>
        <h1>My tasks</h1>
      </Header>
      <div>
        <ul>
          {messages.map((messages) => {
            return <li>{messages}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Tasks;
