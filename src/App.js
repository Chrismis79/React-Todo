import React from 'react';

const taskData = [
  {
    task: "Build React Todo App",
    id: 10282019,
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
      items: taskData
    };
  }

  addItem = itemName => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      items: [...this.state.items, newItem]
    });
  };
  
  render() {
    return (
      <div>
        <h2>Christine's Todo App!</h2>
        <TodoForm addItem={this.addItem}/>
      </div>
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