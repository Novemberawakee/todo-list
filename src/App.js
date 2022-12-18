import './App.css';
import image from './check.png';
import imageTwo from './task.png';
import { ToDoList } from './ToDoList';

function App() {
  return (
    <div className='app'>
      <div className='container'>
      <img src={image} width="200px" alt="check"/>
      </div>
      <div className='container'>
      <h1>TO-DO LIST</h1>
      </div>
      <ToDoList/>
      <div className='container'>
      <img src={imageTwo} width="200px" alt="task"/>
      </div>
    </div>
  );
}

export default App;
