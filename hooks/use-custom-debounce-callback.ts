import { useCallback, useRef } from 'react'

function useDebounceCallback<T extends (...args: never[]) => void>(
    callback: T,
    delay: number
): T {
    const timeoutRef = useRef<number | undefined>()

    const debouncedCallback = useCallback(
        (...args: Parameters<T>) => {
            if (timeoutRef.current !== undefined) {
                clearTimeout(timeoutRef.current)
            }

            timeoutRef.current = window.setTimeout(() => {
                callback(...args)
            }, delay)
        },
        [callback, delay]
    ) as T

    useCallback(() => {
        return () => {
            if (timeoutRef.current !== undefined) {
                clearTimeout(timeoutRef.current)
                timeoutRef.current = undefined
            }
        }
    }, [])

    return debouncedCallback
}

export default useDebounceCallback
