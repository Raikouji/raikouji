import { cn } from '@/utils'
import styles from './Hr.module.css'

export default function Hr({
	type,
	className,
	...delegated
}: {
	type?: 'square'
	className?: string
}) {
	return <hr className={cn(type && styles[type], className)} {...delegated} />
}
