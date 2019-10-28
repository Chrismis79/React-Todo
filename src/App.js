import React from 'react';


import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const taskData = [
  {
    task: " ",
    id: null,
    completed: true
  }
]
 
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      items: taskData,
    };
  }

  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      items: [...this.state.items, newItem]
    });
  };

  toggleItem = id => {
    this.setState({
      items: this.state.items.map(item => {
        if(item.id === id) {
        return {
          ...item, 
          completed: !item.completed
        };
      } else {
        return item;
      }
    })
  });
  };

  clearCompleted = () => {
    this.setState({
      items: this.state.items.filter(item => !item.completed)
    });
  };

  resetForm = () => {
    this.setState(this.state)
  }
  
  render() {
    return (
      <section className="wrapper">
      <div className="header">
        <h2>Christine's Todo App!</h2>
        <TodoForm 
          addItem={this.addItem}/>
      </div>
      <TodoList 
        items={this.state.items}
        toggleItem={this.toggleItem}
        clearCompleted={this.clearCompleted}
        resetForm={this.resetForm}
      />
      </section>
    );
  }
}

export default App;


// [
//   {
//     task: 'Organize Garage',
//     id: 1528817077286,
//     completed: false
//   },
//   {
//     task: 'Bake Cookies',
//     id: 1528817084358,
//     completed: false
//   }
// ];