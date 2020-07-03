import { addPostAction } from '../../../redux/profile_reducer';
import { connect } from 'react-redux';
import MyPost from './MyPost';
import { compose } from 'redux';




let mapStateToProps = (state) => {

    return {
        Post: state.ProfilePage.Post,
        
    }

};

let mapDispatchToProps = (dispatch) => {

    return {
       
        addPostAction: (values) => {

            dispatch(addPostAction(values))
        }


    }

};



export default compose( connect(mapStateToProps, mapDispatchToProps))(MyPost)