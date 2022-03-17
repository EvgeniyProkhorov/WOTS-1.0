import React from "react";
import Header from "./Header";
import {AppStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {AuthInitStateProps, getAuthUserTC} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component<HeaderProps> {
    componentDidMount() {
        this.props.getAuthUserTC()
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
    getAuthUserTC: () => void
}
type HeaderProps = MapStateProps & MapDispatchProps

const mapStateToProps = (state: AppStateType) => {
    return {
        auth: state.auth
    }

}

export default connect(mapStateToProps, {
    getAuthUserTC
})(HeaderContainer);
