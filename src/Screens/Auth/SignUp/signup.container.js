import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import auth from '../../../modules/auth/actions';
import Signup from './SignUp';

const mapStateToProps = (state) => ({ loading: state.authReducer.loading });

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			signup: auth.signup.request
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
