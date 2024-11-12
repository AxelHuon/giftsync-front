import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/moleculs/Dialog/Dialog'
import { EditUserInformationForm } from '@/components/organisms/Form/EditUserInformationForm/EditUserInformationForm'
import React from 'react'

interface DialogEditProfilProps {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DialogEditProfil: React.FC<DialogEditProfilProps> = ({
    open,
    setOpen,
}) => {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="mobileL:max-w-[90%]  laptop:max-w-[700px] gap-[35px]">
                <DialogHeader>
                    <DialogTitle className={'text-2xl'}>
                        Paramètre de votre compte
                    </DialogTitle>
                    <DialogDescription className={'text-base'}>
                        Vous pouvez modifier les informations de votre compte
                        ici.
                    </DialogDescription>
                </DialogHeader>
                <EditUserInformationForm />
            </DialogContent>
        </Dialog>
    )
}

export default DialogEditProfil
