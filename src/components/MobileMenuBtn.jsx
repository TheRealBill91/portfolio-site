export function MobileMenuBtn({
  children,
  toggleMobileMenu,
  mobileMenuVisible,
}) {
  // const { toggleMobileMenu, mobileMenuVisible } = props;

  const closeStyles = mobileMenuVisible ? "z-10 text-gray-700" : "";

  return (
    <button
      title="mobile menu button toggle"
      onClick={toggleMobileMenu}
      className={`${closeStyles} h-8 w-8 `}
    >
      {children}
    </button>
  );
}
