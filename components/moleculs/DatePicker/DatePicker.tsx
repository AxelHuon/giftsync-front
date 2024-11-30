'use client'

import { Button } from '@/components/atoms/Buttons/ClassicButton/Button'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/atoms/Popover/Popover'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/atoms/Select/Select'
import { Calendar } from '@/components/moleculs/Calendar/Calendar'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import * as React from 'react'

interface DatePickerProps {
    date: Date | undefined
    setDate: (date: Date | undefined) => void
}

export function DatePicker({ date, setDate }: DatePickerProps) {
    const [calendarDate, setCalendarDate] = React.useState(date || new Date())

    const years = Array.from(
        { length: 120 },
        (_, i) => new Date().getFullYear() - 5 - i
    )

    const handleYearChange = (year: string) => {
        const newDate = new Date(calendarDate)
        newDate.setFullYear(parseInt(year))
        setCalendarDate(newDate)
    }

    // Synchronize the selected date with calendarDate
    React.useEffect(() => {
        if (date) {
            setCalendarDate(date)
        }
    }, [date])

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={'outline'}
                    className={cn(
                        'w-full justify-start text-left font-normal border-neutral-400',
                        !date && 'text-muted-foreground'
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date
                        ? format(date, 'dd/MM/yyyy')
                        : 'Sélectionner une date'}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-neutral-50" align="start">
                <div className="flex items-center justify-center px-3 pt-2">
                    <Select
                        value={calendarDate.getFullYear().toString()}
                        onValueChange={handleYearChange}
                    >
                        <SelectTrigger className="h-7 w-[80px]">
                            <SelectValue>
                                {calendarDate.getFullYear()}
                            </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                            {years.map((year) => (
                                <SelectItem key={year} value={year.toString()}>
                                    {year}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    month={calendarDate}
                    onMonthChange={setCalendarDate}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}
