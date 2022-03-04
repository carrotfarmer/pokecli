#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const meow_1 = __importDefault(require("meow"));
const ui_1 = __importDefault(require("./ui"));
const cli = (0, meow_1.default)(`
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
`, {
    flags: {
        name: {
            type: "string",
        },
    },
});
(0, ink_1.render)(react_1.default.createElement(ui_1.default, { name: cli.flags.name }));
