import { useAuthContext } from '@/context/AuthProvider';
import React from 'react';

const Home = () => {
  const { authState } = useAuthContext();
  return <>{authState?.refreshToken}</>;
};

export default Home;
