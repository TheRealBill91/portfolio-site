import { createContext, useState } from "react";

export const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = (message) => {
    const toasts = [message];
    setToasts(toasts);
  };

  const removeToasts = () => {
    if (toasts.length > 0) {
      setToasts([]);
    }
  };

  return (
    <ToastContext.Provider
      value={{ toasts, addToast, setToasts, removeToasts }}
    >
      {children}
    </ToastContext.Provider>
  );
}
