'use client'

import type React from 'react'

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
		<form name='feedback' onSubmit={handleFormSubmit}>
			<input type='hidden' name='form-name' value='feedback' />
			お名前：
			<input name='name' type='text' placeholder='お名前を入力…' required />
			Email：
			<input name='email' type='text' placeholder='Emailを入力…' required />
			電話番号：
			<input name='tel' type='text' placeholder='電話番号を入力… (任意)' />
			お問合せ内容：
			<textarea name='message' placeholder='お問い合わせ内容を入力…' required />
			<button type='submit'>送信する</button>
		</form>
	)
}
