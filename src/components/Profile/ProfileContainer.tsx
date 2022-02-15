import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/redux-store";
import {ProfileType, setUserProfile} from "../Redux/profileReducer";

class ProfileContainer extends React.Component<ProfileProps> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
                console.log(response.data)
            })
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

type MapDispatchProps = {
    setUserProfile: (profile: any) => void
}

type ProfileProps = MapStateProps & MapDispatchProps
const mapStateToProps = (state: AppStateType): MapStateProps => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {
    setUserProfile
})(ProfileContainer);

