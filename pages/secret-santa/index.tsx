import { SecretSantaForm } from '@/components/organisms/Form/SecretSantaForm/SecretSantaForm'
import { InfoIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const SecretSanta: React.FC = () => {
    return (
        <section>
            <div
                className={
                    'flex flex-col gap-[30px] relative max-w-[1200px] m-auto'
                }
            >
                <div className={'h-[250px] flex items-center justify-center'}>
                    <div
                        className={
                            'absolute left-0 top-0 w-full h-[250px] rounded-xl'
                        }
                    >
                        <Image
                            className={'h-full w-full object-cover rounded-xl'}
                            src={'/images/bg-secret.webp'}
                            alt={'background-login'}
                            width={1000}
                            height={300}
                        />
                    </div>
                    <div className={'z-10 relative'}>
                        <h1
                            className={`font-600 text-white text-4xl laptop:text-5xl`}
                        >
                            Secret Santa 🎁
                        </h1>
                    </div>
                </div>
                <div className={'p-[20px] rounded-xl relative'}>
                    <div
                        className={
                            'absolute left-0 w-full h-full rounded-xl top-0 bg-primary-500 opacity-40 z-20'
                        }
                    ></div>
                    <div
                        className={
                            'relative z-30 flex gap-2 justify-start items-start'
                        }
                    >
                        <InfoIcon className={'w-[20px] min-w-[20px]'} />
                        <p className={'text-base font-400'}>
                            Le titre que vous choisissez sera utilisé comme
                            objet du mail que chaque participant recevra. Pour
                            organiser un Secret Santa, il faut un minimum de 3
                            participants pour garantir le tirage au sort 🎅🎁
                        </p>
                    </div>
                </div>
                <SecretSantaForm />
            </div>
        </section>
    )
}

export default SecretSanta
