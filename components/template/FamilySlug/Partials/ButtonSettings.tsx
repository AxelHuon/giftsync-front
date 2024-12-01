import { buttonVariants } from '@/components/atoms/Buttons/ClassicButton/Button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/atoms/Menu/DropDownMenu/dropdown-menu'
import DialogInviteUserRoom from '@/components/organisms/Dialog/DialogInviteUserRoom/DialogInviteUserRoom'
import { Pencil, Settings, UsersRound } from 'lucide-react'
import React, { useState } from 'react'

interface ButtonSettingsProps {
    roomId: string
}

const ButtonSettings: React.FC<ButtonSettingsProps> = ({ roomId }) => {
    const [openInviteUserDialog, setOpenInviteUserDialog] =
        useState<boolean>(false)

    const [openEditFamilyDialog, setOpenEditFamilyDialog] =
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
                    <DropdownMenuItem asChild>
                        <div className={'flex gap-2 items-center'}>
                            <Pencil size={12} />
                            Modifier la famille
                        </div>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <DialogInviteUserRoom
                roomId={roomId}
                open={openInviteUserDialog}
                setOpen={setOpenInviteUserDialog}
            />
        </>
    )
}

export default ButtonSettings
