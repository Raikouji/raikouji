import ArticleWrapper from '@/components/ArticleWrapper'
import ImageAboveHeading from '@/components/ImageAboveHeading'
import { NetlifyForm } from '@/components/NetlifyForm'
import TocLink, { TocLinkItem } from '@/components/TocLink'
import Card from '@/components/ui/Card'
import { Button } from '@/components/ui/button'
import { cn, outputMetadata } from '@/utils'
import type { Metadata } from 'next'
import Link from 'next/link'

// for metadata
const pageTitle = 'お問合せ'
const pageDescription = '頼光寺へのお問い合わせ。'
const headerImage = '/images/sea-of-clouds.jpg'

export const metadata: Metadata = outputMetadata({
	title: pageTitle,
	description: pageDescription,
})

export default function Page() {
	return (
		<ArticleWrapper pageTitle={pageTitle} headerImage={headerImage}>
			<div className='mx-auto max-w-screen-md'>
				<TocLink>
					<TocLinkItem id='#ajisai'>あじさいの開花状況</TocLinkItem>
					<TocLinkItem id='tel'>電話でのお問合せ</TocLinkItem>
					<TocLinkItem id='form'>フォームでのお問合せ</TocLinkItem>
				</TocLink>
			</div>

			<section>
				<div className='mx-auto max-w-screen-md'>
					<Card
						className={cn('relative mx-auto p-8', 'bg-red-50', 'rounded-xl')}
					>
						<h2 id='ajisai' className='text-center text-xl text-red-500'>
							あじさいの開花状況の
							<br className='lg:hidden' />
							お問合せについて
						</h2>
						<p className='mt-4'>
							電話やメール等での直接の問い合わせへの対応は行っておりません。
							開花状況については、別途お知らせ版をご覧いただくようお願い申し上げます。
							どうぞよろしくお願い申し上げます。
						</p>
						<p className='mt-4 text-center'>
							<Button asChild>
								<Link href='#'>あじさいの開花状況を見る</Link>
							</Button>
						</p>
					</Card>
				</div>
			</section>

			<div className='flex flex-col gap-4 lg:flex-row lg:gap-20'>
				<section className='lg:w-3/5'>
					<div className='flex flex-col gap-8'>
						<div>
							<p className='text-center'>
								<ImageAboveHeading imageName='statue' />
							</p>
							<h2 id='form' className='mt-3 text-center font-serif'>
								フォームでのお問合せ
							</h2>
						</div>
						<p>
							状況やご質問内容により、返信にお時間をいただく場合がございますことご了承ください。
						</p>
						<p className='text-sm font-bold text-red-500'>
							※
							送信後5日間の間に返信がない場合、送受信エラーの可能性があります。その場合、お手数ですが電話でのお問い合わせをお願いいたします。
						</p>
						<NetlifyForm />
						{/*<div>*/}
						{/*	<iframe*/}
						{/*		title='Google Form'*/}
						{/*		src='https://docs.google.com/forms/d/e/1FAIpQLSehFnOs8DgdaWW0sp-SjPcwsdbvPq9EZ5IZePqDsePAm_WjCA/viewform?embedded=true'*/}
						{/*		width='100%'*/}
						{/*		height='1000'*/}
						{/*	>*/}
						{/*		読み込んでいます…*/}
						{/*	</iframe>*/}
						{/*</div>*/}
					</div>
				</section>

				<hr className='line-with-three-dots lg:hidden' />
				<div className='lg:w-2/5'>
					<section>
						<div className='flex flex-col gap-8'>
							<div>
								<p className='text-center'>
									<ImageAboveHeading imageName='uguisu' />
								</p>
								<h2 id='tel' className='mt-3 text-center font-serif'>
									電話でのお問合せ
								</h2>
							</div>
							<div>
								<p>
									お急ぎの場合には時間内にお電話にてお問い合わせください。お問合せ前に
									<a href='#faq' className='underline'>
										よくあるご質問
									</a>
									もご参照ください。
								</p>
								<p className='mt-3 text-sm font-bold text-red-500'>
									※
									電話をおかけの際は今一度番号をお確かめの上、お掛け間違いには十分ご注意いただくようお願いします。
								</p>
							</div>
							<p className='text-center font-bold'>
								Tel. <span className='text-3xl'>072-794-1165</span>
							</p>
						</div>
					</section>

					<hr className='line-with-three-dots my-12' />

					<section>
						<p className='text-center'>
							<ImageAboveHeading imageName='priest2' />
						</p>
						<h2 id='faq' className='mt-3 text-center font-serif'>
							よくいただく質問
						</h2>
						<p className='mt-6'>
							よくいただく質問をまとめました。
							<br />
							これ以外にご不明な点や聞きたいことがございましたら、お問合せよりご連絡ください。
						</p>
						<ul className='mt-4 flex flex-col gap-6'>
							<li>
								<h3 className='text-primary text-lg'>
									Q. あじさいの開花状況は？
								</h3>
								<p>
									開花状況については、別途お知らせ版をご覧いただくようお願い申し上げます。
								</p>
							</li>
							<li>
								<h3 className='text-primary text-lg'>
									Q. お墓の見学はできますか？
								</h3>
								<p>
									はい。お墓の見学は可能です。案内不要であれば、当寺境内にございますのでご見学ください。案内をご希望の方は、事前にお電話にてお問合せください。
								</p>
							</li>
							<li>
								<h3 className='text-primary text-lg'>
									Q. お墓の購入はできますか？
								</h3>
								<p>
									はい。お墓の購入は可能です。お墓の購入をご希望の方は、事前にお電話にてお問合せください。
								</p>
							</li>
							<li>
								<h3 className='text-primary text-lg'>
									Q. お墓の管理や清掃はどのように行われていますか？
								</h3>
								<p>お墓の管理は、頼光寺にて行っております。</p>
							</li>
							<li>
								<h3 className='text-primary text-lg'>
									Q. お墓のお参りができる時間帯を教えてください
								</h3>
								<p>いつでもお参りいただけます。</p>
							</li>
						</ul>
					</section>
				</div>
			</div>
		</ArticleWrapper>
	)
}
