'use client';

import useGames from '@/app/hooks/useGames';
import { Game } from '@/app/types/Game.type';
import { useEffect, useState } from 'react';
import GameCard from './GameCard';

interface Props {
	icon: string;
	name: string;
	limit: number | null;
	showActions?: boolean;
}

const GameContainer = ({ icon, name, limit, showActions }: Props) => {
	const { getGames } = useGames();
	const [data, setData] = useState<Game[] | undefined>();
	998;

	useEffect(() => {
		const fetchGames = async () => {
			const games = await getGames(limit);
			console.log(games);
			setData(games);
		};

		fetchGames();
	}, []);

	return (
		<div className="w-full flex justify-center p-3">
			<div className="flex flex-col justify-start w-11/12 gap-4">
				<h1 className="flex gap-2 text-4xl font-bold">
					<span>
						<img src={icon} className="size-9" />
					</span>
					{name}
				</h1>
				<div className="flex flex-wrap flex-row gap-8 items-center justify-center">
					{data?.map((game) => (
						<GameCard
							key={game.id}
							id={game.id}
							imageUrl={game.url}
							name={game.name}
							price={game.price}
							discount={game.discount}
							showActions={showActions}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default GameContainer;
