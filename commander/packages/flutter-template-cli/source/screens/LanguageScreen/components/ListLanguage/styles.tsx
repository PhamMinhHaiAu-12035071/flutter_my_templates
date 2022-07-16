import { Styles } from 'ink/build/styles';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  } as Styles,
  wrapperContent: {
    display: 'flex',
    flexDirection: 'column',
    borderStyle: 'round',
    borderColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  } as Styles,
  wrapperContent_Title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginY: 1,
  } as Styles,
};

export { styles };
