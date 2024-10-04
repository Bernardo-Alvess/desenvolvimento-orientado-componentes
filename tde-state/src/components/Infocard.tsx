import { useState } from 'react';

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

	return (
		<div className="text-white flex flex-col gap-3 w-[400px] bg-zinc-900 p-5 rounded-lg">
			<button
				className="px-4 rounded-lg bg-blue-800 w-fit"
				onClick={handleNextPage}
			>
				Next
			</button>
			<p>
				{data[page].name + 1} by {data[page + 1].artist}
			</p>
			<p>
				( <strong>{page}</strong> of <strong>{data.length}</strong> )
			</p>
			<button
				className="px-4 rounded-lg bg-blue-800 w-fit"
				onClick={() => setDetails(!details)}
			>
				Show Details
			</button>
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
