import { Button } from '@/components/atoms/Buttons/ClassicButton/Button'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/moleculs/Collapsible/Collapsible'
import DialogCreateFamily from '@/components/organisms/Dialog/DialogCreateFamily/DialogCreateFamily'
import {
    CandyCaneIcon,
    ChevronDown,
    GiftIcon,
    LayoutDashboardIcon,
    UsersIcon,
} from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const MenuSideBar: React.FC = () => {
    const [famillyCollapseOpen, setFamillyCollapseOpen] =
        useState<boolean>(false)

    const [giftCollapseOpen, setGiftCollapseOpen] = useState<boolean>(false)

    const handleContentClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    const handleClickCollapsible = (collapseToOpen: string) => {
        if (collapseToOpen === 'familly') {
            setFamillyCollapseOpen(!famillyCollapseOpen)
        } else if (collapseToOpen === 'gift') {
            setGiftCollapseOpen(!giftCollapseOpen)
        }
    }

    const [modalCreateFamilyOpen, setModalCreateFamilyOpen] =
        useState<boolean>(false)

    const router = useRouter()

    useEffect(() => {
        if (router.pathname.includes('families')) {
            setFamillyCollapseOpen(true)
        }
        if (router.pathname.includes('gifts')) {
            setGiftCollapseOpen(true)
        }
    }, [])

    return (
        <div className={'flex flex-col gap-[12px]'}>
            <div className={'flex flex-col gap-[18px]'}>
                <Button
                    asChild
                    variant={'outline'}
                    className={`flex  justify-start gap-[8px] !border`}
                >
                    <Link href={'/dashboard'}>
                        <LayoutDashboardIcon width={16} />
                        <p className={'text-m'}>Dashboard</p>
                    </Link>
                </Button>
                <Collapsible
                    open={famillyCollapseOpen}
                    onClick={() => handleClickCollapsible('familly')}
                    className={'flex flex-col gap-[12px]'}
                >
                    <CollapsibleTrigger className={'w-full'} asChild>
                        <Button
                            variant={'outline'}
                            className={`flex  justify-between items-center !border`}
                        >
                            <div
                                className={
                                    'flex justify-start items-center gap-[8px]'
                                }
                            >
                                <UsersIcon width={16} />
                                <p className={'text-sm'}>Familles</p>
                            </div>
                            <ChevronDown
                                className={
                                    famillyCollapseOpen ? 'rotate-180' : ''
                                }
                                width={16}
                            />
                        </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent onClick={handleContentClick}>
                        <ul
                            className={
                                'ml-[20px] pl-[10px] border-l border-neutral-200'
                            }
                        >
                            <li>
                                <Button asChild size={'sm'} variant={'ghost'}>
                                    <Link href={'/families'}>
                                        Listes de familles
                                    </Link>
                                </Button>
                            </li>
                            <li>
                                <Button
                                    onClick={() =>
                                        setModalCreateFamilyOpen(true)
                                    }
                                    size={'sm'}
                                    variant={'ghost'}
                                >
                                    Créer une nouvelle famille
                                </Button>
                            </li>
                        </ul>
                    </CollapsibleContent>
                </Collapsible>
                <Collapsible
                    open={giftCollapseOpen}
                    onClick={() => handleClickCollapsible('gift')}
                    className={'flex flex-col gap-[12px]'}
                >
                    <CollapsibleTrigger className={'w-full'} asChild>
                        <Button
                            variant={'outline'}
                            className={`flex  justify-between items-center !border`}
                        >
                            <div
                                className={
                                    'flex justify-start items-center gap-[8px]'
                                }
                            >
                                <GiftIcon width={16} />
                                <p className={'text-sm'}>Cadeaux</p>
                            </div>
                            <ChevronDown
                                className={giftCollapseOpen ? 'rotate-180' : ''}
                                width={16}
                            />
                        </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <ul
                            className={
                                'ml-[20px] pl-[10px] border-l border-neutral-200'
                            }
                        >
                            <li>
                                <Button size={'sm'} variant={'ghost'}>
                                    Liste de mes cadeaux
                                </Button>
                            </li>
                            <li>
                                <Button size={'sm'} variant={'ghost'}>
                                    Créer un nouveau cadeau
                                </Button>
                            </li>
                            <li>
                                <Button size={'sm'} variant={'ghost'}>
                                    Mes participations
                                </Button>
                            </li>
                        </ul>
                    </CollapsibleContent>
                </Collapsible>
                <Button
                    asChild
                    variant={'outline'}
                    className={`flex  justify-start gap-[8px] !border`}
                >
                    <Link href={'/secret-santa'}>
                        <CandyCaneIcon width={16} />
                        <p className={'text-sm'}>Secret Santa</p>
                    </Link>
                </Button>
            </div>
            <DialogCreateFamily
                open={modalCreateFamilyOpen}
                setOpen={setModalCreateFamilyOpen}
            />
        </div>
    )
}

export default MenuSideBar
