import { Styles } from 'ink/build/styles';
import { Props } from 'ink/build/components/Text';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  } as Styles,
  wrapperPointer: {
    justifyContent: 'flex-end',
    flexBasis: '40%',
  } as Styles,
  wrapperDivider: {
    flexBasis: '5%',
  } as Styles,
  wrapperContent: {
    justifyContent: 'flex-start',
    width: '55%',
  } as Styles,
  textDefaultColor: {
    color: 'white',
  } as Props,
  textActiveColor: {
    color: 'green',
  } as Props,
};

export { styles };
