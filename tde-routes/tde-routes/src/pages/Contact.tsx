import { useState } from 'react';
import NavBar from '../components/navbar';
import { toast } from 'sonner';
import { data } from '../data/data';

interface Contact {
	name: string;
	email: string;
}

const Contact: React.FC = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (!name || !email) {
			toast.error('Por favor, preencha todos os campos.');
			return;
		}

		const newContact: Contact = { name, email };
		data.push(newContact);

		setName('');
		setEmail('');
		toast.success('Usuário adicionado com sucesso');
	};

	return (
		<div className="flex h-screen w-screen items-center justify-center font-bold text-2xl">
			<NavBar
				home={false}
				about={false}
				contact={true}
				people={false}
			></NavBar>
			<div className="flex flex-col h-screen w-screen items-center justify-center font-bold text-2xl">
				<h1 className="text-3xl font-bold mb-6 text-orange-400">
					Página de Contato
				</h1>
				<form
					onSubmit={handleSubmit}
					className="w-full max-w-md bg-zinc-800 p-6 rounded-lg shadow-md text-white"
				>
					<div className="mb-4">
						<label
							htmlFor="name"
							className="block font-medium mb-2"
						>
							Nome
						</label>
						<input
							type="text"
							id="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="bg-inherit placeholder:text-sm placeholder:text-gray-700 w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="email"
							className="block font-medium mb-2"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="bg-inherit placeholder:text-sm w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
						/>
					</div>
					<button
						type="submit"
						className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors"
					>
						Adicionar Contato
					</button>
				</form>
			</div>
		</div>
	);
};

export { Contact };
