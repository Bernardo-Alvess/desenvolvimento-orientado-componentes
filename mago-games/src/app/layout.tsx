import type { Metadata } from 'next';
import { Kadwa } from 'next/font/google';
import './globals.css';
import Header from './components/Header';

const kadwa = Kadwa({
	weight: ['400', '700'],
	subsets: ['latin'],
	variable: '--font-kadwa',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Mago Games',
	description: 'A maior loja de jogos!',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${kadwa.variable} antialiased bg-background text-white`}
			>
				<Header />
				{children}
			</body>
		</html>
	);
}
