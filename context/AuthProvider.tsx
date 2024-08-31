import { BodyType, ErrorType } from '@/src/api/customInstance';
import {
  ErrorResponseApiDTO,
  RegisterUserRequestApiDTO,
  RegisterUserResponseApiDTO,
  SignInUserRequestApiDTO,
  SignInUserResponseApiDTO,
} from '@/src/api/generated/Api.schemas';
import { useRegisterUser, useSignInUser } from '@/src/api/generated/default';
import { UseMutateFunction } from '@tanstack/react-query';
import { useRouter } from 'next/router';
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
  handleRegister: UseMutateFunction<
    RegisterUserResponseApiDTO,
    ErrorType<ErrorResponseApiDTO>,
    {
      data: BodyType<RegisterUserRequestApiDTO>;
    },
    unknown
  >;
  handleLogout: () => void;
  isSigningIn: boolean;
  isRegistering: boolean;
  signInError: ErrorType<ErrorResponseApiDTO> | null;
  registerError: ErrorType<ErrorResponseApiDTO> | null;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState, removeAuthState] =
    useLocalStorage<AuthState | null>('user_information', null);

  const router = useRouter();

  const {
    mutate: handleLogin,
    isPending: isSigningIn,
    error: signInError,
  } = useSignInUser({
    mutation: {
      onSuccess: async (data) => {
        setAuthState({
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
        });
        await router.push('/');
      },
      onError: () => removeAuthState(),
    },
  });

  const {
    mutate: handleRegister,
    isPending: isRegistering,
    error: registerError,
  } = useRegisterUser({
    mutation: {
      onSuccess: async (data, variables, context) => {
        handleLogin({
          data: {
            email: variables.data.email,
            password: variables.data.password,
          },
        });
      },
      onError: (error) => console.log(error),
    },
  });

  const handleLogout = () => {
    setAuthState(null);
  };

  return (
    <AuthContext.Provider
      value={{
        handleRegister,
        isRegistering,
        registerError,
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
