import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {ProfileType, setUserProfile} from "../../Redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userID = this.props.match.params.userID ? this.props.match.params.userID : "2"
        usersAPI.getProfile(userID)
            .then(response => {
                this.props.setUserProfile(response.data)
                console.log(response.data)
            })
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match !== prevProps.match) {
            usersAPI.getProfile()
                .then(response => {
                    this.props.setUserProfile(response.data)
                    console.log(response.data)
                })
        }
    }

    render() {
        console.log(this.props)
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

type PropsType = RouteComponentProps<PathParamsType> & OwnProfileProps

type PathParamsType = {
    userID: string
}

type MapStateProps = {
    profile: ProfileType | undefined
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

// type WithRouteProps = {
//     match: {
//         params:
//             { userID: string }
//     }
//     // userId: string
// }

type MapDispatchProps = {
    setUserProfile: (profile: ProfileType) => void
}

type OwnProfileProps = MapStateProps & MapDispatchProps
const mapStateToProps = (state: AppStateType): MapStateProps => {
    return {
        profile: state.profilePage.profile
    }
}

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

export default connect(mapStateToProps, {
    setUserProfile
})(WithUrlDataContainerComponent);

