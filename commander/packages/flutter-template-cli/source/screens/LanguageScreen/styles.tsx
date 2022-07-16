import { Styles } from 'ink/build/styles';
import { Props } from 'ink/build/components/Text';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  } as Styles,
	wrapperControl: {
		display: 'flex',
		flexDirection: 'column',
		marginLeft: 2,
	} as Styles,
	wrapperControl_TextGreen: {
		color: 'green',
		bold: true,
	} as Props,
	wrapperControl_TextQuit: {
		color: 'yellow',
		bold: true,
	} as Props,
};
export { styles };
