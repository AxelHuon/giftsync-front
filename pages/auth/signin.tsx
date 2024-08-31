import { Button } from '@/components/atoms/Buttons/ClassicButton/Button';
import Logo from '@/components/atoms/Logo/Logo';
import { LoginForm } from '@/components/organisms/Form/LoginForm/LoginForm';
import { useAuthContext } from '@/context/AuthProvider';
import Colors from '@/utils/styles/colors';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import React from 'react';

const Signin: React.FC = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const { authState } = useAuthContext();

  if (authState?.accessToken) {
    router?.push('/');
  }

  return (
    <section
      className={
        'flex container flex-col laptop:flex-row gap-3 h-screen py-[80px] justify-between laptop:p-0'
      }
    >
      <aside className={'w-full flex flex-col justify-center gap-[50px]'}>
        <div
          className={'flex justify-center laptop:absolute laptop:top-[80px]'}
        >
          <Logo
            width={200}
            colorText={
              theme === 'light'
                ? Colors.Neutral['900'].hex
                : Colors.Neutral['25'].hex
            }
            colorIcon={Colors.Primary['900'].hex}
          />
        </div>
        <div className={'laptop:w-1/2 w-full flex flex-col  gap-[50px]'}>
          <div className={'flex-col flex gap-[20px] laptop:w-3/4'}>
            <h2
              className={
                'text-center laptop:text-left text-5xl font-variable font-600 text-neutral-900 '
              }
            >
              Content de te revoir 👋
            </h2>
            <p
              className={
                'font-variable text-center laptop:text-left font-400 text-neutral-700'
              }
            >
              Rentre t’es informations de connexion ci-dessous !
            </p>
          </div>
          <div className={'flex flex-col gap-[20px] lg:w-3/4'}>
            <LoginForm />
            <p className={'text-sm font-variable font-500'}>
              Vous n'avez pas encore de compte ?{'  '}
              <Button
                className={'p-0 h-fit font-variable font-600'}
                onClick={() => router.push('/auth/signup')}
                variant={'link'}
              >
                Inscrivez-vous
              </Button>
            </p>
          </div>
        </div>
      </aside>
      <aside
        className={
          'laptop:w-1/2 w-full laptop:flex laptop:absolute laptop:right-0 laptop:p-2 laptop:h-full'
        }
      >
        <div
          className={
            'laptop:bg-[url("/images/background-login.png")] h-fit bg-center bg-cover bg-no-repeat laptop:h-full w-full flex items-center justify-center rounded-xl relative '
          }
        >
          <div className={'laptop:flex hidden'}>
            <Logo
              colorText={Colors.Neutral['25'].hex}
              colorIcon={Colors.Neutral['25'].hex}
            />
          </div>
          <div
            className={
              'laptop:absolute laptop:bottom-20 laptop:left-1/2 laptop:-translate-x-1/2 laptop:px-20 w-full text-center'
            }
          >
            <p
              className={`font-variable text-lg text-neutral-900 laptop:text-neutral-${theme === 'light' ? '25' : '900'}`}
            >
              Transformez la magie de Noël en un jeu d'enfant : découvrez ce que
              vos proches désirent et organisez vos cadeaux en un clin d'œil !
              🎁✨
            </p>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Signin;
