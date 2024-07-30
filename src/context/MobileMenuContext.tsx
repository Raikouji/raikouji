'use client'

import React from 'react'

const MobileMenuContext = React.createContext<
	[boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined)

export function MobileMenuProvider({
	children,
}: {
	children: React.ReactNode
}) {
	const [isOpen, setIsOpen] = React.useState(false)

	return (
		<MobileMenuContext.Provider value={[isOpen, setIsOpen]}>
			{children}
		</MobileMenuContext.Provider>
	)
}

export function useMobileMenu() {
	const context = React.useContext(MobileMenuContext)
	if (context === undefined) {
		throw new Error('useMobileMenu must be used within a MobileMenuProvider')
	}
	return context
}
