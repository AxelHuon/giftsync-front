import { cn } from '@/lib/utils'
import { EyeIcon, EyeOff } from 'lucide-react'
import * as React from 'react'
import { HTMLInputTypeAttribute, useState } from 'react'

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        const [typeState, setTypeState] = useState<HTMLInputTypeAttribute>(
            type ?? 'text'
        )

        return (
            <div className={'relative'}>
                <input
                    type={typeState}
                    className={cn(
                        'flex h-10 w-full rounded-xl border border-neutral-400 bg-background px-3 py-2 font-variable font-500 placeholder:font-600 placeholder:font-variable text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-500 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {type === 'password' && (
                    <div
                        onClick={() =>
                            setTypeState(
                                typeState === 'text' ? 'password' : 'text'
                            )
                        }
                        className={
                            'absolute top-1/2 right-3  -translate-y-1/2 cursor-pointer'
                        }
                    >
                        {typeState === 'text' ? (
                            <EyeOff width={16} />
                        ) : (
                            <EyeIcon width={16} />
                        )}
                    </div>
                )}
            </div>
        )
    }
)
Input.displayName = 'Input'

export { Input }
