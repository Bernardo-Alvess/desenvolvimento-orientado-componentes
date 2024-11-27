import React, { useEffect, useState } from 'react';
import CarrouselCard from './CarrouselCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useGames from '@/app/hooks/useGames';
import { Game } from '@/app/types/Game.type';

const Carrousel = () => {
	const { getGames } = useGames();
	const [currentIndex, setCurrentIndex] = useState(0);
	const [games, setGames] = useState<Game[]>([]);
	// Fetch games data when the component mounts
	useEffect(() => {
		const fetchGames = async () => {
			const result = await getGames(3);
			if (result?.data) {
				setGames(result.data);
			}
		};

		fetchGames();
	}, []);

	// Automatically update the current index every 10 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) =>
				games.length > 0 ? (prevIndex + 1) % games.length : 0
			);
		}, 10000);

		return () => clearInterval(interval); // Cleanup interval on unmount
	}, []);

	return (
		<div className="w-full flex items-center justify-center">
			<div className="bg-tertiary flex items-center justify-center gap-8 p-2 max-w-fit px-5 rounded-lg">
				<ChevronLeft className="size-12 text-chevron cursor-pointer" />
				{games.length > 0 && (
					<div className="flex items-center justify-center gap-2">
						<div className="relative">
							<CarrouselCard
								imageWidth={500}
								imageHeigth={500}
								tagPadding={2}
								imageUrl={games[0].url}
								price={games[0].price}
								discount={games[0].discount}
							/>
						</div>

						<div className="flex flex-col gap-2">
							<div className="relative">
								<CarrouselCard
									imageWidth={242}
									imageHeigth={242}
									tagPadding={2}
									imageUrl={games[1].url}
									price={games[1].price}
									discount={games[1].discount}
								/>
							</div>
							<div className="relative">
								<CarrouselCard
									imageWidth={242}
									imageHeigth={242}
									tagPadding={2}
									imageUrl={games[2].url}
									price={games[2].price}
									discount={games[2].discount}
								/>
							</div>
						</div>
					</div>
				)}
				<ChevronRight className="size-12 text-chevron  cursor-pointer" />
			</div>
		</div>
	);
};

export default Carrousel;
