import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import slider from '../../modules/sliderImages/actions';
import SlickSlider from './SlickSlider';

const mapStateToProps = state => ({
  sliderImages: state.sliderReducer.sliderImages,
  loading: state.sliderReducer.loading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      slider: slider.getSliderImages.request,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(SlickSlider);
