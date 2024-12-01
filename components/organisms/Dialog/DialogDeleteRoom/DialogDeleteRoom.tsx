import { Button } from '@/components/atoms/Buttons/ClassicButton/Button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/moleculs/Dialog/Dialog'
import { toast } from '@/hooks/useToast'
import { useDeleteRoom } from '@/src/api/generated/room'
import { DeleteIcon } from 'lucide-react'
import { useRouter } from 'next/router'
import React from 'react'

interface DialogEditProfilProps {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    roomId: string
}

const DialogDeleteRoom: React.FC<DialogEditProfilProps> = ({
    open,
    setOpen,
    roomId,
}) => {
    const router = useRouter()

    const { mutate: deleteRoom } = useDeleteRoom({
        mutation: {
            onSuccess: () => {
                router?.push('/families')
                toast({
                    variant: 'success',
                    title: 'La famille a été supprimée',
                })
            },
        },
    })

    const handleDeleteRoom = async () => {
        await deleteRoom({ roomId })
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="mobileL:max-w-[90%]  laptop:max-w-[700px] gap-[20px]">
                <DialogHeader>
                    <DialogTitle className={'text-2xl'}>
                        Supprimer la famille
                    </DialogTitle>
                    <DialogDescription>
                        Êtes-vous sûr de vouloir supprimer cette famille ?
                    </DialogDescription>
                </DialogHeader>
                <div className={'flex gap-3'}>
                    <Button
                        onClick={() => handleDeleteRoom()}
                        className={'w-1/2 flex items-center gap-3'}
                        variant={'destructive'}
                    >
                        Supprimer
                        <DeleteIcon width={16} />
                    </Button>
                    <Button
                        onClick={() => setOpen(false)}
                        className={'w-1/2'}
                        variant={'secondary'}
                    >
                        Annuler
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default DialogDeleteRoom
