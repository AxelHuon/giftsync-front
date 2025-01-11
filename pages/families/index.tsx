import { Avatar, AvatarFallback } from '@/components/atoms/Avatar/Avatar'
import { Button } from '@/components/atoms/Buttons/ClassicButton/Button'
import { Input } from '@/components/atoms/Input/input'
import AppLayoutServer from '@/components/layouts/AppLayout/AppLayout.server'
import DialogCreateFamily from '@/components/organisms/Dialog/DialogCreateFamily/DialogCreateFamily'
import useDebounceCallback from '@/hooks/use-custom-debounce-callback'
import { GetRoomsOfUserParams } from '@/src/api/generated/Api.schemas'
import { useGetRoomsOfUser } from '@/src/api/generated/user'
import { generateId } from '@/utils/id'
import { PlusIcon, SearchIcon } from 'lucide-react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useQueryState } from 'nuqs'
import React, { useEffect, useState } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'

const FamilliesIndex: React.FC = () => {
    const { data: session } = useSession()

    const [queryString, setQueryString] = useQueryState('queryString', {
        defaultValue: '',
    })

    const [query, setQuery] = useState<GetRoomsOfUserParams>({})
    const [inputValue, setInputValue] = useState(queryString ?? '')

    useEffect(() => {
        if (queryString !== inputValue) {
            setInputValue(queryString ?? '')
        }
    }, [queryString])

    const { data: families, isLoading } = useGetRoomsOfUser(
        session?.user?.id ?? '',
        query
    )

    const [createFamilyDialogOpen, setCreateFamilyDialogOpen] =
        useState<boolean>(false)

    const debouncedSearch = useDebounceCallback(
        async (value: string | null) => {
            await setQueryString(value || null)
            if (value === null) {
                const { queryString, ...rest } = query
                setQuery(rest)
            } else {
                setQuery((prev) => ({
                    ...prev,
                    queryString: value,
                }))
            }
        },
        500
    )

    const handleInputChange = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = e.target.value
        setInputValue(value)
        await debouncedSearch(value === '' ? null : value)
    }

    return (
        <AppLayoutServer>
            <div className={'flex flex-col gap-[29px]'}>
                <div className={'flex flex-row justify-between'}>
                    <h1
                        className={
                            'text-2xl laptop:text-4xl font-variable font-500 text-neutral-900 '
                        }
                    >
                        Vos familles 🏡
                    </h1>
                    <Button
                        onClick={() => setCreateFamilyDialogOpen(true)}
                        className={'flex flex-row gap-2 items-center'}
                    >
                        Créer une famille
                        <PlusIcon width={19} />
                    </Button>
                </div>
                <DialogCreateFamily
                    open={createFamilyDialogOpen}
                    setOpen={setCreateFamilyDialogOpen}
                />
                <div className={'flex items-center gap-4'}>
                    <div className={'w-[500px]'}>
                        <Input
                            value={inputValue}
                            defaultValue={queryString ?? ''}
                            onChange={handleInputChange}
                            icon={<SearchIcon width={18} />}
                            placeholder={'Rechercher une famille'}
                        />
                    </div>
                    <div className={'flex items-center gap-2'}>
                        <div
                            className={`w-[10px] h-[10px] rounded-full ${!families || families?.total === 0 ? 'bg-red-500' : 'bg-green-500'}`}
                        ></div>
                        <p className={'text-sm'}>
                            {families && families.total > 0
                                ? `${families.total} Résultat(s)`
                                : 'Aucun resultat'}
                        </p>
                    </div>
                </div>
                <div className={'grid grid-cols-3 gap-10'}>
                    {families?.rooms.map((family) => (
                        <Link
                            href={`families/${family.slug}`}
                            className={
                                'p-5 border border-neutral-300  bg-neutral-25 flex flex-col gap-7 rounded-xl'
                            }
                            key={generateId()}
                        >
                            <div className={'flex gap-2 items-center'}>
                                <Avatar>
                                    <AvatarFallback>
                                        {family.title[0]}
                                    </AvatarFallback>
                                </Avatar>
                                <p
                                    className={
                                        'text-neutral-900 font-500 text-xl'
                                    }
                                >
                                    {family.title}
                                </p>
                            </div>
                            <Button asChild>
                                <Link href={`families/${family.slug}`}>
                                    Voir la famille
                                </Link>
                            </Button>
                        </Link>
                    ))}
                </div>
            </div>
        </AppLayoutServer>
    )
}

export default FamilliesIndex
