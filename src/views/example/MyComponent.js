import React from "react";
import AddComponent from "./AddComponent";
import ChildComponent from "./ChildComponent";
import { toast } from 'react-toastify';


class MyComponent extends React.Component {
    state = {
        arrJobs: [
            { id: '123Job1', title: 'Developers', salary: '500' },
            { id: '123Job2', title: 'Tester', salary: '400' },
            { id: '123Job3', title: 'Project Manager', salary: '1000' }
        ]
    }
    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
        toast.success('Add Job Success')
    }
    deleteAjob = (job) => {
        let currenJobs = this.state.arrJobs;
        currenJobs = currenJobs.filter(currenJob => currenJob.id !== job.id);

        this.setState({
            arrJobs: currenJobs
        })
    }

    render() {
        console.log('>>>render call: ', this.state)

        return (
            <>
                <p>
                    Hello from Component with Phan
                </p>
                <AddComponent
                    addNewJob={this.addNewJob}
                />

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAjob={this.deleteAjob}
                />

            </>
        )
    }
}
export default MyComponent;