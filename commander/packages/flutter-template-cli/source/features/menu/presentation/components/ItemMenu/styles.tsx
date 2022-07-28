import { Styles } from 'ink/build/styles';
import { Props } from 'ink/build/components/Text';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginX: 2,
  } as Styles,
  wrapperId: {
    display: 'flex',
    flexBasis: '5%',
    flexDirection: 'row',
  } as Styles,
  wrapperText: {
    display: 'flex',
    flexBasis: '95%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  } as Styles,
  textDefaultColor: {
    color: 'white',
  } as Props,
  textActiveColor: {
    color: 'green',
  } as Props,
};

export { styles };
