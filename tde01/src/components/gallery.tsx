import Profile from './profile';
import '../assets/css/gallery.css';

interface teste {
	title: string;
}

function Gallery({ title }: teste) {
	return (
		<div id="wrapper">
			<h1>{title}</h1>
			<div id="container">
				<Profile />
				<Profile />
				<Profile />
			</div>
		</div>
	);
}

export default Gallery;
