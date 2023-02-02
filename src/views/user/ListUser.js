import axios from "axios";
import React from "react";
import "./ListUser.scss";
import { withRouter } from "react-router-dom";
class ListUser extends React.Component {
    state = {
        listUser: []
    }
    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=2')
        console.log('>>>check api: ', res)
        this.setState({
            listUser: res && res.data && res.data.data ? res.data.data : []
        })
    }
    onClickUser = (user) => {
        this.props.history.push(`/user/${user.id}`)
    }
    render() {
        let { listUser } = this.state;
        console.log("check history: ", this.props);
        return (

            <div className="list-user-container">
                <div className="title">List User API</div>
                <div className="list-user-content">
                    {listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <div className="child" key={item.id}
                                    onClick={() => this.onClickUser(item)}>
                                    <span>{index + 1} - {item.first_name} {item.last_name}</span></div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default withRouter(ListUser);