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
            [e.target.name]: e.target.value
        });
    };

    submitItem = e => {
        e.preventDefault();
        this.props.addItem(this.state.item);
    }
    resetForm = () => {
        this.setState(this.state)
    }

    render(){
        return(
            <form onSubmit={this.submitItem}>
                <label> Add Todo Item
                <input type="text" 
                value={this.item} 
                name="item" 
                placeholder="Add new item here"
                onChange={this.handleChanges} 
                />
                </label>
                <button onClick={this.resetForm}>Add Item</button>
            </form>
        )
    }
}

export default TodoForm;