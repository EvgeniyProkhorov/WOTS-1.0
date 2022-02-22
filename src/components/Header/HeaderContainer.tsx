import React from "react";
import Header from "./Header";
import {AppStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {AuthInitStateProps, setAuthUserData} from "../../Redux/auth-reducer";
import {authMe} from "../../api/api";

class HeaderContainer extends React.Component<HeaderProps> {
    componentDidMount() {
        authMe()
            .then(data => {
                console.log(data)
                if (data.resultCode === 0) {
                    let {email, id, login} = data.data
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
