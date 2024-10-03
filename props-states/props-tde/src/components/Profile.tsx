import { Avatar } from './Avatar';

interface IProfileProps {
	name: string;
	avatar: string;
	profession: string;
	awards: string;
	discovered: string;
}

const Profile = (props: IProfileProps) => {
	const { name, avatar, profession, awards, discovered } = props;
	return (
		<div className="p-2 w-fit flex flex-col items-center justify-center rounded-md bg-slate-300 hover:bg-slate-400 transition-colors">
			<h1 className="text-xl font-semibold">{name}</h1>
			<Avatar image={avatar} />
			<div className="w-full p-2">
				<ul>
					<li>
						<strong>Profession:</strong> {profession}
					</li>
					<li>
						<strong>Awards:</strong> {awards}
					</li>
					<li>
						<strong>Discovered:</strong> {discovered}
					</li>
				</ul>
			</div>
		</div>
	);
};

export { Profile };
