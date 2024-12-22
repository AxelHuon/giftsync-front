import React, { createContext, ReactNode, useContext } from 'react'

interface SettingsContextType {}

const SettingsContext = createContext<SettingsContextType | undefined>(
    undefined
)

interface SettingsProviderProps {
    children: ReactNode
}

export const SettingsProvider: React.FC<SettingsProviderProps> = ({
    children,
}) => {
    const value = {}
    return (
        <SettingsContext.Provider value={value}>
            {children}
        </SettingsContext.Provider>
    )
}

export const useSettings = (): SettingsContextType => {
    const context = useContext(SettingsContext)
    if (context === undefined) {
        throw new Error('useSettings must be used within a SettingsProvider')
    }
    return context
}
