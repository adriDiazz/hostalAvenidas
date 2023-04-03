import { useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const ModalVideo = ({ onClose }) => {
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
		<div className='w-full h-full flex justify-center items-center'>
			<button
				className='absolute text-white top-0 right-20 m-4 font-bold text-2xl'
				onClick={onClose}
			>
				X
			</button>
			<iframe
				src='https://www.youtube.com/embed/BEdEKXqSlac'
				title='YouTube video player'
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				allowfullscreen
				className='sm:w-full md:w-1/2 h-1/2 '
			></iframe>
		</div>
	);
};

export default ModalVideo;
