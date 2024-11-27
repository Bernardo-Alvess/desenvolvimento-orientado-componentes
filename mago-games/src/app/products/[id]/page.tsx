'use client';

import { YoutubeEmbed } from '@/app/components/YoutubeEmbed';
import useGames from '@/app/hooks/useGames';
import { Game } from '@/app/types/Game.type';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const ProductDetails = () => {
	const { id } = useParams();
	const [game, setGame] = useState<Game>();
	const { getGameById } = useGames();

	useEffect(() => {
		const fetchGame = async () => {
			const data = await getGameById(id!.toString());
			setGame(data);
		};
		fetchGame();
	}, []);

	console.log(game);

	return (
		<div className="w-full pb-16">
			<div className="px-16 flex flex-col items-center">
				<div className="w-full flex items-center gap-6 py-16 text-2xl font-bold">
					<img
						src={game?.url}
						className="w-64 h-36 rounded border border-primary"
					/>
					<h1>{game?.name}</h1>
				</div>
				<div className="w-full grid grid-cols-12 gap-12">
					<div className="w-full col-span-9 flex flex-col gap-12">
						<YoutubeEmbed embedId={game?.embed}></YoutubeEmbed>
						<div className="flex flex-col gap-12">
							<div className="flex flex-col gap-2">
								<h1 className="font-bold text-3xl">Sobre</h1>
								<img src={game?.url} alt="" className="w-4/5" />
							</div>
							<p className="text-2xl">{game?.description}</p>
						</div>
					</div>
					<div className="w-full col-span-3 gap-7 flex flex-col">
						<div className="w-full bg-secondary flex flex-col justify-between gap-12 p-2 rounded-lg border border-primary">
							<div className="flex flex-col gap-6">
								<div className="flex gap-2">
									<div className="bg-primary font-bold p-2 rounded-lg text-xs w-fit">
										-{game?.discount}%
									</div>
									<div className="bg-tertiary font-bold p-2 rounded-lg text-xs w-full text-center">
										R$ {game?.price}
									</div>
								</div>
								<div className="flex gap-2">
									<img
										src={'/images/steam.svg'}
										className="size-6"
									/>
									<img
										src={'/images/windows.svg'}
										className="size-6"
									/>
								</div>
							</div>
							<button className="w-full bg-tertiary">
								Comprar
							</button>
						</div>
						<div className="w-full bg-secondary flex flex-col text-sm rounded-lg border border-primary">
							<div className="flex flex-col gap-4 p-4">
								<p className="flex gap-2 items-center">
									<img
										src={'/images/date.svg'}
										className="size-6"
									/>
									<span className="font-bold">
										Lançamento:
									</span>
									{game?.release_date}
								</p>
								<p className="flex gap-2 items-center">
									<img
										src={'/images/laptop.svg'}
										className="size-6"
									/>
									<span className="font-bold">
										Desenvolvedora:
									</span>{' '}
									{game?.developer}
								</p>
								<p className="flex gap-2 items-center">
									<img
										src={'/images/company.svg'}
										className="size-6"
									/>
									<span className="font-bold">
										Publicadora:
									</span>{' '}
									{game?.publisher}
								</p>
							</div>
							<div className="p-4">
								<p>CATEGORIA/GÊNERO</p>
								<div className="flex gap-2 flex-wrap">
									{game?.categories.map((category) => (
										<div className="bg-tertiary p-2 rounded-lg text-xs w-fit border border-primary">
											{category}
										</div>
									))}
								</div>
							</div>
							<div className="p-4 flex flex-col gap-2">
								<p>MODO DE JOGO</p>
								<div className="flex flex-col gap-2 flex-wrap">
									{game?.game_mode.map((mode) => (
										<p>- {mode}</p>
									))}
								</div>
							</div>
							<div className="p-4">
								<p>CLASSIFICAÇÃO</p>
								<p>{game?.rating}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
