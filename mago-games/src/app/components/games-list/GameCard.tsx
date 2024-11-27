import useGames from '@/app/hooks/useGames';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

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
	const { deleteGame } = useGames();
	const handleGameDelete = async () => {
		try {
			if (id) {
				const deleted = await deleteGame(id);
				if (deleted) {
					alert('deletado com sucesso');
				} else {
					alert('Nao foi possivel deletar');
				}
			}
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<div className="col-span-1 flex gap-1 w-full">
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
				<div onClick={handleGameDelete} className="cursor-pointer">
					<img src={'/icons/trash.svg'} />
				</div>
			) : null}
		</div>
	);
};

export default GameCard;
