import React, { useState } from "react";
import TodoElement from "./TodoElement";

export default function TodoForm() {
  const [inputText, setInputText] = useState("");
  const [elements, setElements] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputText === "") {
      // prevent to create task witouth text
      return;
    } else {
      setShowResult(true);

      // new elements
      const newElement = { id: 1 + Math.random(), text: inputText };
      console.log(newElement);

      // will create the new array with old and new elements
      setElements([...elements, newElement]);

      // will return input state to the original
      setInputText("");
    }
  };

  //this let type in the input ****************
  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  // function to erase elements******************
  const deteleElement = (id) => {
    // create a new array with the element until now
    const currentListTodo = [...elements];

    // creates de new filtered array of elements
    const newListTodo = currentListTodo.filter((item) => item.id !== id);

    // update de list of elements
    setElements(newListTodo);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write your task"
          value={inputText}
          onChange={handleChange}
        />
        <button className="form-btn">Add</button>
      </form>
      <div className="App list" style={showResult ? {} : { display: "none" }}>
        {elements.map((item) => (
          <TodoElement
            key={item.id}
            id={item.id}
            text={item.text}
            deteleElement={() => deteleElement(item.id)}
          />
        ))}
      </div>
    </div>
  );
}
