#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
// import meow from 'meow';
import App from './ui';

// const cli = meow(`
// 	Usage
// 	  $ ui-kit-storybook
//
// 	Options
// 		--name  Your name
//
// 	Examples
// 	  $ ui-kit-storybook --name=Jane
// 	  Hello, Jane
// `, {
// 	flags: {
// 		name: {
// 			type: 'string'
// 		}
// 	}
// });

render(<App />);
