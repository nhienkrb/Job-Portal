import React, { createContext, useContext, useState } from 'react';

const ToastContext = createContext();

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = 'success') => {
    const id = Date.now() + Math.random();
    const toast = {
      id,
      message,
      type,
      visible: true
    };
    
    setToasts(prev => [...prev, toast]);
    
    // Auto remove after 2 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 2000);
  };

  const hideToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const showSuccess = (message) => showToast(message, 'success');
  const showError = (message) => showToast(message, 'error');
  const showWarning = (message) => showToast(message, 'warning');

  return (
    <ToastContext.Provider value={{
      toasts,
      showToast,
      showSuccess,
      showError,
      showWarning,
      hideToast
    }}>
      {children}
    </ToastContext.Provider>
  );
};
