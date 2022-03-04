"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const ink_1 = require("ink");
const axios_1 = __importDefault(require("axios"));
const clear_1 = __importDefault(require("clear"));
const App = ({ name = "Stranger" }) => {
    var _a, _b;
    const [pokemonData, setPokemonData] = react_1.default.useState(null);
    // fetch pokemon data with its name using pokeapi
    const pokemon = (name) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
        return axios_1.default
            .get(url)
            .then((response) => {
            return response.data;
        });
    };
    // call useEffect and use store the pokemon data in state
    (0, react_1.useEffect)(() => {
        pokemon(name).then((data) => {
            setPokemonData(data);
        });
    }, [name]);
    (0, clear_1.default)();
    return ((pokemonData && (react_1.default.createElement(ink_1.Box, null,
        react_1.default.createElement(ink_1.Text, null,
            react_1.default.createElement(ink_1.Text, { bold: true, color: "blue" }, ((_a = pokemonData === null || pokemonData === void 0 ? void 0 : pokemonData.name[0]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) + ((_b = pokemonData.name) === null || _b === void 0 ? void 0 : _b.slice(1))),
            "\n",
            react_1.default.createElement(ink_1.Text, { color: "magentaBright" }, Array((pokemonData === null || pokemonData === void 0 ? void 0 : pokemonData.name.length) + 1).join("-")),
            "\n",
            react_1.default.createElement(ink_1.Text, { color: "yellowBright" }, "Metrics:"),
            " ",
            react_1.default.createElement(ink_1.Text, { color: "greenBright", bold: true },
                pokemonData.height / 10,
                "m, ",
                pokemonData.weight / 10,
                " kg"),
            "\n",
            react_1.default.createElement(ink_1.Text, { color: "yellowBright" }, "Type:"),
            " ",
            react_1.default.createElement(ink_1.Text, { color: "greenBright", bold: true }, pokemonData === null || pokemonData === void 0 ? void 0 : pokemonData.types.map((type) => type.type.name).join(", ")),
            "\n\n",
            react_1.default.createElement(ink_1.Text, { color: "yellowBright", bold: true },
                "Stats",
                "\n"),
            react_1.default.createElement(ink_1.Text, { color: "greenBright" }, pokemonData === null || pokemonData === void 0 ? void 0 : pokemonData.stats.map((stat) => `${stat.stat.name}: ${stat.base_stat}`).join("\n")))))) || react_1.default.createElement(ink_1.Text, null, "Loading..."));
};
module.exports = App;
exports.default = App;
