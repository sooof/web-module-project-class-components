import React from 'react';

import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import './components/Todo.css'
// import './style.css';
const todolists =[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: true
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]; 

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(){
    super()
    this.state = {
      todolists: todolists
    }
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  handleClearItem = () =>{
    this.setState({
      ...this.state,
      todolists: todolists.filter(item => (!item.completed))
    })
  }

  handleAddItem = item => {
    console.log("App add Item")
    const newTodoItem = {
      task: item,
      id: Date.now(),
      completed: false
    }

    this.setState({
      ...this.state,
      todolists: [...this.state.todolists, newTodoItem]
    })
    console.log("App this.state = ", this.state);
  }
  
  render() {
    console.log("APP ", this.state.todolists)
    return (
      <div className="App">
         <h1>Todo List: MVP</h1>
        <TodoList todolists={this.state.todolists}/>
        <TodoForm handleAddItem={this.handleAddItem} />
        <button onClick={this.handleClearItem} className="clear-btn">Clear Purchased</button>
      </div>
    );
  }
}

export default App;
