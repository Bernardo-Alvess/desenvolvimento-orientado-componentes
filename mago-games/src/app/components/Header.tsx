'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
	const pathname = usePathname();

	const isHome = pathname === '/';

	return (
		<nav className="flex items-center bg-primary w-full py-2 px-6">
			<ul className="flex items-center justify-between w-full text-2xl">
				<li>
					<Link href={'/'}>
						<img
							src={'/images/mago-games.svg'}
							alt={''}
							width={75}
							height={86}
						></img>
					</Link>
				</li>
				<li className={`${isHome ? 'text-secondary' : ''}`}>
					<Link href={'/'}>Home</Link>
				</li>
				<li className={`${!isHome ? 'text-secondary' : ''}`}>
					<Link href={'/products'}>Produtos</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
