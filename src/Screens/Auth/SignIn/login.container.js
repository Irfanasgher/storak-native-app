import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import auth from '../../../modules/auth/actions';
import Login from './SignIn';

const mapStateToProps = state => ({loading: state.authReducer.loading});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      login: auth.signin.request,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Login);
