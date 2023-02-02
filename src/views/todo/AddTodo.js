import React from "react";
import { toast } from 'react-toastify';
class AddTodo extends React.Component {
    state = {
        title: ''
    }
    handleOnchangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleAddTodo = () => {
        if (!this.state.title) {
            toast.error(`Missing title's Todo!:(`);
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 1000),
            title: this.state.title
        }
        this.props.addNewTodo(todo);
        this.setState({
            id: '',
            title: ''
        })
    }
    render() {
        let { title } = this.state
        return (
            <div className="listTodo-add">
                <input type='text' value={title}
                    onChange={(event) => this.handleOnchangeTitle(event)}
                ></input>
                <button onClick={() => this.handleAddTodo()}>Add</button>
            </div>
        )
    }
}
export default AddTodo;