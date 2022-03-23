import React from 'react'
import {Redirect} from "react-router-dom";
import {AppStateType} from "../Redux/redux-store";
import {connect} from "react-redux";

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = (Component: any) => {
    const RedirectComponent = (props: MapStatePropsType) => {
        if (!props.isAuth) return <Redirect to={'/login'}/>
        return <Component value={100} {...props}/>
    }

    let ConnectedRedirectComponent = connect(mapStateToProps) (RedirectComponent)

    return ConnectedRedirectComponent
}