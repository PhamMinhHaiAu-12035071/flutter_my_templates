import dotenv from 'dotenv';
import path from 'path';

import { fileURLToPath } from "url"; // the node package 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// Parsing the env file.s
dotenv.config({ path: path.resolve(__dirname, '../../../config/config.env') });

// Interface to load env variables
// Note these variables can possibly be undefined
// as someone could skip these varibales or not setup a .env file at all

interface ENV {
	NODE_ENV: string | undefined;
	PATH_FOLDER_BIN: string | undefined;
	PATH_FOLDER_FLUTTER_TEMPLATE: string | undefined;
	LIST_PATH_ALLOWED_COPY: string | undefined;
	PATH_FOLDER_TEMPLATE: string | undefined;
}

interface Configs {
	NODE_ENV: string;
	PATH_FOLDER_BIN: string;
	PATH_FOLDER_FLUTTER_TEMPLATE: string;
	LIST_PATH_ALLOWED_COPY: string;
	PATH_FOLDER_TEMPLATE: string;
}

// Loading process.env as ENV interface

const getConfig = (): ENV => {
	return {
		NODE_ENV: process.env['NODE_ENV'],
		PATH_FOLDER_BIN: process.env['PATH_FOLDER_BIN'],
		PATH_FOLDER_FLUTTER_TEMPLATE: process.env['PATH_FOLDER_FLUTTER_TEMPLATE'],
		LIST_PATH_ALLOWED_COPY: process.env['LIST_PATH_ALLOWED_COPY'],
		PATH_FOLDER_TEMPLATE: process.env['PATH_FOLDER_TEMPLATE'],
	};
};

// Throwing an Error if any field was undefined we don't
// want our app to run if it can't connect to DB and ensure
// that these fields are accessible. If all is good return
// it as Configs which just removes the undefined from our type
// definition.

const getSanitzedConfig = (config: ENV): Configs => {
	for (const [key, value] of Object.entries(config)) {
		if (value === undefined) {
			throw new Error(`Missing key ${key} in config.env`);
		}
	}
	return config as Configs;
};

const config = getConfig();

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;
