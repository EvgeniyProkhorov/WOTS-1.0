import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/redux-store";
import {ProfileType, setUserProfile} from "../Redux/profileReducer";
import {
    useMatch,
} from "react-router-dom";

class ProfileContainer extends React.Component<ProfileProps> {


    componentDidMount() {
        debugger
        let userID = this.props.match ? this.props.match.params.userID : "2"
        console.log(userID)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
            .then(response => {
                this.props.setUserProfile(response.data)
                console.log(response.data)
            })
    }

    componentDidUpdate(prevProps: Readonly<ProfileProps>, prevState: Readonly<{}>, snapshot?: any) {
        debugger
        if (this.props.match !== prevProps.match) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
                .then(response => {
                    this.props.setUserProfile(response.data)
                    console.log(response.data)
                })
        }
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

type MapStateProps = {
    profile: ProfileType | undefined
}

type WithRouteProps = {
    match: {
        params:
            { userID: string }
    }
    // userId: string
}

type MapDispatchProps = {
    setUserProfile: (profile: any) => void
}

type ProfileProps = MapStateProps & MapDispatchProps & WithRouteProps
const mapStateToProps = (state: AppStateType): MapStateProps => {
    return {
        profile: state.profilePage.profile
    }
}

function withRouter(Component: any) {
    function ComponentWithRouterProp(props: any) {
        let match = useMatch("/profile/:userID")
        return (
            <Component {...props}
                       match={match}
            />
        );
    }

    return ComponentWithRouterProp;
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setUserProfile
})(WithUrlDataContainerComponent);

