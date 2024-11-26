import Image from 'next/image';

interface Props {
	imageWidth: number;
	imageHeigth: number;
	tagPadding: number;
	imageUrl: string;
	discount?: number;
	price: number;
}

const CarrouselCard = ({
	imageUrl,
	imageWidth,
	imageHeigth,
	tagPadding,
	discount,
	price,
}: Props) => (
	<div className="w-fit">
		<Image
			src={imageUrl}
			alt={''}
			width={imageWidth}
			height={imageHeigth}
			className="block"
		/>
		<div className="absolute bottom-2 left-2 p-2 rounded shadow-md">
			<div className="flex gap-3">
				{discount ? (
					<div
						className={`bg-primary font-bold p-${tagPadding} rounded-lg text-xs`}
					>
						-{discount}%
					</div>
				) : null}

				<div
					className={`bg-secondary font-bold p-${tagPadding} rounded-lg text-xs`}
				>
					R${price}
				</div>
			</div>
		</div>
	</div>
);

export default CarrouselCard;
