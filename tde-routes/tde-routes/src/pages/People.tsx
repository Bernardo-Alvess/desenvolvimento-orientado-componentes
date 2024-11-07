import NavBar from '../components/navbar';
import { data } from '../data/data';

const People = () => {
	return (
		<div className="flex h-screen w-screen items-center justify-center font-bold text-2xl">
			<NavBar
				home={false}
				about={false}
				contact={false}
				people={true}
			></NavBar>
			<div className="flex h-screen w-screen justify-center font-bold text-2xl">
				<div className="mt-8 w-full max-w-md">
					<h2 className="text-2xl font-semibold text-orange-400 mb-4 text-center">
						Lista de Contatos
					</h2>
					<ul className="flex flex-col gap-3 items-center">
						{data.map((contact, index) => (
							<li
								key={index}
								className="bg-white p-4 rounded-md shadow-md flex justify-between items-center min-w-fit"
							>
								<span className="text-gray-700 truncate">
									{contact.name}
									<br />
								</span>
								<span className="text-gray-500 truncate">
									{contact.email}
								</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export { People };
