'use client';

import { YoutubeEmbed } from '@/app/components/YoutubeEmbed';
import useGames from '@/app/hooks/useGames';
import { Game } from '@/app/types/Game.type';
import { Heading1 } from 'lucide-react';
import { David_Libre } from 'next/font/google';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const ProductDetails = () => {
	const { id } = useParams();
	const [game, setGame] = useState<Game>();
	const { getGameById } = useGames();

	console.log(id);

	useEffect(() => {
		const fetchGame = async () => {
			const data = await getGameById(id!.toString());
			setGame(data);
		};
		fetchGame();
	}, []);

	console.log(game);

	return (
		<div className="text-2xl font-bold w-full">
			<div className="px-16 flex flex-col items-center">
				<div className="w-full flex items-center gap-6 py-16">
					<img src={game?.url} className="w-64 h-36" />
					<h1>{game?.name}</h1>
				</div>
				<div className="w-full grid grid-cols-12 gap-12">
					<div className="w-full col-span-8">
						<YoutubeEmbed embedId={game?.embed}></YoutubeEmbed>
					</div>
					<div className="w-full col-span-4 bg-blue-200">fsd</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
