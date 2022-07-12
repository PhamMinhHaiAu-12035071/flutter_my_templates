import React from 'react';
import {Box, Text, useInput, useStdout} from 'ink';

const useScreenSize = () => {
	const { stdout } = useStdout();
	const getSize = React.useCallback(
		() => ({
			height: stdout!.rows,
			width: stdout!.columns,
		}),
		[stdout],
	);
	const [size, setSize] = React.useState(getSize);

	React.useEffect(() => {
		const onResize = () => setSize(getSize());
		stdout!.on("resize", onResize);
		return () => {
			stdout!.off("resize", onResize);
		}
	}, [stdout, getSize]);

	return size;
};
const Screen = ({ children }: any) => {
	const { height, width } = useScreenSize();
	const { stdout } = useStdout();

	React.useMemo(() => stdout!.write("\x1b[?1049h"), [stdout]);
	React.useEffect(() => {
		return () => {
			stdout!.write("\x1b[?1049l")
		};
	}, [stdout]);
	useInput(() => {});

	return <Box height={height} width={width} borderColor={"green"} borderStyle={"single"}>{children}</Box>;
};
const App = () => {
	return (
		<Screen>
			<Text>hello</Text>
		</Screen>
	)
};

module.exports = App;
export default App;
