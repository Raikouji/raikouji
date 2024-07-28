import Breadcrumbs from '@/components/breadcrumbs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: '孫ページのタイトルです',
	description: '孫ページのディスクリプションです',
}

export default function Page() {
	return (
		<div>
			<Breadcrumbs />
			<h1>Hello, Next! template/template-child/page.tsx</h1>
			<p>子ページのサンプル</p>
		</div>
	)
}
