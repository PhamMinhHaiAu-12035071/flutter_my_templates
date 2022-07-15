import React from "react";
import {Image} from '@commander/ui-kit';
import {styles} from "./styles";

const Logo = (): React.ReactElement => {
	return (
		<Image {...styles.image} />
	)
}

export {
	Logo
}
