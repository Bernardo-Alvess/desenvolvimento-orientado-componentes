import { Link } from 'react-router-dom';

interface Props {
	home: boolean;
	about: boolean;
	contact: boolean;
	people: boolean;
}

const NavBar = (props: Props) => {
	const { home, about, contact, people } = props;

	return (
		<div className="h-full min-w-fit flex items-center justify-start px-4 bg-zinc-700 transition-colors">
			<nav>
				<li className="flex flex-col gap-10">
					<ul
						className={`hover:text-orange-400 transition-colors ${
							home ? 'text-orange-400' : ''
						}`}
					>
						<Link to={'/'}>- home</Link>
					</ul>
					<ul
						className={`hover:text-orange-400 transition-colors ${
							about ? 'text-orange-400' : ''
						}`}
					>
						<Link to={'/about'}>- about</Link>
					</ul>
					<ul
						className={`hover:text-orange-400 transition-colors ${
							contact ? 'text-orange-400' : ''
						}`}
					>
						<Link to={'/contact'}>- contact</Link>
					</ul>
					<ul
						className={`hover:text-orange-400 transition-colors ${
							people ? 'text-orange-400' : ''
						}`}
					>
						<Link to={'/people'}>- people</Link>
					</ul>
				</li>
			</nav>
		</div>
	);
};

export default NavBar;
