import React from 'react';
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
    isAuth:state.auth.isAuth
})
export const WithAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to="/login" />;

            return <Component {...this.props} />;
        }
    }

    const ConnectAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
        RedirectComponent
    );

    return ConnectAuthRedirectComponent;
};


export default WithAuthRedirect;