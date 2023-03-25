const Button = ({ className, ...props }) => {
  return (
    <button
      //   className="bg-[#FDC463] rounded-sm py-1 px-8 font-medium text-black"
      {...props}
      className={`bg-[#FDC463] rounded-sm py-1 px-8 font-medium text-black ${className}`}
    ></button>
  );
};

export default Button;
