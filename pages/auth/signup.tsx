import { Button } from '@/components/atoms/Buttons/ClassicButton/Button';
import Logo from '@/components/atoms/Logo/Logo';
import { RegisterForm } from '@/components/organisms/Form/RegisterForm/RegisterForm';
import { useAuthContext } from '@/context/AuthProvider';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import React from 'react';

const Signing: React.FC = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const { authState } = useAuthContext();

  if (authState?.accessToken) {
    router?.push('/');
  }

  return (
    <section className={'flex items-center container flex-row gap-3 h-screen'}>
      <aside className={'lg:w-1/2 w-full flex flex-col  gap-[50px]'}>
        <div className={'flex-col flex gap-[7px] lg:w-3/4'}>
          <h2 className={'text-5xl font-variable font-600 text-neutral-900 '}>
            On commence une histoire ensemble 🤙
          </h2>
          <p className={'font-variable font-400 text-neutral-700'}>
            Rentre t’es informations d'inscription ci-dessous !
          </p>
        </div>
        <div className={'flex flex-col gap-[20px] lg:w-3/4'}>
          <RegisterForm />
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
      </aside>
      <aside className={'lg:w-1/2 hidden lg:flex absolute right-0 p-2 h-full'}>
        <div
          className={
            'bg-[url("/images/background-login.png")] bg-center bg-cover bg-no-repeat h-full w-full flex items-center justify-center rounded-xl relative '
          }
        >
          <Logo colorText={'#FAFAFA'} colorIcon={'#FAFAFA'} />
          <div
            className={
              'absolute bottom-20 left-1/2 -translate-x-1/2 px-20 w-full text-center'
            }
          >
            <p
              className={`font-variable text-lg text-neutral-${theme === 'light' ? '50' : '600'}`}
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

export default Signing;
