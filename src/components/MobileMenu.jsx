export function MobileMenu({ toggleMobileMenu }) {
  return (
    <>
      <nav className="absolute z-10 flex  h-screen w-screen flex-col items-center justify-center  bg-gray-200/70 backdrop-blur-lg dark:bg-gray-600/70">
        <ul className="absolute  z-10 flex h-96   flex-col justify-evenly gap-12 text-3xl capitalize text-gray-700 dark:text-slate-100">
          <a href="#about">
            <li onClick={toggleMobileMenu}>about me</li>
          </a>
          <a href="#myWork">
            <li onClick={toggleMobileMenu}>my work</li>
          </a>
          <a href="#contact">
            <li onClick={toggleMobileMenu}>contact</li>
          </a>
        </ul>
      </nav>
    </>
  );
}
