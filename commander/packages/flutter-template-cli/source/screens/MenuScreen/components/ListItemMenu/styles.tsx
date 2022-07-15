import { Styles } from "ink/build/styles"
import { Props } from 'ink/build/components/Text';

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
		paddingTop: 1,
		paddingBottom: 1,
	} as Styles,
	wrapperControl: {
		display: 'flex',
		flexDirection: 'column',
		marginLeft: 2,
	} as Styles,
	wrapperControl_TextEnter: {
		color: 'green',
		bold: true,
	} as Props,
	wrapperContent_TextQuit: {
		color: 'yellow',
		bold: true,
	} as Props,
}

export {
	styles
}
