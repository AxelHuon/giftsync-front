import AppLayout from '@/components/layouts/AppLayout/AppLayout';
import { useAuthContext } from '@/hooks/useAuth';
import { useGetUserById } from '@/src/api/generated/user';
import { useRouter } from 'next/router';
import React from 'react';

const Home = () => {
  /*Get routerQueryId*/
  const router = useRouter();
  const { id } = router.query;
  const { authState } = useAuthContext();

  const { data: userInfo } = useGetUserById((id as string) ?? '');

  return <AppLayout>dsqdqs</AppLayout>;
};

export default Home;
