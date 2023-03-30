#!/usr/bin/env node

import React from "react";
import { render } from "ink";
import meow from "meow";
import App from "./ui";

const cli = meow(
	`
	Usage
	  $ pokecli

	Options
		--name The name of the pokemon 

	Examples
	  $ pokecli --name=charmander
		Charmander
		----------
		Metrics: 0.6m, 8.5 kg
		Type: fire

		Stats
		hp: 39
		attack: 52
		defense: 43
		special-attack: 60
		special-defense: 50
		speed: 65
`,
	{
		flags: {
			name: {
				type: "string",
			},
		},
	}
);

render(<App name={cli.flags.name} />);
