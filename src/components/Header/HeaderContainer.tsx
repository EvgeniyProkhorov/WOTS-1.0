import React from "react";
import Header from "./Header";
import axios from "axios";
import {AppStateType} from "../Redux/redux-store";
import {connect} from "react-redux";
import {AuthInitStateProps, setAuthUserData} from "../Redux/auth-reducer";

class HeaderContainer extends React.Component<HeaderProps> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                console.log(response)
                if (response.data.resultCode === 0) {
                    let {email, id, login} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render() {
        return <Header isAuth={this.props.auth.isAuth}
                       login={this.props.auth.login}
        />
    }
}

type MapStateProps = {
    auth: AuthInitStateProps

}
type MapDispatchProps = {
    setAuthUserData: (userID: string, email: string, login: string) => void
}
type HeaderProps = MapStateProps & MapDispatchProps

const mapStateToProps = (state: AppStateType) => {
    return {
        auth: state.auth
    }

}

export default connect(mapStateToProps, {
    setAuthUserData
})(HeaderContainer);
