import { useState } from 'react';
import Button from './Button';
import { createPortal } from 'react-dom';
import Modal from './Modal';
import ModalLogin from '../HomePage/ModalLogin';

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	if (isOpen) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = 'auto';
	}
	return (
		<>
			<header>
				<nav className='flex justify-between items-center text-white font-thin p-4 w-full xl:px-20 pt-4 '>
					<h1 className=' xl:pl-20'>Hostal Avenidas</h1>
					<ul className='flex gap-8 text-white justify-center items-center'>
						<li className='hidden md:inline'>
							<a href='/'>About</a>
						</li>
						<li className='hidden md:inline'>
							<a href=''>Actividades</a>
						</li>
						<li className='hidden md:inline'>
							<a href=''>Contactanos</a>
						</li>
						<li className='md:ml-20'>
							<Button onClick={() => setIsOpen(true)}>Log in</Button>
						</li>
					</ul>
				</nav>
				{isOpen &&
					createPortal(
						<Modal onClose={() => setIsOpen(false)}>
							<ModalLogin onClose={() => setIsOpen(false)} isOpen={isOpen} />
						</Modal>,
						document.body
					)}
			</header>
		</>
	);
};

export default NavBar;
