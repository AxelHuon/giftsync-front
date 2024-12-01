import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '@/components/atoms/Avatar/Avatar'
import { Button } from '@/components/atoms/Buttons/ClassicButton/Button'
import ChartNbGifts from '@/components/moleculs/FamilyCard/ChartNbGifts'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '@/components/organisms/Tabs/tabs'
import { GetRoomOfUserResponseApiDTO } from '@/src/api/generated/Api.schemas'
import Link from 'next/link'
import React from 'react'

interface FamilyCardProps {
    family: GetRoomOfUserResponseApiDTO
}
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL

const FamilyCard: React.FC<FamilyCardProps> = ({ family }) => {
    return (
        <div
            className={
                'flex flex-col relative   gap-[16px] p-[20px] border border-neutral-300 rounded-xl'
            }
        >
            <div className={'flex flex-row gap-3  w-full justify-center'}>
                <h2 className={'text-2xl font-600 text-neutral-900'}>
                    {family.title}
                </h2>
            </div>
            <Tabs
                defaultValue="members"
                className="w-full flex flex-col gap-[16px]"
            >
                <TabsList className={'w-full bg-neutral-100'}>
                    <TabsTrigger
                        className={'flex items-center justify-center w-1/2'}
                        value="members"
                    >
                        Membres
                    </TabsTrigger>
                    <TabsTrigger
                        className={'flex items-center justify-center w-1/2'}
                        value="informations"
                    >
                        Informations
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="informations">
                    <ChartNbGifts />
                </TabsContent>
                <TabsContent value="members">
                    <div className={'flex flex-col gap-[11px]'}>
                        {family.users?.map((user) => {
                            return (
                                <div className={'flex gap-3 items-center'}>
                                    <Avatar>
                                        <AvatarImage
                                            src={`${backendUrl}${user.profilePicture}`}
                                        />
                                        <AvatarFallback>
                                            {user.firstName[0]}
                                            {user.lastName[0]}
                                        </AvatarFallback>
                                    </Avatar>
                                    <p
                                        className={
                                            'text-base text-neutral-900 font-500'
                                        }
                                    >
                                        {user?.firstName} {user.lastName}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </TabsContent>
            </Tabs>
            <Button asChild>
                <Link href={`/families/${family.slug}`}>Voir plus</Link>
            </Button>
        </div>
    )
}

export default FamilyCard
