import React from "react";
import { toast } from "react-toastify";
class AddComponent extends React.Component {
    state = {
        title: '',
        salary: ''
    }
    hadleOnChangetitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    hadleOnChangesalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    hadleSubmit = (event) => {
        event.preventDefault()
        if (!this.state.title || !this.state.salary) {
            toast.error('ERROR')
            return;
        }
        console.log("check data: ", this.state);
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1000),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary: ''
        })
    }


    render() {
        return (
            <form>

                <label htmlFor="fname">Job's title: </label><br />
                <input type={'text'} value={this.state.title}
                    onChange={(event) => this.hadleOnChangetitleJob(event)}
                /><br />
                <label htmlFor="lname">Salary: </label><br />
                <input type="text" value={this.state.salary}
                    onChange={(event) => this.hadleOnChangesalary(event)}
                /><br /><br />
                <input type="submit" style={{ color: 'red' }}
                    onClick={(event) => this.hadleSubmit(event)}
                />
            </form>
        )
    }
}
export default AddComponent;
