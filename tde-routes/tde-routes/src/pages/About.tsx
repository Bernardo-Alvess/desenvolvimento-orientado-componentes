import NavBar from '../components/navbar';

const About = () => {
	return (
		<div className="flex h-screen w-screen items-center justify-center font-bold text-2xl">
			<NavBar
				home={false}
				about={true}
				contact={false}
				people={false}
			></NavBar>
			<div className="flex h-screen w-screen items-center justify-center font-bold text-2xl text-orange-400">
				About
			</div>
		</div>
	);
};

export { About };
