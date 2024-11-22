import React from 'react';
import CarrouselCard from './CarrouselCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carrousel = () => {
	return (
		<div className="w-full flex items-center justify-center">
			<div className="bg-tertiary flex items-center justify-center gap-8 p-2 max-w-fit px-5 rounded-lg">
				<ChevronLeft className="size-12 text-chevron cursor-pointer" />
				<div className="flex items-center justify-center gap-2">
					<div className="relative">
						<CarrouselCard
							imageWidth={500}
							imageHeigth={500}
							tagPadding={2}
						/>
					</div>
					<div className="flex flex-col gap-2">
						<div className="relative">
							<CarrouselCard
								imageWidth={242}
								imageHeigth={242}
								tagPadding={1}
							/>
						</div>
						<div className="relative">
							<CarrouselCard
								imageWidth={242}
								imageHeigth={242}
								tagPadding={1}
							/>
						</div>
					</div>
				</div>
				<ChevronRight className="size-12 text-chevron  cursor-pointer" />
			</div>
		</div>
	);
};

export default Carrousel;
