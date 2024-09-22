'use client';

import { Button } from '@/components/atoms/Buttons/ClassicButton/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/atoms/Menu/DropDownMenu/dropdown-menu';
import { useSettings } from '@/providers/SettingsProvider';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import * as React from 'react';

export function ToggleButtonMode({ withText = false }: { withText?: boolean }) {
  const { setTheme, theme } = useTheme();
  const { sideBarIsOpen } = useSettings();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={`w-full items-center justify-start gap-2 ${
            sideBarIsOpen ? 'px-4' : 'px-0'
          } transition-all duration-200`}
          variant="outline"
        >
          <div
            className={`${
              sideBarIsOpen ? '' : 'absolute left-1/2 -translate-x-1/2'
            } transition-property:left,translate-x duration-150`}
          >
            <Sun
              size={17}
              className={`${theme === 'light' ? 'flex' : 'hidden'}`}
            />
            <Moon
              size={17}
              className={`${theme === 'light' ? 'hidden' : 'flex'}`}
            />
          </div>
          <span
            className={`${
              sideBarIsOpen ? 'opacity-100 ml-2' : 'opacity-0 w-0'
            } transition-property:opacity,width duration-100 overflow-hidden whitespace-nowrap`}
          >
            Changer le thème
          </span>
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
  );
}
