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
			<GameContainer
				icon={'/icons/fire.svg'}
				name={'Em Alta'}
				limit={10}
				cols={5}
			/>
			<GameContainer
				icon={'/icons/offer.svg'}
				name={'Ofertas'}
				limit={10}
				cols={5}
			/>
		</div>
	);
}
