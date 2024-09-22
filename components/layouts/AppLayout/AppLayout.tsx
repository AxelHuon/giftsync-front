import SideBar from '@/components/layouts/SideBar/SideBar';
import { useAuthContext } from '@/hooks/useAuth';
import { useSettings } from '@/providers/SettingsProvider';
import { useRouter } from 'next/router';
import React from 'react';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const { authState } = useAuthContext();
  const router = useRouter();
  if (!authState?.accessToken) {
    router?.push('/');
  }

  const { sideBarIsOpen } = useSettings();

  return (
    <article className={'w-full px-[5%] flex justify-end'}>
      <SideBar />
      <div
        className={`transition transition-[width] duration-200 ${
          sideBarIsOpen ? 'w-[calc(100%-350px)]' : 'w-[calc(100%-160px)]'
        } py-10`}
      >
        {children}
      </div>
    </article>
  );
};

export default AppLayout;
