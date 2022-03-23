import React from 'react'

export const withAuthRedirect = (Component: any) => {
    const RedirectComponent = (props: any) => {
        return <Component value={100} {...props}/>
    }

    return RedirectComponent
}