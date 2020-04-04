import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            item: ''
        };
    }

    handleChanges = e => {
        this.setState({
            item: e.target.value
        });
    };

    submitItem = e => {
        e.preventDefault();
        this.props.addItem(this.state.item);
        this.setState({item: ''});
        
    }
    
    render(){
        return(
            <form onSubmit={this.submitItem}>
                <label forHTML="item"> Add Todo Item</label>
                <input 
                type="text" 
                id="item"
                value={this.state.item} 
                name="item" 
                placeholder="Add new item here"
                onChange={this.handleChanges} 
                />
            
                <button>Add Item</button>
            </form>
        )
    }
}

export default TodoForm;