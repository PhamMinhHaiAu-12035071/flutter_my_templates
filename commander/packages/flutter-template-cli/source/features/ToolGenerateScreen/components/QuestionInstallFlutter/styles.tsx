import { Styles } from 'ink/build/styles';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  } as Styles,
  wrapperTitle: {
    display: 'flex',
    flexDirection: 'row',
  } as Styles,
  wrapperConfirm: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  } as Styles,
  wrapperConfirm_Action: {
    display: 'flex',
    flexDirection: 'row',
  } as Styles,
  wrapperConfirm_ActionCircle: {
   marginRight: 1,
  } as Styles,
};

export { styles };
