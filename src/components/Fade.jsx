import { useState, useEffect } from "react";

export function Fade({ children, show, onVisibilityChange }) {
  const [shouldRender, setRender] = useState(show);

  console.log(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  return (
    shouldRender && (
      <div
        className={`${
          show ? "animate-mobileMenuFadeIn " : "animate-mobileMenuFadeOut"
        } `}
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </div>
    )
  );
}
