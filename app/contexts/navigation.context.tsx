// NavigationContext.tsx
import React, { ReactNode, createContext, useContext, useState } from 'react';

import Containers from '@app-navigations/containers';

import { INavigationContextType } from './navigation.context.interface';

const NavigationContext = createContext<INavigationContextType | undefined>(undefined);

export const useNavigationContext = (): INavigationContextType => {
  const context = useContext(NavigationContext);

  if (!context) {
    throw new Error('useNavigationContext must be used within a NavigationProvider');
  }
  return context;
};

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [initialRoute, setInitialRoute] = useState<string>(Containers.HomeScreen);

  return (
    <NavigationContext.Provider value={{ initialRoute, setInitialRoute }}>
      {children}
    </NavigationContext.Provider>
  );
};
