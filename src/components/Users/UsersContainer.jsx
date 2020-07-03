import { connect } from 'react-redux';
import {
    Followed,
    unFollowed,
    SetUsers,
    SetTotalCount,
    SetPageCount,
    shiftingAjaxRequest,
    shiftFollowedProgress,
    getUsers
} from './../../redux/users_reducer '
import React, { useEffect } from 'react';
import Users from './Users';
import Preloader from '../../parts/Preloader';
import { compose } from 'redux';
import { WithRedirect } from '../../hoc/withRedirect';
import { getUsersS, getTotalCountPage, getUsersPageCount, getAllPage, getShiftingRequest, getFallowingProgress } from './../../redux/users_selection';





const UsersPage = (props) => {



    useEffect(() => {
        props.getUsers(props.UsersPageCount, props.AllPage)
    }, [props.UsersPageCount, props.AllPage,]
    )

    let onClickPage = (pageNumb) => {
        props.getUsers(pageNumb, props.AllPage);
        props.SetPageCount(pageNumb)

    }



    

    return <>


        <Users
            totalCountPage={props.totalCountPage}
            AllPage={props.AllPage}
            UsersPageCount={props.UsersPageCount}
            onClickPage={onClickPage}
            Users={props.Users}
            unFollowed={props.unFollowed}
            Followed={props.Followed}
            fallowingProgress={props.fallowingProgress}
            shiftFollowedProgress={props.shiftFollowedProgress}
            shiftingRequest={props.shiftingRequest}
        />

    </>


}


let mapStateToProps = (state) => {


    return {
        Users: getUsersS(state),
        totalCountPage: getTotalCountPage(state),
        UsersPageCount: getUsersPageCount(state),
        AllPage: getAllPage(state),
        shiftingRequest: getShiftingRequest(state),
        fallowingProgress: getFallowingProgress(state)

    }

};



export default compose(connect(mapStateToProps, {
    Followed,
    unFollowed,
    SetUsers,
    SetTotalCount,
    SetPageCount,
    shiftingAjaxRequest,
    shiftFollowedProgress,
    getUsers,


}),
    WithRedirect)(UsersPage)