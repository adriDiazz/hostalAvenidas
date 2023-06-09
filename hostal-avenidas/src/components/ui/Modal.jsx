// eslint-disable-next-line react/prop-types
const Modal = ({ children, onClose }) => {
	return (
		<div
			className='bg-black bg-opacity-70 w-full h-full absolute top-0 left-0 m-0'
			// onClick={onClose}
		>
			{children}
		</div>
	);
};

export default Modal;
