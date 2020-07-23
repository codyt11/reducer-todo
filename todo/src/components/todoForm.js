import React, { Component } from "react";


class TodoForm extends Component {
    constructor(){
        super();
        this.state = {
            newItem: ""
        }
    }

    handleChanges = e => {
        this.setState({
            newItem: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.newItem);
        this.setState({newTodo: ''});
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.newItem}
                    name="item"
                    onChange={this.handleChanges}
                />
                <button>Add Item</button>
            </form>

            
        );
    }
};

export default TodoForm;