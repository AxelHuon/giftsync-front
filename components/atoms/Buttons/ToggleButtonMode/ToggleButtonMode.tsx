'use client'

import { Button } from '@/components/atoms/Buttons/ClassicButton/Button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/atoms/Menu/DropDownMenu/dropdown-menu'
import { useSettings } from '@/providers/SettingsProvider'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import * as React from 'react'

export function ToggleButtonMode() {
    const { setTheme, theme } = useTheme()
    const { sideBarIsOpen } = useSettings()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant={'outline'}
                    className={`flex items-center ${sideBarIsOpen ? 'justify-start' : 'justify-center'} gap-[8px]`}
                >
                    {theme === 'light' ? (
                        <Sun size={20} />
                    ) : theme === 'dark' ? (
                        <Moon size={20} />
                    ) : (
                        <Sun size={20} />
                    )}
                    {sideBarIsOpen && (
                        <p className={'font-500'}>Changer le thème</p>
                    )}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={'bg-neutral-25'} align="center">
                <DropdownMenuItem
                    className={'text-neutral-900'}
                    onClick={() => setTheme('light')}
                >
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
