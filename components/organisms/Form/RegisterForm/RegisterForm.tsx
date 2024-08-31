// components/organisms/Form/RegisterForm/RegisterForm.tsx

import {
  Button,
  buttonVariants,
} from '@/components/atoms/Buttons/ClassicButton/Button';
import { Input } from '@/components/atoms/Input/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/atoms/Popover/Popover';
import { Calendar } from '@/components/moleculs/Calendar/Calendar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/organisms/Form/Form';
import { useAuthContext } from '@/context/AuthProvider';

import { cn } from '@/lib/utils';
import { formRegisterSchema } from '@/utils/schemas/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { CalendarIcon, ReloadIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export function RegisterForm() {
  const { handleRegister, isRegistering, isSigningIn, registerError } =
    useAuthContext();
  const form = useForm<z.infer<typeof formRegisterSchema>>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formRegisterSchema>) => {
    handleRegister({
      data: {
        email: values.email,
        password: values.password,
        firstName: values.firstName,
        lastName: values.lastName,
      },
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5 w-full"
      >
        <div className={'flex justify-between gap-[20px]'}>
          <div className={'w-1/2'}>
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prénom</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className={'w-1/2'}>
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom</FormLabel>
                  <FormControl>
                    <Input placeholder="Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <FormField
          control={form.control}
          name="birthDay"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormLabel>Date of birth</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-full pl-3 text-left font-normal',
                        !field.value && 'text-muted-foreground',
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'd MMMM yyyy', { locale: fr })
                      ) : (
                        <span>Choisis une date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    showOutsideDays={false}
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date('1900-01-01')
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
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
                <Input type="password" placeholder="Mot de passe" {...field} />
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
              <FormLabel>Confirmer le mot de passe</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Confirmer le mot de passe"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {registerError && <FormMessage>{registerError.message}</FormMessage>}
        <Button
          className={'w-full'}
          disabled={isRegistering || isSigningIn}
          type="submit"
        >
          {isRegistering ||
            (isSigningIn && (
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            ))}
          S'inscrire
        </Button>
        <p className={'text-sm font-variable font-500 text-center'}>
          T'as déjà un compte ?{'  '}
          <Link
            href={'/auth/signin'}
            className={
              buttonVariants({ variant: 'link' }) + '  w-fit !p-0 h-fit'
            }
          >
            Connecte-toi
          </Link>
        </p>
      </form>
    </Form>
  );
}
