import { useEffect } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';

// eslint-disable-next-line react/prop-types
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
			className='sm:w-1/4 md:min-w-1/5 h-1/2 bg-[#FEE0AE] opacity-100 m-0 p-4 relative rounded-xl mx-auto my-40'
			// style={{
			// 	position: 'relative',
			// 	top: '25%',
			// 	left: '37%',
			// 	margin: 0
			// }}
		>
			<div className='flex w-full justify-end'>
				<button onClick={onClose}>X</button>
			</div>
			<h1 className='text-2xl font-bold text-center'>Hostal Avenidas</h1>
			<div className='w-full h-full mt-10'>
				<form className='flex flex-col gap-4 pt-1 h-full'>
					<Input
						type='text'
						name='usuario'
						id='usuario'
						placeholder='Usuario'
					/>

					<Input
						type='password'
						name='password'
						id='password'
						placeholder='Contraseña'
					/>

					<Button className='text-white'>Iniciar Sesión</Button>
				</form>
			</div>
		</div>
	);
};

export default ModalLogin;
