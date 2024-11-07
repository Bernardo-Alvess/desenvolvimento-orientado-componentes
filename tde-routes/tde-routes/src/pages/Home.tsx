import NavBar from '../components/navbar';

const Home = () => {
	return (
		<div className="flex h-screen w-screen items-center justify-center font-bold text-2xl">
			<NavBar
				home={true}
				about={false}
				contact={false}
				people={false}
			></NavBar>
			<div className="flex h-screen w-screen items-center justify-center font-bold text-2xl text-orange-400">
				Home
			</div>
		</div>
	);
};

export { Home };
