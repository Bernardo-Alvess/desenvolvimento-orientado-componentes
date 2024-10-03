interface IAvatarProps {
	image: string;
}

const Avatar = ({ image }: IAvatarProps) => {
	return (
		<>
			<img
				src={image}
				className="profile pic rounded-full w-1/4"
				alt="user profile picture"
			/>
		</>
	);
};

export { Avatar };
