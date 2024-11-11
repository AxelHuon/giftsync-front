import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '@/components/atoms/Avatar/Avatar'
import { buttonVariants } from '@/components/atoms/Buttons/ClassicButton/Button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/atoms/Menu/DropDownMenu/dropdown-menu'
import { useAuthContext } from '@/hooks/useAuth'
import { useSettings } from '@/providers/SettingsProvider'
import { EllipsisIcon, ReceiptText, UserRoundIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const UserButton: React.FC = () => {
    const { authState, handleLogout } = useAuthContext()
    const { sideBarIsOpen } = useSettings()

    return (
        <DropdownMenu>
            {/*Button*/}
            <DropdownMenuTrigger asChild>
                <div
                    className={
                        buttonVariants({ variant: 'outline' }) +
                        `flex items-center justify-between h-[60px] p-[12px] gap-3 cursor-pointer relative`
                    }
                >
                    <div className={'flex items-center'}>
                        <Avatar
                            className={`absolute top-1/2 transition-all duration-200 -translate-y-1/2 transition-left ${sideBarIsOpen ? 'left-[12px]' : 'left-[52.5px] -translate-x-1/2'}`}
                        >
                            <AvatarFallback>
                                {authState?.firstName[0]}
                                {authState?.lastName[0]}
                            </AvatarFallback>
                            <AvatarImage
                                src={'/images/default-user-pdp.png'}
                                alt={'avatar'}
                            />
                        </Avatar>
                        <p
                            className={`text-base absolute left-[65px] transition-all duration-250 ${sideBarIsOpen ? 'opacity-100' : 'opacity-0'} font-500`}
                        >
                            {authState?.firstName} {authState?.lastName}
                        </p>
                    </div>
                    <EllipsisIcon
                        className={`rotate-90 ${sideBarIsOpen ? 'opacity-100' : 'opacity-0'} transition-property:opacity duration-200 `}
                    />
                </div>
            </DropdownMenuTrigger>
            {/*End Button*/}
            <DropdownMenuContent
                align={sideBarIsOpen ? 'end' : 'start'}
                className="w-56"
            >
                <DropdownMenuLabel>
                    <div className={'flex items-center gap-3'}>
                        <Avatar style={{ width: '35px', height: '35px' }}>
                            <AvatarFallback>
                                {authState?.firstName[0]}
                                {authState?.lastName[0]}
                            </AvatarFallback>
                            <AvatarImage
                                src={'/images/default-user-pdp.png'}
                                alt={'avatar'}
                            />
                        </Avatar>
                        <div>
                            <p className={'text-base font-500'}>
                                {authState?.firstName} {authState?.lastName}
                            </p>
                            <p className={'text-xs font-300'}>
                                {authState?.email}
                            </p>
                        </div>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                        <Link
                            className={'flex items-center gap-1'}
                            href={`/user/${authState?.id}`}
                        >
                            <UserRoundIcon size={'20px'} />
                            Profile
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link
                            className={'flex items-center gap-1'}
                            href={`/user/${authState?.id}`}
                        >
                            <ReceiptText size={'20px'} />
                            Support
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    className={
                        'bg-destructive-200  hover:!bg-destructive-100 active:!bg-destructive-50'
                    }
                    onClick={() => handleLogout()}
                >
                    Déconnexion
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserButton
