export default function useGames() {

	async function getGames(limit?: number | null) {
		try {
			const response = await fetch(`http://localhost:3001/games?_limit=${limit}`)
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

	async function getGameById(id: string) {
		console.log(id)

		try {
			const response = await fetch(`http://localhost:3001/games/${id}`)

			if (response.ok) {
				const data = await response.json()
				return data
			}

			console.log('Erro ao retornar dados sobre o jogo')
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
		getFeaturedGames,
		getGameById
	}

}
