export function MobileMenuBtn(props) {
  const {
    children,
    toggleMobileMenu,
    //  visible,
    mobileMenuVisible,
    //   onVisibilityChange,
  } = props;

  const closeStyles = mobileMenuVisible ? "z-10 text-gray-700 absolute  right-0" : "";

  return (
    <button
      title="mobile menu button toggle"
      onClick={toggleMobileMenu}
      className={`${closeStyles}  h-9 w-9 sm:hidden `}
    >
      {children}
    </button>
  );
}
