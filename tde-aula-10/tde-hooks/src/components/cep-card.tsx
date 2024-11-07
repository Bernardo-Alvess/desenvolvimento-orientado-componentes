// import { useState } from 'react';
// import { useFetch } from '../hooks/useFetch';

// const CepCard = () => {
// 	const [urlCep, setUrlCep] = useState('');
// 	const [dadosCep] = useFetch(urlCep);

// 	console.log(dadosCep);

// 	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
// 		event.preventDefault();
// 		const formData = new FormData(event.target);
// 		const cep = formData.get('cep');
// 		setUrlCep(`https://viacep.com.br/ws/${cep}/json/`);
// 	}

// 	return (
// 		<div className="bg-white rounded-xl flex justify-center items-center p-5">
// 			<form
// 				onSubmit={handleSubmit}
// 				className="flex flex-col justify-center items-center gap-2"
// 			>
// 				<input
// 					className="border-black border-2 p-2 rounded-lg w-full"
// 					required
// 					type="text"
// 					placeholder="CEP"
// 					name="CEP"
// 				/>
// 				<button
// 					className="bg-slate-900 p-3 rounded-lg w-full text-white"
// 					type="submit"
// 					value="Pesquisar"
// 				>
// 					Pesquisar
// 				</button>
// 			</form>
// 			{dadosCep && (
// 				<p>
// 					{dadosCep.cep} - {dadosCep.localidade}
// 				</p>
// 			)}
// 		</div>
// 	);
// };

// export { CepCard };

import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';

export function CepCard() {
	const [urlCep, setUrlCep] = useState('');
	const [dadosCep] = useFetch(urlCep);

	console.log(dadosCep);

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const cep = formData.get('cep');
		setUrlCep(`https://viacep.com.br/ws/${cep}/json/`);
	}
	return (
		<div className="bg-white rounded-xl flex justify-center items-center p-5">
			<form
				onSubmit={handleSubmit}
				className="flex flex-col justify-center items-center gap-2"
			>
				<input
					className="border-black border-2 p-2 rounded-lg w-full"
					required
					type="text"
					placeholder="CEP"
					name="CEP"
				/>
				<button
					className="bg-slate-900 p-3 rounded-lg w-full text-white"
					type="submit"
					value="Pesquisar"
				>
					Pesquisar
				</button>
			</form>
			{dadosCep && (
				<p>
					{dadosCep.cep} - {dadosCep.localidade}
				</p>
			)}
		</div>
	);
}
