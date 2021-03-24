// import logo from './logo.svg';
import './App.css';
import './index.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard } from '@fortawesome/free-solid-svg-icons'
// import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';

function App() {
  return (
    <div className="center-elements">
      <h1>Add yours to do &nbsp; <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon></h1>
      <TodoForm />
      {/* <TodoList /> */}
    </div>
  );
}

export default App;
