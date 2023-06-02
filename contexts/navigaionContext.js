"use client";
const { createContext, useContext, useState, useRef } = require("react");

const NavigationContext = createContext();

export const NavigationContextProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const searchDialogRef = useRef();

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = (event) => {
    setIsSidebarOpen(false);
  };

  const openSearchModal = () => {
    searchDialogRef.current.showModal();
  };

  const closeSearchModal = () => {
    searchDialogRef.current.close();
  };

  return (
    <NavigationContext.Provider
      value={{
        isSidebarOpen,
        closeSidebar,
        openSidebar,
        searchDialogRef,
        openSearchModal,
        closeSearchModal,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavGlobalContext = () => {
  return useContext(NavigationContext);
};
