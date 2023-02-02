import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
class DetailUser extends React.Component {
    state = {
        user: {}
    }
    async componentDidMount() {
        let id = this.props.match.params.id;

        let res = await axios.get(`https://reqres.in/api/users/${id}`)
        console.log('check res: ', res);
        this.setState({
            user: res && res.data && res.data.data ? res.data.data : {}
        })
    }
    onClickBackUser = () => {
        this.props.history.push(`/user`)
    }
    render() {
        let { user } = this.state;
        let isEmtry = Object.keys(user).length === 0;
        console.log('check user: ', this.props)
        return (
            <>
                <div>User With id: {user.id}</div>
                {isEmtry === false &&
                    <>
                        <div>User's name: {user.first_name} {user.last_name}</div>
                        <div>User's email: {user.email}</div>
                        <div><img src={user.avatar} /></div>
                        <button type="button"
                            onClick={() => this.onClickBackUser()}>Back</button>
                    </>
                }
            </>
        )
    }
}
export default withRouter(DetailUser);