import { useState, useEffect } from "react";

export function Fade({ children, visible, themeAnimation }) {
  const [shouldRender, setRender] = useState(visible);

  useEffect(() => {
    if (visible) setRender(true);
  }, [visible]);

  const onAnimationEnd = () => {
    if (!visible) setRender(false);
  };

  return (
    shouldRender && (
      <div
        className={`${visible ? themeAnimation : ""} `}
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </div>
    )
  );
}
