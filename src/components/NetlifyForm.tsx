'use client'

import type React from 'react'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export function NetlifyForm() {
	const router = useRouter()

	const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const formData = new FormData(event.currentTarget)
		const searchParams = new URLSearchParams()

		formData.forEach((value, key) => {
			searchParams.append(key, value.toString())
		})

		await fetch('/__forms.html', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: searchParams.toString(),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error('ネットワークの応答が良くありません')
				}
				router.push('/')
			})
			.catch((error) => {
				console.error('フェッチ操作で問題が発生しました', error)
				alert('送信に失敗しました。')
			})
	}

	return (
		<form
			onSubmit={handleFormSubmit}
			className='flex flex-col gap-4 max-w-full md:max-w-4xl mx-auto'
		>
			<input type='hidden' name='form-name' value='contact' />
			<input
				type='hidden'
				name='subject'
				value='頼光寺公式サイトのお問合せフォームから'
			/>
			<p>
				<b>
					<label htmlFor='name'>お名前</label>
				</b>
				<br />
				<input
					className='rounded max-w-full'
					name='name'
					type='text'
					placeholder='お名前を入力…'
					size={50}
					required
				/>
			</p>
			<p>
				<b>
					<label htmlFor='email'>Email</label>
				</b>
				<br />
				<input
					className='rounded max-w-full'
					name='email'
					type='text'
					placeholder='Emailを入力…'
					size={50}
					required
				/>
			</p>
			<p>
				<b>
					<label htmlFor='tel'>電話番号</label>
				</b>
				<br />
				<input
					className='rounded max-w-full'
					name='tel'
					type='text'
					size={50}
					placeholder='電話番号を入力… (任意)'
				/>
			</p>
			<p>
				<b>
					<label htmlFor='message'>お問合せ内容</label>
				</b>
				<br />
				<textarea
					className='rounded max-w-full'
					name='message'
					rows={10}
					cols={50}
					placeholder='お問合せ内容を入力…'
					required
				/>
			</p>
			<p className='text-center'>
				<Button type='submit' className='max-w-full md:max-w-fit'>
					送信する
				</Button>
			</p>
		</form>
	)
}
