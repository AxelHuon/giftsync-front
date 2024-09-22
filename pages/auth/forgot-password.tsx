import { Button } from '@/components/atoms/Buttons/ClassicButton/Button';
import Logo from '@/components/atoms/Logo/Logo';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/moleculs/Dialog/Dialog';

import { ForgotPasswordForm } from '@/components/organisms/Form/ForgotPasswordForm/ForgotPasswordForm';
import { useAuthContext } from '@/hooks/useAuth';
import Colors from '@/utils/styles/colors';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Signing: React.FC = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const { authState } = useAuthContext();

  if (authState?.accessToken) {
    router?.push('/');
  }

  const { isSuccessForgotPassword } = useAuthContext();

  const [dialogIsOpen, setDialogIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isSuccessForgotPassword) {
      setDialogIsOpen(true);
    }
  }, [isSuccessForgotPassword]);

  return (
    <section
      className={
        'flex container flex-col laptop:flex-row h-screen justify-between py-[20px] mobileXL:py-[40px] laptop:py-[80px]'
      }
    >
      <Dialog open={dialogIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>C'est presque finis ✅</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Un mail vous a été envoyé pour réinitialiser votre mot de passe.
            Verifiez votre boite mail et suivez les instructions.
          </DialogDescription>
          <DialogDescription>
            Verifiez les spams si vous ne trouvez pas le mail.
          </DialogDescription>
          <DialogFooter>
            <Button onClick={() => setDialogIsOpen(false)}>Compris !</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <aside
        className={
          'w-full  flex flex-col gap-[40px]  justify-center laptop:pr-[40px] '
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
          <div className={'flex flex-col max-w-2xl gap-[20px] items-center'}>
            <h2
              className={
                'text-center text-4xl laptop:text-5xl font-variable font-600 text-neutral-900 '
              }
            >
              Réinitialisation de mot de passe 🔐
            </h2>
            <p
              className={'font-variable text-center  font-400 text-neutral-700'}
            >
              Pas de soucis, tu vas pouvoir retrouver ton mot de passe en un
              rien de temps !
            </p>
          </div>
          <div className={'w-full laptop:max-w-[550px]'}>
            <ForgotPasswordForm />
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Signing;
