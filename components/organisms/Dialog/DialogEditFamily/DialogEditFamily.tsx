import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '@/components/atoms/Avatar/Avatar'
import { Button } from '@/components/atoms/Buttons/ClassicButton/Button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/moleculs/Dialog/Dialog'
import { EditFamilyForm } from '@/components/organisms/Form/EditFamilyForm/EditFamilyForm'
import {
    TabsContent,
    TabsList,
    TabsTrigger,
} from '@/components/organisms/Tabs/tabs'
import { toast } from '@/hooks/useToast'
import { UserCollectionGetUserOfRoomApiDTO } from '@/src/api/generated/Api.schemas'
import {
    useDeleteUserFromARomm,
    useGetRoomById,
} from '@/src/api/generated/room'
import { Tabs } from '@radix-ui/react-tabs'
import { DeleteIcon } from 'lucide-react'
import { useRouter } from 'next/router'
import React from 'react'

interface DialogEditProfilProps {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    roomId: string
    currentTitle?: string
    users?: UserCollectionGetUserOfRoomApiDTO[]
    ownerId?: string
}

const DialogEditFamily: React.FC<DialogEditProfilProps> = ({
    open,
    setOpen,
    roomId,
    currentTitle,
    users,
    ownerId,
}) => {
    const router = useRouter()
    const { slug } = router.query
    const { refetch } = useGetRoomById(slug as string, {
        query: { enabled: false },
    })

    const { mutate } = useDeleteUserFromARomm({
        mutation: {
            onSuccess: async () => {
                toast({
                    variant: 'success',
                    title: "L'utilisateur a bien été supprimé",
                })
                await refetch()
            },
        },
    })

    const deleteUser = async (userId: string) => {
        await mutate({ roomId, userId })
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="mobileL:max-w-[90%]  laptop:max-w-[700px] gap-[20px]">
                <DialogHeader>
                    <DialogTitle className={'text-2xl'}>
                        Modifier votre famille
                    </DialogTitle>
                    <DialogDescription>
                        Vous pouvez modifier les informations de votre famille
                        ainsi que les membres qui la compose.
                    </DialogDescription>
                </DialogHeader>
                <Tabs
                    defaultValue="informations"
                    className="w-full flex flex-col gap-[16px]"
                >
                    <TabsList className={'w-full bg-neutral-100'}>
                        <TabsTrigger
                            className={'flex items-center justify-center w-1/2'}
                            value="informations"
                        >
                            Informations
                        </TabsTrigger>
                        <TabsTrigger
                            className={'flex items-center justify-center w-1/2'}
                            value="members"
                        >
                            Membres
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value={'informations'}>
                        <EditFamilyForm
                            currentTitle={currentTitle}
                            setOpen={setOpen}
                            roomId={roomId}
                        />
                    </TabsContent>
                    <TabsContent value={'members'}>
                        <div className={'flex flex-col gap-3'}>
                            {users
                                ?.filter((element) => element.id !== ownerId)
                                .map((user) => {
                                    return (
                                        <div
                                            onClick={() => deleteUser(user.id)}
                                            className={'flex justify-between'}
                                        >
                                            <div
                                                className={
                                                    'flex gap-2 items-center'
                                                }
                                                key={user.id}
                                            >
                                                <Avatar>
                                                    <AvatarImage
                                                        src={
                                                            user.profilePicture
                                                        }
                                                        alt={user.firstName}
                                                    />
                                                    <AvatarFallback>
                                                        {user.firstName[0]}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <p
                                                    className={
                                                        'text-base font-500'
                                                    }
                                                >
                                                    {user.firstName}{' '}
                                                    {user.lastName}
                                                </p>
                                            </div>
                                            <Button
                                                className={
                                                    'flex items-center justify-center gap-2'
                                                }
                                                variant={'destructive'}
                                            >
                                                Supprimer
                                                <DeleteIcon width={16} />
                                            </Button>
                                        </div>
                                    )
                                })}
                        </div>
                    </TabsContent>
                </Tabs>
            </DialogContent>
        </Dialog>
    )
}

export default DialogEditFamily
