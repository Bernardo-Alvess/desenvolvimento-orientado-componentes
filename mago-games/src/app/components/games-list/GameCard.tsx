import Link from 'next/link';
import DeleteGameModal from '../DeleteGameModal';
import { useState } from 'react';

interface Props {
	id: number | undefined;
	imageUrl: string;
	name: string;
	discount?: string;
	price: string;
	showActions?: boolean;
}

const GameCard = ({
	imageUrl,
	name,
	discount,
	price,
	id,
	showActions,
}: Props) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<div className="col-span-1 flex gap-1 w-full">
			<DeleteGameModal
				id={id}
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
			<Link
				href={`/products/${id}`}
				className="w-72 h-80 bg-cardBackground rounded-xl flex flex-col gap-2"
			>
				<img
					src={imageUrl}
					alt={`${name} cover`}
					className="h-1/2 object-cover rounded-t-xl"
				/>
				<div className="flex flex-col justify-between gap-14 px-2">
					<div>
						<p className="truncate text-xl font-bold">{name}</p>
						<div className="flex gap-2">
							<img src={'/images/steam.svg'} className="size-6" />
							<img
								src={'/images/windows.svg'}
								className="size-6"
							/>
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
			</Link>
			{showActions ? (
				<div
					onClick={() => setIsModalOpen(true)}
					className="cursor-pointer"
				>
					<img src={'/icons/trash.svg'} />
				</div>
			) : null}
		</div>
	);
};

export default GameCard;
