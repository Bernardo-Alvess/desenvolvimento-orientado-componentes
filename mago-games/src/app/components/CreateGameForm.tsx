'use client';

import React, { FormEvent, useState } from 'react';
import { extractYouTubeVideoId } from '../common/util/extractIdFromYtVideo';
import useGames from '../hooks/useGames';
import { splitStringByComma } from '../common/util/splitStringByComma';
import { create } from 'domain';

const CreateGameForm = () => {
	const { createGame } = useGames();
	const [formData, setFormData] = useState({
		name: '',
		price: '',
		discount: '',
		publisher: '',
		developer: '',
		release_date: '',
		categories: '',
		game_mode: '',
		rating: '',
		url: '',
		embed: '',
		description: '',
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const embed = extractYouTubeVideoId(formData.embed);
		const categories = splitStringByComma(formData.categories);
		const game_mode = splitStringByComma(formData.game_mode);
		const created = await createGame({
			...formData,
			embed,
			categories,
			featured: false,
			game_mode,
		});

		if (created) {
			alert('criado');
		}
	};

	return (
		<div className="bg-purple-500 p-6 rounded-lg shadow-lg w-full max-w-md mx-auto text-black">
			<h1 className="text-white text-2xl font-bold text-center mb-6">
				Cadastre um jogo
			</h1>
			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label className="block text-white font-medium mb-1">
						Nome *
					</label>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						placeholder="Digite o nome do jogo"
						className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
						required
					/>
				</div>

				<div>
					<label className="block text-white font-medium mb-1">
						Preço *
					</label>
					<input
						type="number"
						name="price"
						value={formData.price}
						onChange={handleChange}
						placeholder="Digite o preço"
						className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
						required
					/>
				</div>

				<div>
					<label className="block text-white font-medium mb-1">
						Desconto
					</label>
					<input
						type="number"
						name="discount"
						value={formData.discount}
						onChange={handleChange}
						placeholder="Digite o desconto"
						className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
					/>
				</div>

				<div>
					<label className="block text-white font-medium mb-1">
						Publicadora
					</label>
					<input
						type="text"
						name="publisher"
						value={formData.publisher}
						onChange={handleChange}
						placeholder="Digite a publicadora"
						className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
					/>
				</div>

				<div>
					<label className="block text-white font-medium mb-1">
						Desenvolvedora
					</label>
					<input
						type="text"
						name="developer"
						value={formData.developer}
						onChange={handleChange}
						placeholder="Digite a desenvolvedora"
						className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
					/>
				</div>

				<div>
					<label className="block text-white font-medium mb-1">
						Data de lançamento
					</label>
					<input
						type="date"
						name="release_date"
						value={formData.release_date}
						onChange={handleChange}
						className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
					/>
				</div>

				<div>
					<label className="block text-white font-medium mb-1">
						Categorias *
					</label>
					<input
						type="text"
						name="categories"
						value={formData.categories}
						onChange={handleChange}
						placeholder="Ex.: Aventura, RPG - (separe por virgulas)"
						className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
						required
					/>
				</div>

				<div>
					<label className="block text-white font-medium mb-1">
						Modo de jogo
					</label>
					<input
						type="text"
						name="game_mode"
						value={formData.game_mode}
						onChange={handleChange}
						placeholder="Ex.: Um jogador, Coop"
						className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
					/>
				</div>

				<div>
					<label className="block text-white font-medium mb-1">
						Classificação indicativa *
					</label>
					<input
						type="text"
						name="rating"
						value={formData.rating}
						onChange={handleChange}
						placeholder="Ex.: Livre, +16"
						className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
						required
					/>
				</div>

				<div>
					<label className="block text-white font-medium mb-1">
						Imagem *
					</label>
					<input
						type="url"
						name="url"
						value={formData.url}
						onChange={handleChange}
						placeholder="Digite a URL da imagem"
						className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
						required
					/>
				</div>

				<div>
					<label className="block text-white font-medium mb-1">
						Trailer *
					</label>
					<input
						type="url"
						name="embed"
						value={formData.embed}
						onChange={handleChange}
						placeholder="Digite a URL do vídeo"
						className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
						required
					/>
				</div>
				<div>
					<label className="block text-white font-medium mb-1">
						Descrição
					</label>
					<textarea
						name="description"
						value={formData.description}
						onChange={handleChange}
						// rows="4"
						placeholder="Digite aqui..."
						className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
					/>
				</div>

				<div>
					<button
						type="submit"
						className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition"
					>
						Enviar
					</button>
				</div>
			</form>
		</div>
	);
};

export default CreateGameForm;
