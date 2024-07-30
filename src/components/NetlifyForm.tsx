'use client'

import type React from 'react'

import { Button } from '@/components/ui/button'

export function NetlifyForm() {
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
			})
			.catch((error) => {
				console.error('フェッチ操作で問題が発生しました', error)
				alert('送信に失敗しました。')
			})
	}

	return (
		<form
			name='feedback'
			onSubmit={handleFormSubmit}
			className='flex flex-col gap-4'
		>
			<input type='hidden' name='form-name' value='feedback' />
			<p>
				<b>お名前：</b>
				<br />
				<input
					className='rounded'
					name='name'
					type='text'
					placeholder='お名前を入力…'
					size={50}
					required
				/>
			</p>
			<p>
				<b>Email：</b>
				<br />
				<input
					className='rounded'
					name='email'
					type='text'
					placeholder='Emailを入力…'
					size={50}
					required
				/>
			</p>
			<p>
				<b>電話番号：</b>
				<br />
				<input
					className='rounded'
					name='tel'
					type='text'
					size={50}
					placeholder='電話番号を入力… (任意)'
				/>
			</p>
			<p>
				<b>お問合せ内容：</b>
				<br />
				<textarea
					className='rounded'
					name='message'
					rows={10}
					cols={50}
					placeholder='お問い合わせ内容を入力…'
					required
				/>
			</p>
			<Button type='submit'>送信する</Button>
		</form>
	)
}
