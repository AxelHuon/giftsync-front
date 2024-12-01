import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/moleculs/Dialog/Dialog'
import { InviteUserToFamilyForm } from '@/components/organisms/Form/CreateFamilyForm/InviteUserToFamilyForm'
import React from 'react'

interface DialogEditProfilProps {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    roomId: string
}

const DialogInviteUserRoom: React.FC<DialogEditProfilProps> = ({
    open,
    setOpen,
    roomId,
}) => {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="mobileL:max-w-[90%]  laptop:max-w-[700px] gap-[20px]">
                <DialogHeader>
                    <DialogTitle className={'text-2xl'}>
                        Inviter des gens dans votre famille
                    </DialogTitle>
                    <DialogDescription>
                        La ou les personnes invitées recevront un mail avec un
                        lien pour rejoindre la famille
                    </DialogDescription>
                </DialogHeader>
                <InviteUserToFamilyForm setOpen={setOpen} roomId={roomId} />
            </DialogContent>
        </Dialog>
    )
}

export default DialogInviteUserRoom
