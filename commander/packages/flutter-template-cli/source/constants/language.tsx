interface Language {
	id: string;
	name: string;
}

const languages: Array<Language> = [
	{
		id: '0',
		name: 'English',
	},
	{
		id: '1',
		name: 'Vietnamese',
	},
	{
		id: '2',
		name: 'Japanese',
	}
];

export {
	languages
}

export type {
	Language
}
