import React, { FC, useEffect } from "react";
import { Box, Text } from "ink";
import axios, { AxiosResponse } from "axios";
import clear from "clear";

interface Type {
	slot: number;
	type: {
		name: string;
	};
}

interface Stat {
	base_stat: number;
	effort: number;
	stat: {
		name: string;
	};
}

interface PokemonData {
	name: string;
	height: number;
	weight: number;
	types: Type[];
	stats: Stat[];
}

const App: FC<{ name?: string }> = ({ name = "Stranger" }) => {
	const [pokemonData, setPokemonData] = React.useState<PokemonData | null>(
		null
	);

	// fetch pokemon data with its name using pokeapi
	const pokemon = (name: string): Promise<PokemonData> => {
		const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

		return axios
			.get<PokemonData>(url)
			.then((response: AxiosResponse<PokemonData>) => {
				return response.data;
			});
	};

	// call useEffect and use store the pokemon data in state
	useEffect(() => {
		pokemon(name).then((data: PokemonData) => {
			setPokemonData(data);
		});
	}, [name]);

	clear();
	return (
		(pokemonData && (
			<Box>
				<Text>
					<Text bold color="blue">
						{pokemonData?.name[0]?.toUpperCase() + pokemonData!.name?.slice(1)}
					</Text>
					{"\n"}
					{/* Display a divider */}
					<Text color="magentaBright">
						{Array(pokemonData?.name.length + 1).join("-")}
					</Text>
					{"\n"}
					<Text color="yellowBright">Metrics:</Text>{" "}
					<Text color="greenBright" bold>
						{pokemonData!.height / 10}m, {pokemonData!.weight / 10} kg
					</Text>
					{"\n"}
					<Text color="yellowBright">Type:</Text>{" "}
					<Text color="greenBright" bold>
						{/* Display the pokemon's types */}
						{pokemonData?.types.map((type: Type) => type.type.name).join(", ")}
					</Text>
					{"\n\n"}
					{/* Display the pokemon's stats */}
					<Text color="yellowBright" bold>
						Stats{"\n"}
					</Text>
					<Text color="greenBright">
						{pokemonData?.stats
							.map((stat: Stat) => `${stat.stat.name}: ${stat.base_stat}`)
							.join("\n")}
					</Text>
				</Text>
			</Box>
		)) || <Text>Loading...</Text>
	);
};

module.exports = App;
export default App;
