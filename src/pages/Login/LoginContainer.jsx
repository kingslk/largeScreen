import { connect } from 'react-redux';
import Login from './Login';

const mapStateToProps = state => ({
    role:state.role
});

const mapDispatchToProps = dispatch => ({
  setRole: role => dispatch({ type: 'SET_ROLE', role }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
