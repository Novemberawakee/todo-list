import { Component } from "react";
import todo from './todo.png';

export class ToDoList extends Component {
    state = {
        userInput: "",
        list: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addTask(input) {
        if (input === '') {
            alert ('please enter a task')
        }

        else {
            let ListArray = this.state.list;
        ListArray.push(input)
        this.setState({list: ListArray, userInput: ''})
        }
    }

    deleteTask() {
        let ListArray = this.state.list;
        ListArray = [];
        this.setState ({list: ListArray})
    }

    crossedTask(event) {
        const Li = event.target;
        Li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div className="container">
                    <input type="text"
                    placeholder="What do you need do today?"
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.userInput}/>
                </div>
                <div className="container">
                    <button onClick={() => this.addTask(this.state.userInput)} className='add'>ADD</button>
                </div>
                <ul>
                    {this.state.list.map((task, index) => (
                    <li onClick={this.crossedTask} key={index}>
                        <img src={todo} width="40px" alt="todo"/>
                        {task} </li>
                    ))}
                </ul>
                <div className="container">
                <button onClick={() => this.deleteTask()} className='delete' >DELETE</button>
                </div>
                </form>
            </div>
        )
    }
}