import { API_URL } from "../configs/default-api"

export default function useGames() {

	async function getGames() {
		try {
			const response = await fetch(`http://localhost:3001/games`)
			console.log(response)

			if (response.ok) {
				const data = await response.json()
				console.log(data)
				return data;
			}
			console.error('Erro ao retornar dados sobre jogos')
		} catch (e) {
			console.error(e)
		}
	}

	async function getFeaturedGames(index: number) {
		try {
			const response = await fetch(`http://localhost:3001/games?featured=true_start=${index}&_limit=3`);

			if (response.ok) {
				const data = await response.json();
				return data;
			}
			console.error('Erro ao retornar dados sobre jogos em destaque')

		} catch (e) {
			console.error(e)
		}
	}

	return {
		getGames,
		getFeaturedGames
	}
}
