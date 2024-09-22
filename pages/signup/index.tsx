import Logo from '@/components/atoms/Logo/Logo';
import { RegisterForm } from '@/components/organisms/Form/RegisterForm/RegisterForm';
import { useAuthContext } from '@/hooks/useAuth';
import Colors from '@/utils/styles/colors';
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
    <section
      className={
        'flex container flex-col laptop:flex-row h-screen justify-between py-[20px] mobileXL:py-[40px] laptop:py-[80px]'
      }
    >
      <aside
        className={
          'w-full gap-[15px] flex flex-col laptop:w-1/2 justify-center laptop:pr-[40px] '
        }
      >
        <div className={'flex justify-center'}>
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
        <div className={'flex flex-col gap-[30px] items-center'}>
          <div className={'flex flex-col max-w-xl gap-[20px] items-center'}>
            <h2
              className={
                'text-center  max-w-2xl text-4xl laptop:text-5xl font-variable font-600 text-neutral-900 '
              }
            >
              Commence tes listes de Noël 🎄
            </h2>
            <p
              className={'font-variable text-center  font-400 text-neutral-700'}
            >
              Rentre t’es informations d'inscription ci-dessous !
            </p>
          </div>
          <div className={'w-full laptop:max-w-[550px]'}>
            <RegisterForm />
          </div>
        </div>
      </aside>
      <aside
        className={
          'laptop:w-1/2 top-0 w-full laptop:flex laptop:absolute laptop:right-0 laptop:p-[17px] laptop:h-full'
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
              className={`font-variable text-sm laptop:text-lg text-neutral-900 laptop:text-neutral-always25`}
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
