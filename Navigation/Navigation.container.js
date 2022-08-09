import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Navigation from './Navigation';

const mapStateToProps = state => ({
  token: state.authReducer.token,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
