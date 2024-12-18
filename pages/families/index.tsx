import { Button } from '@/components/atoms/Buttons/ClassicButton/Button'
import FamilyCard from '@/components/moleculs/FamilyCard/FamilyCard'
import DialogCreateFamily from '@/components/organisms/Dialog/DialogCreateFamily/DialogCreateFamily'
import { useAuthContext } from '@/hooks/useAuth'
import { withAuthRoute } from '@/lib/withAuthRoute'
import { useGetRoomsOfUser } from '@/src/api/generated/user'
import { generateId } from '@/utils/id'
import { InfoIcon, PlusIcon } from 'lucide-react'
import { GetServerSideProps } from 'next'
import React, { useState } from 'react'

const FamilliesIndex: React.FC = () => {
    const { authState } = useAuthContext()

    const { data: families } = useGetRoomsOfUser(authState?.id ?? '', {
        query: { enabled: !!authState },
    })
    const [createFamilyDialogOpen, setCreateFamilyDialogOpen] =
        useState<boolean>(false)

    return (
        <div className={'flex flex-col gap-[29px]'}>
            <div className={'flex flex-row justify-between'}>
                <h1
                    className={
                        'text-2xl laptop:text-4xl font-variable font-600 text-neutral-900 '
                    }
                >
                    Vos familles 🏡
                </h1>
                <Button
                    onClick={() => setCreateFamilyDialogOpen(true)}
                    className={'flex flex-row gap-2 items-center'}
                >
                    Créer une famille
                    <PlusIcon width={19} />
                </Button>
            </div>
            <DialogCreateFamily
                open={createFamilyDialogOpen}
                setOpen={setCreateFamilyDialogOpen}
            />
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
                        Créez une famille, invitez vos proches et organisez Noël
                        facilement grâce à des listes de cadeaux personnalisées.
                        Chaque liste est unique et rattachée à une seule famille
                        pour une gestion simple et conviviale.
                    </p>
                </div>
            </div>
            <div
                className={
                    'w-full grid gap-[20px] grid-cols-1 laptop:grid-cols-3 laptop:gap-[25px]'
                }
            >
                {families?.map((family) => {
                    return <FamilyCard family={family} key={generateId()} />
                })}
            </div>
        </div>
    )
}

export default FamilliesIndex

export const getServerSideProps: GetServerSideProps = withAuthRoute(
    async (context) => {
        return {
            props: {},
        }
    }
)
