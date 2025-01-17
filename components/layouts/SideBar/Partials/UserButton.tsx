import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '@/components/atoms/Avatar/Avatar'
import { buttonVariants } from '@/components/atoms/Buttons/ClassicButton/Button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/atoms/Menu/DropDownMenu/dropdown-menu'
import DialogEditProfil from '@/components/organisms/Dialog/DialogEditProfil/DialogEditProfil'
import { useGetUserById } from '@/src/api/generated/user'
import { returnGoodUrlPdpUser } from '@/utils/userPdpUrl'
import { EllipsisIcon, ReceiptText, UserRoundIcon } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useState } from 'react'

const UserButton: React.FC = () => {
    const { data: session } = useSession()

    const { data: userData } = useGetUserById(session?.user?.id ?? '', {
        query: { enabled: !!session },
    })

    const [editProfileDialogOpen, setEditProfileDialogOpen] =
        useState<boolean>(false)

    const userPdpUrl = returnGoodUrlPdpUser(userData?.profilePicture ?? '')

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div
                        className={
                            buttonVariants({ variant: 'outline' }) +
                            `flex items-center h-[60px] p-[12px] gap-3 cursor-pointer relative  justify-between`
                        }
                    >
                        <div
                            className={`flex items-center gap-2 justify-start `}
                        >
                            <Avatar>
                                <AvatarImage src={userPdpUrl} />
                                <AvatarFallback>
                                    {userData?.firstName[0]}
                                    {userData?.lastName[0]}
                                </AvatarFallback>
                            </Avatar>
                            <p className={'text-base font-500'}>
                                {userData?.firstName} {userData?.lastName}
                            </p>
                        </div>
                        <EllipsisIcon className={`rotate-90 `} />
                    </div>
                </DropdownMenuTrigger>
                {/*End Button*/}
                <DropdownMenuContent align={'end'} className="w-56">
                    <DropdownMenuLabel>
                        <div className={'flex items-center gap-3'}>
                            <Avatar style={{ width: '35px', height: '35px' }}>
                                <AvatarImage src={userPdpUrl} />
                                <AvatarFallback>
                                    {userData?.firstName[0]}
                                    {userData?.lastName[0]}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <p className={'text-base font-500'}>
                                    {userData?.firstName} {userData?.lastName}
                                </p>
                                <p className={'text-xs font-300'}>
                                    {userData?.email}
                                </p>
                            </div>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem asChild>
                            <div
                                onClick={() => setEditProfileDialogOpen(true)}
                                className={'flex items-center gap-1'}
                            >
                                <UserRoundIcon size={'16px'} />
                                <p className={'text-sm'}>Paramètres</p>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link
                                className={'flex items-center gap-1'}
                                href={`/user/${userData?.id}`}
                            >
                                <ReceiptText size={'16px'} />
                                <p className={'text-sm'}>Support</p>
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        className={
                            'bg-destructive-200  hover:!bg-destructive-100 active:!bg-destructive-50'
                        }
                        onClick={() => signOut({ callbackUrl: '/auth/signin' })}
                    >
                        Déconnexion
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <DialogEditProfil
                setOpen={setEditProfileDialogOpen}
                open={editProfileDialogOpen}
            />
        </>
    )
}

export default UserButton
