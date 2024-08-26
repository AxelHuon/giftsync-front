import { useAuthContext } from '@/context/AuthProvider';
import React, { useEffect, useState } from 'react';

const RegisterForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { handleLogin, isSigningIn, authState, signInError } = useAuthContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin({ data: { email, password } });
  };

  useEffect(() => {
    console.log(signInError);
  }, [signInError]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
        {isSigningIn && <p>loading</p>}
      </form>
      <p>{authState && authState?.accessToken}</p>
      <p>{signInError?.response?.data?.message}</p>
    </>
  );
};

export default RegisterForm;
