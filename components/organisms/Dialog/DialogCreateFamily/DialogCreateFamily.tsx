import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/moleculs/Dialog/Dialog'
import { CreateFamilyForm } from '@/components/organisms/Form/CreateFamilyForm/CreateFamilyForm'
import React from 'react'

interface DialogEditProfilProps {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DialogCreateFamily: React.FC<DialogEditProfilProps> = ({
    open,
    setOpen,
}) => {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="mobileL:max-w-[90%]  laptop:max-w-[700px] gap-[35px]">
                <DialogHeader>
                    <DialogTitle className={'text-2xl'}>
                        Créer une nouvelle famille
                    </DialogTitle>
                    <DialogDescription className={'text-base'}>
                        Créer une famille dans laquelle vous pourrez ajouter des
                        membres et gérer votre noël.
                    </DialogDescription>
                </DialogHeader>
                <CreateFamilyForm setOpen={setOpen} />
            </DialogContent>
        </Dialog>
    )
}

export default DialogCreateFamily
