import { useState } from 'react';
import '../assets/css/profile.css';
import { InfinitySpin } from 'react-loader-spinner';

interface IImageProps {
	image: string;
}

function Profile({ image }: IImageProps) {
	const [isLoading, setIsLoading] = useState(true);

	const handleImageLoaded = () => {
		setIsLoading(false);
	};
	return (
		<div>
			{isLoading && (
				<div className="teste">
					<InfinitySpin
						visible={true}
						width="200"
						color="#141414"
						ariaLabel="infinity-spin-loading"
					/>
				</div>
			)}
			<img
				className="teste"
				src={image}
				alt="person"
				onLoad={handleImageLoaded}
				style={{ display: isLoading ? 'none' : 'block' }}
			/>
		</div>
	);
}

export default Profile;
