import Gallery from './components/gallery';

const images = [
	'https://picsum.photos/200',
	'https://thispersondoesnotexist.com/',
	'https://picsum.photos/300',
];

function App() {
	return (
		<>
			<Gallery title="Fotos" images={images} />
		</>
	);
}

export default App;
