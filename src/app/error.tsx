'use client'

import { useEffect } from 'react'

export default function ErrorComponent({
	errorProp,
	reset,
}: {
	errorProp: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		console.error(errorProp)
	}, [errorProp])

	return (
		<div>
			<h2>Something went wrong!</h2>
			<button type='button' onClick={() => reset()}>
				Try again
			</button>
		</div>
	)
}
