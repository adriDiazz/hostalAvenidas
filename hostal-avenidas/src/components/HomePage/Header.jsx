import Form from "./Form";

const Header = () => {
  return (
    //h-full flex flex-col justify-center items-start font-light text-white sm:text-3xl  md:text-3xl pl-40 pt-5 w-1/2 xl:text-5xl
    <>
      <div className="p-5 md:flex h-3/4 ">
        <div className="h-full flex flex-col justify-center items-start font-light text-white text-3xl m-0 w-full xl:pl-40 pt-5 md:w-1/2 md:text-3xl xl:text-5xl">
          <h2 className="w-full text-start leading-tight">
            Una estadía confortable a solo minutos de la diversión y emoción del
            parque temático
          </h2>
          <div className="flex justify-center items-center mt-5">
            <img src="play.svg" alt="" className="cursor-pointer w-56" />
          </div>
        </div>
        <div className="h-full flex flex-col justify-center items-center p-20 md:w-1/2">
          <Form />
        </div>
      </div>
    </>
  );
};

export default Header;
