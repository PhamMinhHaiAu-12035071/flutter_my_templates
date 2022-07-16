import React from 'react';
import { Box, Text } from 'ink';
import { styles } from './styles';
import { ItemLanguage } from '../ItemLanguage/ItemLanguage';
import { Language } from '../../../../constants/language';

interface ListLanguageProps {
	arr?: Array<Language>;
	selectedIndex: number;
}

const ListLanguage = ({ arr = [], selectedIndex}: ListLanguageProps): React.ReactElement => {
	return (
		<Box {...styles.container}>
			<Box {...styles.wrapperContent}>
				<Box {...styles.wrapperContent_Title}>
					<Text>Languages</Text>
				</Box>
				{
					arr?.map((item, index) => {
						return (
							<React.Fragment key={item.id}>
								<ItemLanguage {...item} isSelected={selectedIndex === index} />
							</React.Fragment>
						);
					})
				}
			</Box>
		</Box>
	);
};

export { ListLanguage };

export type {
	ListLanguageProps
}
