import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

interface SettingsContextType {
  sideBarIsOpen: boolean;
  toggleSideBar: () => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined,
);

interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsProvider: React.FC<SettingsProviderProps> = ({
  children,
}) => {
  const [sideBarIsOpen, setSideBarIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const storedState = localStorage.getItem('sideBarIsOpen');
    if (storedState !== null) {
      setSideBarIsOpen(JSON.parse(storedState));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('sideBarIsOpen', JSON.stringify(sideBarIsOpen));
  }, [sideBarIsOpen]);

  const toggleSideBar = () => {
    setSideBarIsOpen((prevState) => !prevState);
  };

  const value = { sideBarIsOpen, toggleSideBar };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = (): SettingsContextType => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};
