import { Styles } from 'ink/build/styles';
import { Props } from 'ink/build/components/Text';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    borderStyle: 'round',
    borderColor: 'green',
    paddingY: 1,
  } as Styles,
  wrapperTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  } as Styles,
  wrapperTextTitle: {
    backgroundColor: 'blue',
  } as Props,
  wrapperContent: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 1,
  } as Styles,
  wrapperContent_Question: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  } as Styles,
	wrapperControl: {
		display: 'flex',
		flexDirection: 'column',
		marginLeft: 2,
	} as Styles,
	wrapperControl_TextGuide: {
		bold: true,
		underline: true,
		color: 'yellow',
	} as Props,
	wrapperControl_TextGreen: {
		bold: true,
		color: 'green',
	} as Props,
	wrapperControl_TextQuit: {
		color: 'yellow',
		bold: true,
	} as Props,
};

export { styles };
