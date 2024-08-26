/**
 * Generated by orval v7.0.1 🍺
 * Do not edit manually.
 * noel-listing-back-end
 * OpenAPI spec version: 1.0.0
 */
import { useMutation } from '@tanstack/react-query';
import type {
  MutationFunction,
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query';
import type {
  ErrorResponseApiDTO,
  ForgotPasswordResetPasswordRequestApiDTO,
  ForgotPasswordResetPasswordResponseApiDTO,
  RefreshTokenRequestApiDTO,
  RefreshTokenResponseApiDTO,
  RegisterUserRequestApiDTO,
  RegisterUserResponseApiDTO,
  ResetPasswordRequestApiDTO,
  ResetPasswordResponseApiDTO,
  SignInUserRequestApiDTO,
  SignInUserResponseApiDTO,
} from './Api.schemas';
import { customInstance } from '../customInstance';
import type { ErrorType, BodyType } from '../customInstance';

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

export const registerUser = (
  registerUserRequestApiDTO: BodyType<RegisterUserRequestApiDTO>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<RegisterUserResponseApiDTO>(
    {
      url: `/auth/signup`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: registerUserRequestApiDTO,
    },
    options,
  );
};

export const getRegisterUserMutationOptions = <
  TError = ErrorType<ErrorResponseApiDTO>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof registerUser>>,
    TError,
    { data: BodyType<RegisterUserRequestApiDTO> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof registerUser>>,
  TError,
  { data: BodyType<RegisterUserRequestApiDTO> },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof registerUser>>,
    { data: BodyType<RegisterUserRequestApiDTO> }
  > = (props) => {
    const { data } = props ?? {};

    return registerUser(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type RegisterUserMutationResult = NonNullable<
  Awaited<ReturnType<typeof registerUser>>
>;
export type RegisterUserMutationBody = BodyType<RegisterUserRequestApiDTO>;
export type RegisterUserMutationError = ErrorType<ErrorResponseApiDTO>;

export const useRegisterUser = <
  TError = ErrorType<ErrorResponseApiDTO>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof registerUser>>,
    TError,
    { data: BodyType<RegisterUserRequestApiDTO> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof registerUser>>,
  TError,
  { data: BodyType<RegisterUserRequestApiDTO> },
  TContext
> => {
  const mutationOptions = getRegisterUserMutationOptions(options);

  return useMutation(mutationOptions);
};
export const signInUser = (
  signInUserRequestApiDTO: BodyType<SignInUserRequestApiDTO>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<SignInUserResponseApiDTO>(
    {
      url: `/auth/signin`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: signInUserRequestApiDTO,
    },
    options,
  );
};

export const getSignInUserMutationOptions = <
  TError = ErrorType<ErrorResponseApiDTO>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof signInUser>>,
    TError,
    { data: BodyType<SignInUserRequestApiDTO> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof signInUser>>,
  TError,
  { data: BodyType<SignInUserRequestApiDTO> },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof signInUser>>,
    { data: BodyType<SignInUserRequestApiDTO> }
  > = (props) => {
    const { data } = props ?? {};

    return signInUser(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type SignInUserMutationResult = NonNullable<
  Awaited<ReturnType<typeof signInUser>>
>;
export type SignInUserMutationBody = BodyType<SignInUserRequestApiDTO>;
export type SignInUserMutationError = ErrorType<ErrorResponseApiDTO>;

export const useSignInUser = <
  TError = ErrorType<ErrorResponseApiDTO>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof signInUser>>,
    TError,
    { data: BodyType<SignInUserRequestApiDTO> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof signInUser>>,
  TError,
  { data: BodyType<SignInUserRequestApiDTO> },
  TContext
> => {
  const mutationOptions = getSignInUserMutationOptions(options);

  return useMutation(mutationOptions);
};
export const refreshToken = (
  refreshTokenRequestApiDTO: BodyType<RefreshTokenRequestApiDTO>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<RefreshTokenResponseApiDTO>(
    {
      url: `/auth/refresh-token`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: refreshTokenRequestApiDTO,
    },
    options,
  );
};

export const getRefreshTokenMutationOptions = <
  TError = ErrorType<ErrorResponseApiDTO>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof refreshToken>>,
    TError,
    { data: BodyType<RefreshTokenRequestApiDTO> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof refreshToken>>,
  TError,
  { data: BodyType<RefreshTokenRequestApiDTO> },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof refreshToken>>,
    { data: BodyType<RefreshTokenRequestApiDTO> }
  > = (props) => {
    const { data } = props ?? {};

    return refreshToken(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type RefreshTokenMutationResult = NonNullable<
  Awaited<ReturnType<typeof refreshToken>>
>;
export type RefreshTokenMutationBody = BodyType<RefreshTokenRequestApiDTO>;
export type RefreshTokenMutationError = ErrorType<ErrorResponseApiDTO>;

export const useRefreshToken = <
  TError = ErrorType<ErrorResponseApiDTO>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof refreshToken>>,
    TError,
    { data: BodyType<RefreshTokenRequestApiDTO> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof refreshToken>>,
  TError,
  { data: BodyType<RefreshTokenRequestApiDTO> },
  TContext
> => {
  const mutationOptions = getRefreshTokenMutationOptions(options);

  return useMutation(mutationOptions);
};
export const requetsForgotPassword = (
  resetPasswordRequestApiDTO: BodyType<ResetPasswordRequestApiDTO>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<ResetPasswordResponseApiDTO>(
    {
      url: `/auth/request-forgot-password`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: resetPasswordRequestApiDTO,
    },
    options,
  );
};

export const getRequetsForgotPasswordMutationOptions = <
  TError = ErrorType<ErrorResponseApiDTO>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof requetsForgotPassword>>,
    TError,
    { data: BodyType<ResetPasswordRequestApiDTO> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof requetsForgotPassword>>,
  TError,
  { data: BodyType<ResetPasswordRequestApiDTO> },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof requetsForgotPassword>>,
    { data: BodyType<ResetPasswordRequestApiDTO> }
  > = (props) => {
    const { data } = props ?? {};

    return requetsForgotPassword(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type RequetsForgotPasswordMutationResult = NonNullable<
  Awaited<ReturnType<typeof requetsForgotPassword>>
>;
export type RequetsForgotPasswordMutationBody =
  BodyType<ResetPasswordRequestApiDTO>;
export type RequetsForgotPasswordMutationError = ErrorType<ErrorResponseApiDTO>;

export const useRequetsForgotPassword = <
  TError = ErrorType<ErrorResponseApiDTO>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof requetsForgotPassword>>,
    TError,
    { data: BodyType<ResetPasswordRequestApiDTO> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof requetsForgotPassword>>,
  TError,
  { data: BodyType<ResetPasswordRequestApiDTO> },
  TContext
> => {
  const mutationOptions = getRequetsForgotPasswordMutationOptions(options);

  return useMutation(mutationOptions);
};
export const forgotPassword = (
  forgotPasswordResetPasswordRequestApiDTO: BodyType<ForgotPasswordResetPasswordRequestApiDTO>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<ForgotPasswordResetPasswordResponseApiDTO>(
    {
      url: `/auth/forgot-password`,
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      data: forgotPasswordResetPasswordRequestApiDTO,
    },
    options,
  );
};

export const getForgotPasswordMutationOptions = <
  TError = ErrorType<ErrorResponseApiDTO>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof forgotPassword>>,
    TError,
    { data: BodyType<ForgotPasswordResetPasswordRequestApiDTO> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof forgotPassword>>,
  TError,
  { data: BodyType<ForgotPasswordResetPasswordRequestApiDTO> },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof forgotPassword>>,
    { data: BodyType<ForgotPasswordResetPasswordRequestApiDTO> }
  > = (props) => {
    const { data } = props ?? {};

    return forgotPassword(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type ForgotPasswordMutationResult = NonNullable<
  Awaited<ReturnType<typeof forgotPassword>>
>;
export type ForgotPasswordMutationBody =
  BodyType<ForgotPasswordResetPasswordRequestApiDTO>;
export type ForgotPasswordMutationError = ErrorType<ErrorResponseApiDTO>;

export const useForgotPassword = <
  TError = ErrorType<ErrorResponseApiDTO>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof forgotPassword>>,
    TError,
    { data: BodyType<ForgotPasswordResetPasswordRequestApiDTO> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof forgotPassword>>,
  TError,
  { data: BodyType<ForgotPasswordResetPasswordRequestApiDTO> },
  TContext
> => {
  const mutationOptions = getForgotPasswordMutationOptions(options);

  return useMutation(mutationOptions);
};
