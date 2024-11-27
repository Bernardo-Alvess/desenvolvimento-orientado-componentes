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
	cols: number;
}

const GameContainer = ({ icon, name, limit, showActions, cols }: Props) => {
	const { getGames } = useGames();
	const [games, setGames] = useState<Game[] | undefined>();

	useEffect(() => {
		const fetchGames = async () => {
			const result = await getGames(limit);
			if (result) setGames(result.data);
		};

		fetchGames();
	}, []);

	return (
		<div className="w-full flex justify-center p-3">
			<div className="flex flex-col justify-start w-11/12 gap-4 mx-auto">
				<h1 className="flex gap-2 text-4xl font-bold">
					<span>
						<img src={icon} className="size-9" />
					</span>
					{name}
				</h1>
				<div
					className="grid gap-8"
					style={{
						gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
					}}
				>
					{games?.map((game) => (
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
