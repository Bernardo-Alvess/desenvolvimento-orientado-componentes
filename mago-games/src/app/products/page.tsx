import React from 'react';
import GameContainer from '../components/games-list/GameContainer';

const Products = () => {
	return (
		<div className="w-full px-32 py-16">
			<div className="flex w-full h-44 text-3xl items-center justify-center">
				<h1>Desbrave diversos títulos renomados da indústria!</h1>
			</div>
			<div className="w-full grid grid-cols-12 gap-12">
				<div className="w-full col-span-8 flex gap-2 justify-start items-start">
					<GameContainer
						icon={'/icons/controller.svg'}
						name={'Todos os jogos'}
						limit={null}
						showActions={true}
					/>
				</div>
				<div className="w-full col-span-4 gap-7 flex flex-col bg-purple-200">
					fsd
				</div>
			</div>
		</div>
	);
};

export default Products;
