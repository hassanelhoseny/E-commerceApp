import {ScaledSheet} from 'react-native-size-matters';
import {TINT_COLOR} from '../../utils/constants';

const imageDim = 100;

const styles = ScaledSheet.create({
  wrappper: {
    padding: 5,
  },
  image: {
    width: imageDim,
    height: imageDim,
    borderRadius: 0.5 * imageDim,
  },
  title: {
    textAlign: 'center',
  },
  titleWrapper: {
    height: 50,
  },
  selctedTitle: {
    color: 'blue',
  },
});

export default styles;
