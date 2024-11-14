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
import { useAuthContext } from '@/hooks/useAuth'
import { useSettings } from '@/providers/SettingsProvider'
import { useGetUserById } from '@/src/api/generated/user'
import { EllipsisIcon, ReceiptText, UserRoundIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const UserButton: React.FC = () => {
    const { authState, handleLogout } = useAuthContext()
    const { sideBarIsOpen } = useSettings()

    const { data: userData } = useGetUserById(authState?.id ?? '')

    console.log(authState?.id)

    const [editProfileDialogOpen, setEditProfileDialogOpen] =
        useState<boolean>(false)

    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL

    return (
        <>
            <DropdownMenu>
                {/*Button*/}
                <DropdownMenuTrigger asChild>
                    <div
                        className={
                            buttonVariants({ variant: 'outline' }) +
                            `flex items-center h-[60px] p-[12px] gap-3 cursor-pointer relative ${sideBarIsOpen ? 'justify-between' : 'justify-center'}`
                        }
                    >
                        <div
                            className={`flex items-center gap-2 ${sideBarIsOpen ? 'justify-start' : 'justify-center'}`}
                        >
                            <Avatar>
                                <AvatarImage
                                    src={`${backendUrl}${userData?.profilePicture}`}
                                />
                                <AvatarFallback>
                                    {userData?.firstName[0]}
                                    {userData?.lastName[0]}
                                </AvatarFallback>
                            </Avatar>
                            {sideBarIsOpen && (
                                <p className={'text-base'}>
                                    {userData?.firstName} {userData?.lastName}
                                </p>
                            )}
                        </div>
                        {sideBarIsOpen && (
                            <EllipsisIcon
                                className={`rotate-90 ${sideBarIsOpen ? 'opacity-100' : 'opacity-0'} transition-property:opacity duration-200 `}
                            />
                        )}
                    </div>
                </DropdownMenuTrigger>
                {/*End Button*/}
                <DropdownMenuContent
                    align={sideBarIsOpen ? 'end' : 'start'}
                    className="w-56"
                >
                    <DropdownMenuLabel>
                        <div className={'flex items-center gap-3'}>
                            <Avatar style={{ width: '35px', height: '35px' }}>
                                <AvatarImage
                                    src={`${backendUrl}${userData?.profilePicture}`}
                                />
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
                        onClick={() => handleLogout()}
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
