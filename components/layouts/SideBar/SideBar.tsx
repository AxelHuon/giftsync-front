import { Button } from '@/components/atoms/Buttons/ClassicButton/Button';
import { ToggleButtonMode } from '@/components/atoms/Buttons/ToggleButtonMode/ToggleButtonMode';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuthContext } from '@/hooks/useAuth';
import { useSettings } from '@/providers/SettingsProvider';
import { Separator } from '@radix-ui/react-separator';
import { ArrowRight, LayoutDashboard, List, LogOut, Users } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
  const router = useRouter();
  const { authState, handleLogout } = useAuthContext();

  useEffect(() => {
    if (!authState?.accessToken) {
      router?.push('/');
    }
  }, []);

  const { toggleSideBar, sideBarIsOpen } = useSettings();

  return (
    <section
      className={`fixed flex flex-col justify-between left-0 h-[100vh] bg-neutral-50 transition-property:width duration-200 ${
        sideBarIsOpen ? 'w-[350px]' : 'w-[145px]'
      } p-10`}
    >
      <Button
        className={
          'w-fit absolute bg-neutral-25 right-[-20px] top-1/2 p-2 rounded-2xl '
        }
        variant={'outline'}
        onClick={() => toggleSideBar()}
      >
        <ArrowRight
          className={`${
            sideBarIsOpen ? 'rotate-180' : ''
          } transition-property:rotate duration-200 ease-in-out`}
        />
      </Button>
      <aside className={'flex flex-col gap-[20px]'}>
        <Button
          variant={'outline'}
          className={`flex border-2 h-[55px] relative ${
            router.asPath === `/profile/${authState?.id}` &&
            'border-2 border-primary-500'
          }`}
          asChild
        >
          <Link href={`/profile/${authState?.id}`}>
            <Avatar
              className={`border border-neutral-900 absolute ${
                sideBarIsOpen ? 'left-[10px]' : 'left-1/2 -translate-x-1/2'
              } transition-property:left,translate-x duration-150`}
            >
              <AvatarImage src="/images/default-user-pdp.png" />
              <AvatarFallback>
                {authState?.firstName[0]}
                {authState?.lastName[0]}
              </AvatarFallback>
            </Avatar>
            <p
              className={`text-base font-variable font-600 text-neutral-900 absolute ${
                sideBarIsOpen ? 'opacity-100' : 'opacity-0'
              } transition-property:opacity duration-100 left-[60px] ${
                router.asPath === `/profile/${authState?.id}` &&
                'text-primary-500'
              }`}
            >
              {authState?.firstName} {authState?.lastName}
            </p>
          </Link>
        </Button>
        <Separator className="border my-1 !border-neutral-300" />
        <div className={'flex flex-col gap-[10px]'}>
          <Button
            variant={'outline'}
            className={`!justify-start gap-2 ${
              router.pathname === '/dashboard' &&
              'text-primary-500 border-2 border-primary-500'
            }`}
            asChild
          >
            <Link href={'/dashboard'}>
              <LayoutDashboard
                size={'17'}
                className={`${
                  sideBarIsOpen ? '' : 'absolute left-1/2 -translate-x-1/2'
                } transition-property:left,translate-x duration-150`}
              />
              <span
                className={`${
                  sideBarIsOpen ? 'opacity-100 ml-2' : 'opacity-0'
                } transition-property:opacity duration-100`}
              >
                Dashboard
              </span>
            </Link>
          </Button>
          <Button
            variant={'outline'}
            className={`!justify-start gap-2 ${
              router.pathname === '/familles' &&
              'text-primary-500 border-2 border-primary-500'
            }`}
            asChild
          >
            <Link href={'/familles'}>
              <Users
                size={'17'}
                className={`${
                  sideBarIsOpen ? '' : 'absolute left-1/2 -translate-x-1/2'
                } transition-property:left,translate-x duration-150`}
              />
              <span
                className={`${
                  sideBarIsOpen ? 'opacity-100 ml-2' : 'opacity-0'
                } transition-property:opacity duration-100`}
              >
                Familles
              </span>
            </Link>
          </Button>
          <Button
            variant={'outline'}
            className={`!justify-start gap-2 ${
              router.pathname === '/listes' &&
              'text-primary-500 border-2 border-primary-500'
            }`}
            asChild
          >
            <Link href={'/listes'}>
              <List
                size={'17'}
                className={`${
                  sideBarIsOpen ? '' : 'absolute left-1/2 -translate-x-1/2'
                } transition-property:left,translate-x duration-150`}
              />
              <span
                className={`${
                  sideBarIsOpen ? 'opacity-100 ml-2' : 'opacity-0'
                } transition-property:opacity duration-100`}
              >
                Listes
              </span>
            </Link>
          </Button>
        </div>
      </aside>
      <aside className={'flex flex-col gap-[20px]'}>
        <Separator className="border my-1 !border-neutral-300" />
        <ToggleButtonMode />
        <Button
          onClick={() => handleLogout()}
          className={
            'w-full justify-start bg-destructive-400/70 hover:bg-destructive-400/80 active:hover:bg-destructive-400/100 gap-2'
          }
          variant={'destructive'}
        >
          <LogOut
            size={'17'}
            className={`${
              sideBarIsOpen ? '' : 'absolute left-1/2 -translate-x-1/2'
            } transition-property:left,translate-x duration-150`}
          />
          <span
            className={`${
              sideBarIsOpen ? 'opacity-100 ml-2' : 'opacity-0'
            } transition-property:opacity duration-100`}
          >
            Déconnexion
          </span>
        </Button>
      </aside>
    </section>
  );
};

export default SideBar;
