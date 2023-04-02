import { useEffect } from 'react';

const ModalLogin = ({ onClose, isOpen }) => {
	useEffect(() => {
		const handleEsc = e => {
			if (e.key === 'Escape') {
				onClose();
			}
		};

		window.addEventListener('keydown', handleEsc);

		return () => {
			window.removeEventListener('keydown', handleEsc);
		};
	}, [onClose]);

	return (
		<div
			className='w-1/2 h-1/2 bg-slate-500 opacity-100'
			style={{
				position: 'absolute',
				top: '20%',
				left: '20%'
			}}
		>
			<h2>Modal</h2>
			<button onClick={onClose}>Close</button>
		</div>
	);
};

export default ModalLogin;
