import React, { createContext, useContext, useEffect, useState } from 'react';
import StorageService from '@app-services/storage.service';

type ContextValue = {
  isLoggedIn: boolean
  setOnboarded: (status: boolean) => void
  isProfileAvailable: boolean | null
}

const initialState = {
  isLoggedIn: false,
  setOnboarded: () => {},
  isProfileAvailable: false,
};

const defaultContext = {
  ...initialState,
};

const GlobalContext = createContext<ContextValue>(defaultContext);

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const state: ContextValue = React.useContext(GlobalContext);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(state.isLoggedIn);
  const [isProfileAvailable, setIsProfileAvailalble] = useState<boolean | null>(
    state.isProfileAvailable,
  );

  const setOnboarded = async (status: boolean) => {
    console.log(status);
    try {
      await StorageService.save.setUserOnboard(status);
      setIsLoggedIn(status);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    // Checking if user is already logged in
    (async () => {
      const isUserLoggedIn = await StorageService.check.userOnboarded();
      const profileAvailable = await StorageService.check.getProfileAvailable();

      if (isUserLoggedIn) {
        setIsLoggedIn(isUserLoggedIn);
      }
      if (profileAvailable) {
        setIsProfileAvailalble(profileAvailable);
      }
    })();

  }, []);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        isLoggedIn,
        setOnboarded,
        isProfileAvailable,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
