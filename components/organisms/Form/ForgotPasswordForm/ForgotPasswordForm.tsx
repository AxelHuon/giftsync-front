import { Button } from '@/components/atoms/Buttons/ClassicButton/Button';
import { Input } from '@/components/atoms/Input/input';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/organisms/Form/Form';
import { useAuthContext } from '@/hooks/useAuth';
import { formForgotPassword } from '@/utils/schemas/auth.schema';
import { translationForgotPasswordErrorMessageApi } from '@/utils/translationErrorMessageApi/translationErrorMessageApi';
import { zodResolver } from '@hookform/resolvers/zod';
import { ReloadIcon } from '@radix-ui/react-icons';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export function ForgotPasswordForm() {
  const form = useForm<z.infer<typeof formForgotPassword>>({
    resolver: zodResolver(formForgotPassword),
    defaultValues: {
      email: '',
    },
  });

  const { handleForgotPassword, isPendingForgotPassword, forgotPasswordError } =
    useAuthContext();

  const onSubmit = async (values: z.infer<typeof formForgotPassword>) => {
    handleForgotPassword({ data: values });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5 w-full"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adresse mail</FormLabel>
              <FormControl>
                <Input placeholder="exemple@email.com" {...field} />
              </FormControl>
              <FormDescription>
                Rentre l'email assoicié à ton compte
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {forgotPasswordError && (
          <FormMessage>
            {translationForgotPasswordErrorMessageApi(
              forgotPasswordError?.response?.data?.code ??
                forgotPasswordError?.message,
            )}
          </FormMessage>
        )}
        <Button
          className={'w-full'}
          disabled={isPendingForgotPassword}
          type="submit"
        >
          {isPendingForgotPassword && (
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          )}
          Connexion
        </Button>
      </form>
    </Form>
  );
}
