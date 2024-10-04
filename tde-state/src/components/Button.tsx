interface IButtonProps {
	fn: () => void;
	text: string;
}

const Button = (props: IButtonProps) => {
	const { fn, text } = props;

	return (
		<button className="px-4 rounded-lg bg-blue-800 w-fit" onClick={fn}>
			{text}
		</button>
	);
};

export { Button };
