import React from 'react';

interface Props {
	title: string;
	icon: string;
}

const CustomToast = ({ title, icon }: Props) => {
	return (
		<div className="bg-tertiary font-bold flex gap-2 items-center justify-center rounded-lg w-full h-full p-6">
			<img src={icon} />
			<p>{title}</p>
		</div>
	);
};

export default CustomToast;
