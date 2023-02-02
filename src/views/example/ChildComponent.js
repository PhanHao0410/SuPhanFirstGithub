import React from "react";
import "./childCoponent.scss"


class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    handleOnclickDelete = (job) => {
        // alert("click me")
        this.props.deleteAjob(job)
    }

    render() {
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        return (
            <>

                {showJobs === false ?
                    <div>
                        <button
                            onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <><div className="job-lists" >
                        {
                            arrJobs.map((arrJob, index) => {
                                return (
                                    <div key={arrJob.id}>
                                        {arrJob.title} -{arrJob.salary}
                                        <></> <span className="delete-user" onClick={() => this.handleOnclickDelete(arrJob)}>x</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>}
            </>
        )
    }
}

export default ChildComponent;