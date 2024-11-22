import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
	return (
		<nav className="flex items-center bg-primary w-full py-2 px-6">
			<ul className="flex items-center justify-between w-full text-2xl">
				<li>
					<Link href={'/'}>
						<Image
							src={'icons/mago-games.svg'}
							alt={''}
							width={75}
							height={86}
						></Image>
					</Link>
				</li>
				<li>
					<Link href={'/'}>Home</Link>
				</li>
				<li>
					<Link href={'/products'}>Produtos</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
