import React from "react";
import {connect} from "react-redux";
import {
    followAc, getUsersThunkCreator,
    setCurrentPagePageAC,
    setTotalUsersCountAC,
    setUserAc,
    toggleIsFetchingAC, toggleIsFollowingAC,
    unfollowAc,
} from "../../Redux/usersReducer";

import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {Navigate} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import Dialogs from "../Dialogs/Dialogs";
import {
    getCurrentPage,
    getFollowingInProgress, getIsAuth,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers, getUsersSuper, getUsetsSuper
} from "../../Redux/users-selectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator()
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)

    }

    render() {


        return <>
            {this.props.isFetching ? <Preloader/>: null }
        <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                     followingInProgress={this.props.followingInProgress}
                      />
        </>
    };

}
// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage:state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//         isAuth: state.auth.isAuth
//     }
// }

let mapStateToProps = (state) => {
    return {
        // users: getUsers(state),
        users: getUsersSuper(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage:getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state)
    }
}
let AuthRedirectComponent = withAuthRedirect(UsersContainer)

export default connect(mapStateToProps,{
    follow: followAc,
    unfollow: unfollowAc,
    setUsers: setUserAc,
    setCurrentPage: setCurrentPagePageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    toggleIsFetching: toggleIsFetchingAC,
    followingInProgress: toggleIsFollowingAC,
    getUsersThunkCreator:getUsersThunkCreator
})(AuthRedirectComponent)