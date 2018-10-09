import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {logout} from '../../actions/session_actions';
import Greeting from './greeting';


const mapStateToProps = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  return { currentUser };
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting)
