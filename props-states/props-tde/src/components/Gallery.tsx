import { Profile } from './Profile';

interface IGalleryProps {
	title: string;
}

const Gallery = ({ title }: IGalleryProps) => {
	const person1 = {
		name: 'John',
		avatar: 'https://thispersondoesnotexist.com/',
		profession: 'Brain surgeon',
		awards: 'baguga 2x',
		discovered: 'a method for bigger brains',
	};
	const person2 = {
		name: 'John',
		avatar: 'https://thispersondoesnotexist.com/',
		profession: 'Brain surgeon',
		awards: 'baguga 2x',
		discovered: 'a method for bigger brains',
	};

	return (
		<div className="w-[400px] h-fit flex flex-col gap-2">
			<h1 className="font-bold text-lg text-zinc-400">{title}</h1>
			<Profile {...person1} />
			<Profile {...person2} />
		</div>
	);
};

export { Gallery };
