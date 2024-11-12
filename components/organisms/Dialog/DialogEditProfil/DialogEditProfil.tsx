import { Button } from '@/components/atoms/Buttons/ClassicButton/Button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/moleculs/Dialog/Dialog'
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
        <Dialog open={open}>
            <DialogContent className="mobileL:max-w-[90%]  laptop:max-w-[800px]">
                <DialogHeader>
                    <DialogTitle>Paramètre de votre compte</DialogTitle>
                    <DialogDescription>
                        Vous pouvez modifier les informations de votre compte
                        ici.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button type="submit">Enregistrer</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default DialogEditProfil
