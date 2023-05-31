"use client";
const { createContext, useContext, useState } = require("react");

const NavigationContext = createContext();

export const NavigationContextProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = (event) => {
    event.stopPropagation();
    setIsSidebarOpen(false);
  };

  return (
    <NavigationContext.Provider
      value={{ isSidebarOpen, closeSidebar, openSidebar }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavGlobalContext = () => {
  return useContext(NavigationContext);
};
