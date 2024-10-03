import Profile from './profile';
import '../assets/css/gallery.css';

interface IGaleryProps {
	title: string;
	images: string[];
}

function Gallery({ title, images }: IGaleryProps) {
	return (
		<div id="wrapper">
			<h1>{title}</h1>
			<div id="container">
				{images.map((image) => (
					<Profile key={image} image={image} />
				))}
			</div>
		</div>
	);
}

export default Gallery;
