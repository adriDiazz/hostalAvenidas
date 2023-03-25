import Button from "./Button";

const NavBar = () => {
  return (
    <>
      <header>
        <nav className="flex justify-between items-center text-white font-thin p-4 xl:px-20 pt-4 ">
          <h1 className=" xl:pl-20">Hostal Avenidas</h1>
          <ul className="flex gap-8 text-white justify-center items-center">
            <li className="hidden md:inline">
              <a href="/">About</a>
            </li>
            <li className="hidden md:inline">
              <a href="">Actividades</a>
            </li>
            <li className="hidden md:inline">
              <a href="">Contactanos</a>
            </li>
            <li className="md:ml-20">
              <Button>Log in</Button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
