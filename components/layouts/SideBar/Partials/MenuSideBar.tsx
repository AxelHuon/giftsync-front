import { Button } from '@/components/atoms/Buttons/ClassicButton/Button'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/moleculs/Collapsible/Collapsible'
import { useSettings } from '@/providers/SettingsProvider'
import {
    CandyCaneIcon,
    GiftIcon,
    LayoutDashboardIcon,
    UsersIcon,
} from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const MenuSideBar: React.FC = () => {
    const { sideBarIsOpen, toggleSideBar } = useSettings()

    const [famillyCollapseOpen, setFamillyCollapseOpen] =
        useState<boolean>(false)

    const [giftCollapseOpen, setGiftCollapseOpen] = useState<boolean>(false)

    const handleContentClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    const handleClickCollapsible = (collapseToOpen: string) => {
        if (!sideBarIsOpen) {
            toggleSideBar()
        }

        if (collapseToOpen === 'familly') {
            if (!sideBarIsOpen) {
                setFamillyCollapseOpen(true)
            } else {
                setFamillyCollapseOpen(!famillyCollapseOpen)
            }
        } else if (collapseToOpen === 'gift') {
            if (!sideBarIsOpen) {
                setGiftCollapseOpen(true)
            } else {
                setGiftCollapseOpen(!giftCollapseOpen)
            }
        }
    }

    return (
        <div className={'flex flex-col gap-[12px]'}>
            {sideBarIsOpen && (
                <p className={'text-base text-neutral-500 font-400'}>Menu</p>
            )}
            <div className={'flex flex-col gap-[18px]'}>
                <Button
                    asChild
                    variant={'outline'}
                    className={`flex ${sideBarIsOpen ? 'justify-start' : 'justify-center'} gap-[8px]`}
                >
                    <Link href={'/dashboard'}>
                        <LayoutDashboardIcon width={16} />
                        {sideBarIsOpen && <p>Dashboard</p>}
                    </Link>
                </Button>
                <Collapsible
                    open={sideBarIsOpen && famillyCollapseOpen}
                    onClick={() => handleClickCollapsible('familly')}
                    className={'flex flex-col gap-[12px]'}
                >
                    <CollapsibleTrigger className={'w-full'} asChild>
                        <Button
                            variant={'outline'}
                            className={`flex ${sideBarIsOpen ? 'justify-start' : 'justify-center'} gap-[8px]`}
                        >
                            <UsersIcon width={16} />
                            {sideBarIsOpen && <p>Familles</p>}
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
                                    <Link href={'/familles'}>
                                        Listes de familles
                                    </Link>
                                </Button>
                            </li>
                            <li>
                                <Button size={'sm'} variant={'ghost'}>
                                    Créer une nouvelle famille
                                </Button>
                            </li>
                            <li>
                                <Button size={'sm'} variant={'ghost'}>
                                    Rejoindre une famille
                                </Button>
                            </li>
                        </ul>
                    </CollapsibleContent>
                </Collapsible>
                <Collapsible
                    open={sideBarIsOpen && giftCollapseOpen}
                    onClick={() => handleClickCollapsible('gift')}
                    className={'flex flex-col gap-[12px]'}
                >
                    <CollapsibleTrigger className={'w-full'} asChild>
                        <Button
                            variant={'outline'}
                            className={`flex ${sideBarIsOpen ? 'justify-start' : 'justify-center'} gap-[8px]`}
                        >
                            <GiftIcon width={16} />
                            {sideBarIsOpen && <p>Cadeaux</p>}
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
                                    Créer un nouveau cadeau
                                </Button>
                            </li>
                            <li>
                                <Button size={'sm'} variant={'ghost'}>
                                    Liste de mes cadeaux
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
                    className={`flex ${sideBarIsOpen ? 'justify-start' : 'justify-center'} gap-[8px]`}
                >
                    <Link href={'/secret-santa'}>
                        <CandyCaneIcon width={16} />
                        {sideBarIsOpen && <p>Secret Santa</p>}
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default MenuSideBar
