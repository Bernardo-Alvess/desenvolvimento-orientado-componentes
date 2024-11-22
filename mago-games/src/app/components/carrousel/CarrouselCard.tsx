import Image from 'next/image';

interface Props {
	imageWidth: number;
	imageHeigth: number;
	tagPadding: number;
}

const CarrouselCard = ({ imageWidth, imageHeigth, tagPadding }: Props) => (
	<div className="w-fit">
		{/* Imagem com escalonamento */}
		<Image
			src={'/images/gow.png'}
			alt={''}
			width={imageWidth}
			height={imageHeigth}
			className="block"
		/>
		{/* Contêiner relativo para posicionamento das tags */}
		<div className="absolute bottom-2 left-2 p-2 rounded shadow-md">
			<div className="flex gap-3">
				<div
					className={`bg-primary font-bold p-${tagPadding} rounded-lg text-sm`}
				>
					-50%
				</div>
				<div
					className={`bg-secondary font-bold p-${tagPadding} rounded-lg text-sm`}
				>
					R$145,00
				</div>
			</div>
		</div>
	</div>
);

export default CarrouselCard;
