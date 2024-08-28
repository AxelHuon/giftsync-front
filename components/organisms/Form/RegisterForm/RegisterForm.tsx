import { Button } from '@/components/atoms/Buttons/ClassicButton/Button';
import { Input } from '@/components/atoms/Input/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/organisms/Form/Form';
import { formRegisterSchema } from '@/utils/schemas/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export function RegisterForm() {
  const form = useForm<z.infer<typeof formRegisterSchema>>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formRegisterSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-[25px] w-full"
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
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mot de passe</FormLabel>
              <FormControl>
                <Input
                  type={'password'}
                  placeholder="Mot de passe"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirmation du mot de passe</FormLabel>
              <FormControl>
                <Input
                  type={'password'}
                  placeholder="Confirmation du mot de passe"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/*        {signInError && (
          <FormMessage>
            {translationSigninErrorMessageApi(
              signInError?.response?.data?.code ?? signInError?.message,
            )}
          </FormMessage>
        )}*/}
        <Button className={'w-full'} type="submit">
          {/*
          {isSigningIn && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
*/}
          Connexion
        </Button>
      </form>
    </Form>
  );
}
