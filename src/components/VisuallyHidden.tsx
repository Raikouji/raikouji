import type React from 'react'

const hiddenStyles = {
	display: 'inline-block',
	position: 'absolute',
	overflow: 'hidden',
	clip: 'rect(0 0 0 0)',
	height: 1,
	width: 1,
	margin: -1,
	padding: 0,
	border: 0,
}

function VisuallyHidden({
	as: Element = 'span',
	children,
}: {
	as?: React.ElementType
	children: React.ReactNode
}) {
	return <Element style={hiddenStyles}>{children}</Element>
}

export default VisuallyHidden
