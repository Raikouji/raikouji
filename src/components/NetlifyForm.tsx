'use client'

import type React from 'react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

export function NetlifyForm() {
	const [mode, setMode] = useState<'input' | 'submitting' | 'send' | 'fail'>(
		'input',
	)

	const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		setMode('submitting')

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
					setMode('fail')
					throw new Error('ネットワークの応答が良くありません')
				}
				setMode('send')
			})
			.catch((error) => {
				setMode('fail')
				console.error('フェッチ操作で問題が発生しました', error)
			})
	}

	return mode === 'send' ? (
		<>
			<p className='my-8 text-center font-bold'>
				送信が完了しました。
				<br />
				確認次第、ご返答差し上げます。
			</p>
			<p className='text-center'>
				<Button type='submit' className='max-w-full md:max-w-fit'>
					ホームページへ
				</Button>
			</p>
		</>
	) : mode === 'submitting' ? (
		<p className='my-8 text-center animate-pulse font-bold'>送信中です...</p>
	) : mode === 'fail' ? (
		<p className='my-8 text-center animate-pulse font-bold'>
			送信に失敗しました。
			<br />
			お手数ですが、電話でお問合せください。
		</p>
	) : (
		<FormInput handleFormSubmit={handleFormSubmit} />
	)
}

function FormInput({
	handleFormSubmit,
}: { handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void }) {
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
