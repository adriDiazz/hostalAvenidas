import { useState } from 'react';
import Form from './Form';
import { createPortal } from 'react-dom';
import Modal from '../ui/Modal';
import ModalVideo from './ModalVideo';

const Header = () => {
	const [video, setVideo] = useState(false);
	if (video) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = 'auto';
	}
	return (
		<>
			<div className='p-5 md:flex h-3/4 w-full'>
				<div className='h-full flex flex-col justify-center items-start font-light text-white text-3xl m-0 w-full xl:pl-40 pt-5 md:w-1/2 md:text-3xl xl:text-5xl'>
					<h2 className='w-full text-start leading-tight'>
						Una estancia confortable a solo minutos de la diversión y emoción
						del parque temático
					</h2>
					<div className='flex justify-center items-center mt-5'>
						<img
							src='play.svg'
							alt=''
							className='cursor-pointer w-56'
							onClick={() => setVideo(true)}
						/>
						{video &&
							createPortal(
								<Modal onClose={() => setVideo(false)}>
									<ModalVideo onClose={() => setVideo(false)} />
								</Modal>,
								document.body
							)}
					</div>
				</div>
				<div className='h-full flex flex-col justify-center items-center p-20 md:w-1/2 w-full'>
					<Form />
				</div>
			</div>
		</>
	);
};

export default Header;
