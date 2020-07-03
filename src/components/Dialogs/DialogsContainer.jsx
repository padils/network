import Dialogs from './Dialogs';
import { addMessage } from '../../redux/dialog_reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { WithRedirect } from '../../hoc/withRedirect';



let mapStateToProps = (state) => {

    return {
        DialogsPage: state.DialogsPage
    }

};



export default compose(
    connect(mapStateToProps,{addMessage}),
    WithRedirect
)(Dialogs)