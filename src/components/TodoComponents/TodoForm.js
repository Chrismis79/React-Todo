import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            item: ''
        };
    }

    handleChanges = e => {
        e.preventDefault();
        this.props.addItem(this.state.item);
    }

    render(){
        return(
            <form>
                <label> Add Todo Item
                <input type="text" 
                value={this.item} 
                name="item" 
                onChange={this.handleChanges} 
                />
                </label>
                <input type="submit" />
            </form>
        )
    }
}

export default TodoForm;