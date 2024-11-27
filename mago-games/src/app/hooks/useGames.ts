'use client'

import { useState } from "react";
import { Game } from "../types/Game.type";

export default function useGames() {

	async function getGames(limit?: number | null): Promise<{ data: Game[]; count: number } | undefined> {
		try {
			const response = await fetch(`http://localhost:3001/games?_limit=${limit}`)
			if (response.ok) {
				const data: Game[] = await response.json()
				const count = Object.entries(data).length
				return { data, count };
			}
			console.error('Erro ao retornar dados sobre jogos')
		} catch (e) {
			console.error(e)
		}
	}

	async function getGameById(id: string) {
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

	async function createGame(gameObj: Game) {
		const result = await getGames()
		gameObj.id = result!.count + 1
		try {
			const response = await fetch(`http://localhost:3001/games`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(gameObj)
			})

			if (response.ok) {
				return true
			}

			console.error('Erro ao criar um novo jogo no banco de dados')
			return false
		} catch (e) {
			console.error(e)
		}
	}

	async function deleteGame(id: number) {
		const response = await fetch(`http://localhost:3001/games/${id}`, {
			method: 'DELETE'
		})

		if (response.ok) {
			return true
		}
		console.error('Não foi possivel deletar o jogo especificado')
		return false
	}

	return {
		getGames,
		getFeaturedGames,
		getGameById,
		createGame,
		deleteGame,
	}

}
