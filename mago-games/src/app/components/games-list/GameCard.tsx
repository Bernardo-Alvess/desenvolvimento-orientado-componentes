import React from 'react';

interface Props {
	imageUrl: string;
	name: string;
	discount?: number;
	price: number;
}

const GameCard = ({ imageUrl, name, discount, price }: Props) => {
	return (
		<div className="w-72 h-80 bg-cardBackground rounded-xl flex flex-col gap-2">
			<img
				src={imageUrl}
				alt={`${name} cover`}
				className="w-full h-1/2 object-cover rounded-t-xl"
			/>
			<div className="flex flex-col justify-between gap-14 px-2">
				<div>
					<p className="truncate text-xl font-bold">{name}</p>
					<div className="flex gap-2">
						<img src={'/images/steam.svg'} className="size-6" />
						<img src={'/images/windows.svg'} className="size-6" />
					</div>
				</div>
				<div className="flex gap-2">
					{discount ? (
						<div className="bg-primary font-bold p-2 rounded-lg text-xs w-fit">
							-{discount}%
						</div>
					) : null}
					<div className="bg-secondary font-bold p-2 rounded-lg text-xs w-fit">
						R${price}
					</div>
				</div>
			</div>
		</div>
	);
};

export default GameCard;
