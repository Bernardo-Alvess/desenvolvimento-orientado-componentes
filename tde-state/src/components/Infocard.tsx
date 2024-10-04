import { useState } from 'react';
import { Button } from './Button';

interface IArtwork {
	name: string;
	artist: string;
	description: string;
	url: string;
	alt: string;
}

interface IInfocardProps {
	data: IArtwork[];
}

const Infocard = ({ data }: IInfocardProps) => {
	const [page, setPage] = useState(0);
	const [details, setDetails] = useState(false);

	const handleNextPage = () => {
		setPage((previousPage) =>
			previousPage == data.length - 1 ? 0 : previousPage + 1
		);
	};

	const handlePreviousPage = () => {
		setPage((previousPage) =>
			previousPage <= 0 ? data.length : previousPage - 1
		);
	};

	return (
		<div className="text-white flex flex-col gap-3 w-[400px] bg-zinc-900 p-5 rounded-lg">
			<Button fn={handleNextPage} text="Next" />
			<Button fn={handlePreviousPage} text="Previous" />
			<p>
				{data[page].name + 1} by {data[page + 1].artist}
			</p>
			<p>
				( <strong>{page}</strong> of <strong>{data.length}</strong> )
			</p>
			<Button fn={() => setDetails(!details)} text="Show Details" />
			{details ? (
				<div>
					<img
						className="h-[150px]"
						src={data[page].url}
						alt={data[page].alt}
					/>
					<p className="h-[175px]">{data[page].description}</p>
				</div>
			) : null}
		</div>
	);
};

export { Infocard };
