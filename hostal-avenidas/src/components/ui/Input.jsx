const Input = ({ className, error, ...props }) => {
  return (
    <>
      <input className={`p-2 bg-[#FFF4F4]  ${className}`} {...props} />
      {error && <p className="text-red-500">{error}</p>}
    </>
  );
};

export default Input;
