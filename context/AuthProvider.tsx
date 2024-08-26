import { BodyType, ErrorType } from '@/src/api/customInstance';
import { ErrorResponseApiDTO, SignInUserRequestApiDTO, SignInUserResponseApiDTO } from '@/src/api/generated/Api.schemas';
import { useSignInUser } from '@/src/api/generated/default';
import { UseMutateFunction } from '@tanstack/react-query';
import React, { createContext, ReactNode, useContext } from 'react';
import { useLocalStorage } from 'usehooks-ts';

export interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
}

interface AuthContextProps {
  authState: AuthState | null;
  handleLogin: UseMutateFunction<
    SignInUserResponseApiDTO,
    ErrorType<ErrorResponseApiDTO>,
    {
      data: BodyType<SignInUserRequestApiDTO>;
    },
    unknown
  >;
  handleLogout: () => void;
  isSigningIn: boolean;
  signInError: ErrorType<ErrorResponseApiDTO> | null;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState, removeAuthState] = useLocalStorage<AuthState | null>('user_information', null);
  const {
    mutate: handleLogin,
    isPending: isSigningIn,
    error: signInError,
  } = useSignInUser({
    mutation: {
      onSuccess: (data) => {
        setAuthState({
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
        });
      },
      onError: () => removeAuthState(),
    },
  });

  const handleLogout = () => {
    setAuthState(null);
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        handleLogin,
        handleLogout,
        isSigningIn,
        signInError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};
