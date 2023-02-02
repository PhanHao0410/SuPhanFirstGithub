import React from "react";
import { withRouter } from "react-router"
import Color from "../HOC/Color";
import logo from '../../assets/images/sieu-xe-14.jpg';
import { connect } from 'react-redux';
import "./Nav.scss";
class Home extends React.Component {
    /* componentDidMount() {
         setTimeout(() => {
             this.props.history.push('/todo')
         }, 3000)
     }*/
    handleClickDeleteUser = (user) => {
        console.log("check delete user: ", user)
        this.props.deleteUserRedux(user)
    }
    handleClickAddUser = () => {
        this.props.addUserRedux();
    }
    render() {
        let listUsers = this.props.dataRedux;
        console.log(">>>check props redux: ", this.props.dataRedux);
        return (
            <>
                <div>Hello Fanpage Home With Phan</div>
                <div><img style={{ width: "300px", height: "200px", marginTop: "20px" }} src={logo} /></div>
                <button type="button" onClick={() => this.handleClickAddUser()}>Add new</button>

                <div>{listUsers && listUsers.length &&
                    listUsers.map((item, index) => {
                        return (
                            <div key={item.id}>{index + 1} - {item.name}
                                &nbsp;<span className="delete-user" onClick={() => this.handleClickDeleteUser(item)}>x</span>

                            </div>
                        )
                    })}
                </div>

            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { dataRedux: state.users }
}
const mapDispatchTopProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: (userAdd) => dispatch({ type: 'Add_User', payload: userAdd })
    }
}


export default connect(mapStateToProps, mapDispatchTopProps)(Color(Home));