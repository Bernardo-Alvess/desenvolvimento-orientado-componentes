import React from 'react';
import useGames from '../hooks/useGames';
import { toast } from 'sonner';
import CustomToast from './CustomToast';

interface Props {
	isOpen: boolean;
	onClose: () => void;
	id: number | undefined;
}

const DeleteGameModal = ({ isOpen, onClose, id }: Props) => {
	if (!isOpen) return null;

	const { deleteGame } = useGames();

	const handleDeleteButton = async () => {
		const deleted = await deleteGame(id);
		if (deleted) {
			toast(
				<CustomToast
					title={'Jogo deletado com sucesso'}
					icon={'/icons/check.svg'}
				/>
			);
		} else {
			toast(
				<CustomToast
					title={'Erro ao deletar o jogo'}
					icon={'/icons/check.svg'}
				/>
			);
		}
		onClose();
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
			<div className="relative w-full max-w-lg p-6 bg-secondary rounded-lg shadow-lg">
				<div className="flex flex-col gap-12">
					<div className="flex items-center justify-between">
						<h2 className="text-xl font-semibold">
							Tem certeza que deseja excluir esse jogo?
						</h2>
						<button
							onClick={onClose}
							className="text-gray-400 hover:text-gray-600"
							aria-label="Close modal"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-5 h-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
					<div className="flex justify-end mt-6 gap-6">
						<button
							onClick={onClose}
							className="w-full px-4 py-2 text-sm font-medium text-white bg-tertiary rounded-md"
						>
							Não
						</button>
						<button
							onClick={handleDeleteButton}
							className="w-full px-4 py-2 text-sm font-medium text-white bg-primary rounded-md"
						>
							Sim
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeleteGameModal;
