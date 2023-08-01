export function MobileMenu({ toggleMobileMenu }) {
  return (
    <>
      <nav className="absolute z-10 flex  h-screen w-screen flex-col items-center justify-evenly  bg-gray-200/70 backdrop-blur-lg dark:bg-gray-600/70">
        <ul className="absolute z-10  mb-10 flex h-96   flex-col justify-evenly gap-12 text-3xl capitalize text-gray-700 dark:text-slate-100">
          <a href="#about">
            <li className=" animate-mobileMenuFade " onClick={toggleMobileMenu}>
              about me
            </li>
          </a>
          <a href="#myWork">
            <li className="animate-mobileMenuFade " onClick={toggleMobileMenu}>
              my work
            </li>
          </a>
          <a href="#mySkills">
            <li className="animate-mobileMenuFade " onClick={toggleMobileMenu}>
              my skills
            </li>
          </a>
          <a href="#contact">
            <li
              className="animate-mobileMenuFade "
              style={{ transitionDelay: "1500ms" }}
              onClick={toggleMobileMenu}
            >
              contact
            </li>
          </a>
        </ul>
      </nav>
    </>
  );
}
