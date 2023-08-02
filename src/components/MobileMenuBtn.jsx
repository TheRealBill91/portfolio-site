export function MobileMenuBtn(props) {
  const {
    children,
    toggleMobileMenu,
    visible,
    mobileMenuVisible,
    onVisibilityChange,
  } = props;

  const closeStyles = mobileMenuVisible ? "z-10 text-gray-700" : "";

  return (
    <button
      title="mobile menu button toggle"
      onClick={toggleMobileMenu}
      className={`${closeStyles}  h-8 w-8 sm:hidden `}
    >
      {children}
    </button>
  );
}
