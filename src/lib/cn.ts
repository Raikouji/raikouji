import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Tailwind CSS クラスを効率的にマージ
 * (スタイルの競合を解決、chadcn/ui が使用)
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}
