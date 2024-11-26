'use client';

import Image from 'next/image';
import Carrousel from './components/carrousel/Carrousel';
import GameCard from './components/games-list/GameCard';
import GameContainer from './components/games-list/GameContainer';

export default function Home() {
	return (
		<div>
			<div className="flex w-full h-44 text-3xl items-center justify-center">
				<h1>Bem Vindo à Mago Games, a sua loja de jogos digitais!</h1>
			</div>
			<Carrousel />
			<GameContainer icon={''} name={'Em Alta'} limit={0} />
			<GameContainer icon={''} name={'Ofertas'} limit={0} />
		</div>
	);
}
