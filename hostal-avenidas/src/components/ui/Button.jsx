const Button = ({ className, disabled, ...props }) => {
	return (
		<button
			//   className="bg-[#FDC463] rounded-sm py-1 px-8 font-medium text-black"
			{...props}
			className={`bg-[#FDC463] rounded-sm py-1 px-8 font-medium text-black hover:bg-[#ffcf7c] disabled:bg-[#f7d9a6] ${className}`}
			disabled={disabled}
		></button>
	);
};

export default Button;
