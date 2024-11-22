import Image from 'next/image';
import Carrousel from './components/carrousel/Carrousel';

export default function Home() {
	return (
		<div>
			<div className="flex w-full h-44 text-3xl items-center justify-center">
				<h1>Bem Vindo à Mago Games, a sua loja de jogos digitais!</h1>
			</div>
			<Carrousel></Carrousel>
		</div>
	);
}
