#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './ui';

meow(`
	Usage
	  $ flutter-template-cli

	Options
		--name  Your name

	Examples
	  $ flutter-template-cli --name=Jane
	  Hello, Jane
`, {
	flags: {
		name: {
			type: 'string'
		}
	}
});

render(<App />);
