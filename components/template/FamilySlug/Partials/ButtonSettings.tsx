import { buttonVariants } from '@/components/atoms/Buttons/ClassicButton/Button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/atoms/Menu/DropDownMenu/dropdown-menu'
import DialogDeleteRoom from '@/components/organisms/Dialog/DialogDeleteRoom/DialogDeleteRoom'
import DialogEditFamily from '@/components/organisms/Dialog/DialogEditFamily/DialogEditFamily'
import DialogInviteUserRoom from '@/components/organisms/Dialog/DialogInviteUserRoom/DialogInviteUserRoom'
import { UserCollectionGetUserOfRoomApiDTO } from '@/src/api/generated/Api.schemas'
import { Pencil, Settings, UsersRound } from 'lucide-react'
import React, { useState } from 'react'

interface ButtonSettingsProps {
    roomId: string
    isOwner: boolean
    currentTitle?: string
    users?: UserCollectionGetUserOfRoomApiDTO[]
    ownerId?: string
}

const ButtonSettings: React.FC<ButtonSettingsProps> = ({
    roomId,
    isOwner,
    currentTitle,
    users,
    ownerId,
}) => {
    const [openInviteUserDialog, setOpenInviteUserDialog] =
        useState<boolean>(false)

    const [openEditFamilyDialog, setOpenEditFamilyDialog] =
        useState<boolean>(false)

    const [openDialogDeleteRoom, setOpenDialogDeleteRoom] =
        useState<boolean>(false)

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div
                        className={
                            buttonVariants({ variant: 'default' }) +
                            'flex gap-2 items-center cursor-pointer'
                        }
                    >
                        Paramètres de la famille
                        <Settings size={18} />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem
                        asChild
                        onClick={() => setOpenInviteUserDialog(true)}
                    >
                        <div className={'flex gap-2 items-center'}>
                            <UsersRound size={12} />
                            Inviter de gens
                        </div>
                    </DropdownMenuItem>
                    {isOwner && (
                        <>
                            <DropdownMenuItem
                                onClick={() => setOpenEditFamilyDialog(true)}
                                asChild
                            >
                                <div className={'flex gap-2 items-center'}>
                                    <Pencil size={12} />
                                    Modifier la famille
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                className={
                                    'bg-destructive-200  hover:!bg-destructive-100 active:!bg-destructive-50'
                                }
                                onClick={() => setOpenDialogDeleteRoom(true)}
                            >
                                Supprimer la famille
                            </DropdownMenuItem>
                        </>
                    )}
                </DropdownMenuContent>
            </DropdownMenu>
            <DialogInviteUserRoom
                roomId={roomId}
                open={openInviteUserDialog}
                setOpen={setOpenInviteUserDialog}
            />
            <DialogEditFamily
                users={users}
                ownerId={ownerId}
                currentTitle={currentTitle}
                open={openEditFamilyDialog}
                setOpen={setOpenEditFamilyDialog}
                roomId={roomId}
            />
            <DialogDeleteRoom
                open={openDialogDeleteRoom}
                setOpen={setOpenDialogDeleteRoom}
                roomId={roomId}
            />
        </>
    )
}

export default ButtonSettings
