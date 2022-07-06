#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
// import meow from 'meow';
import App from './ui';

// const cli = meow(`
// 	Usage
// 	  $ image-cli-storybook
//
// 	Options
// 		--name  Your name
//
// 	Examples
// 	  $ image-cli-storybook --name=Jane
// 	  Hello, Jane
// `, {
// 	flags: {
// 		name: {
// 			type: 'string'
// 		}
// 	}
// });

render(<App />);
