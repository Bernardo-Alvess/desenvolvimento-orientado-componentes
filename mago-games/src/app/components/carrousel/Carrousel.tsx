import React, { useEffect, useState } from 'react';
import CarrouselCard from './CarrouselCard';
import useGames from '@/app/hooks/useGames';
import { Game } from '@/app/types/Game.type';
import Link from 'next/link';

const Carrousel = () => {
	const { getGames } = useGames();

	const [games, setGames] = useState<Game[]>([]);

	useEffect(() => {
		const fetchGames = async () => {
			const result = await getGames(3);
			if (result?.data) {
				setGames(result.data);
			}
		};

		fetchGames();
	}, []);

	return (
		<div className="w-full flex items-center justify-center">
			<div className="bg-tertiary flex items-center justify-center gap-8 p-2 max-w-fit px-5 rounded-lg">
				{games.length > 0 && (
					<div className="flex items-center justify-center gap-2">
						<div className="relative">
							<Link href={`/products/${games[0].id}`}>
								<CarrouselCard
									imageWidth={500}
									imageHeigth={500}
									tagPadding={2}
									imageUrl={games[0].url}
									price={games[0].price}
									discount={games[0].discount}
								/>
							</Link>
						</div>

						<div className="flex flex-col gap-2">
							<div className="relative">
								<Link href={`/products/${games[1].id}`}>
									<CarrouselCard
										imageWidth={242}
										imageHeigth={242}
										tagPadding={2}
										imageUrl={games[1].url}
										price={games[1].price}
										discount={games[1].discount}
									/>
								</Link>
							</div>
							<div className="relative">
								<Link href={`/products/${games[2].id}`}>
									<CarrouselCard
										imageWidth={242}
										imageHeigth={242}
										tagPadding={2}
										imageUrl={games[2].url}
										price={games[2].price}
										discount={games[2].discount}
									/>
								</Link>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Carrousel;
