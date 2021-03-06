import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {ProfileType, getUserProfileTC} from "../../Redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userID = this.props.match.params.userID ? this.props.match.params.userID : "2"
        this.props.getUserProfileTC(userID)
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match !== prevProps.match) {
            this.props.getUserProfileTC('2')
        }
    }

    render() {
        console.log(this.props)
        return (
            <Profile profile={this.props.profile}
                // isAuth={this.props.isAuth}
            />
        )
    }
}

type PropsType = RouteComponentProps<PathParamsType> & OwnProfileProps

type PathParamsType = {
    userID: string
}

type MapStateProps = {
    profile: ProfileType | undefined
    // isAuth: boolean
}

type MapDispatchProps = {
    getUserProfileTC: (userID: string) => void
}

type OwnProfileProps = MapStateProps & MapDispatchProps
const mapStateToProps = (state: AppStateType): MapStateProps => {
    return {
        profile: state.profilePage.profile,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileTC}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

// let WithUrlDataContainerComponent = withRouter(ProfileContainer)

// export default withAuthRedirect(connect(mapStateToProps, {
//     getUserProfileTC
// })(WithUrlDataContainerComponent));

// type WithRouteProps = {
//     match: {
//         params:
//             { userID: string }
//     }
//     // userId: string
// }

// function withRouter(Component: any) {
//     function ComponentWithRouterProp(props: any) {
//         let match = useMatch("/profile/:userID")
//         return (
//             <Component {...props}
//                        match={match}
//             />
//         );
//     }
//
//     return ComponentWithRouterProp;
// }

// let WithUrlDataContainerComponent = withRouter(ProfileContainer)

