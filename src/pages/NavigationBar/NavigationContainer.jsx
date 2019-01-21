import { connect } from 'react-redux';
import NavigationBar from './NavigationBar';

const mapStateToProps = state => ({
    role:state.role,
    userInfo: state.userInfo
});

const mapDispatchToProps = dispatch => ({
  setRole: role => dispatch({ type: 'SET_ROLE', role }),
    setuserInfo: userInfo => dispatch({ type: 'SET_USERINFO', userInfo }),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavigationBar);
