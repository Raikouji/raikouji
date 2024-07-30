import Image from 'next/image'
import Link from 'next/link'

import ArticleWrapper from '@/components/ArticleWrapper'
import Gellary from '@/components/Gallery'
import ImageAboveHeading from '@/components/ImageAboveHeading'
import Card from '@/components/ui/Card'
import { Button } from '@/components/ui/button'
import { getMetadata } from '@/lib/get-metadata'

import type { Metadata } from 'next'

const pageTitle = '紫陽閣(多目的ホール)の貸し出し'
const pageDescription =
	'頼光寺のお墓は、静かで緑豊かな心安らぐ空間です。永代供養共同墓、水子供養塔もあります。能勢電鉄「畦野駅」から徒歩５分とアクセスもしやすい立地です。'
const headerImage =
	'https://images.microcms-assets.io/assets/2954660cbcb2468c91911ef67d43d6dc/38f85a71571148ea921a925856e4b340/lotus-white.jpg'

export const metadata: Metadata = getMetadata({
	title: pageTitle,
	description: pageDescription,
})

const photos = [
	{
		src: '/images/zazen1.jpg',
		width: 900,
		height: 600,
		alt: '代替テキスト1',
	},
	{
		src: '/images/multi-purpose-hall-2.jpg',
		width: 900,
		height: 600,
		alt: '代替テキスト2',
	},
	{
		src: '/images/multi-purpose-hall-3.jpg',
		width: 900,
		height: 600,
		alt: '代替テキスト4',
	},
]

export default function Page() {
	return (
		<ArticleWrapper pageTitle={pageTitle} headerImage={headerImage}>
			<div className='my-12'>
				<section className='flex flex-col gap-12'>
					<div className='full-width-md mx-auto max-w-screen-md'>
						<Image
							src='/images/zen-hall.jpg'
							alt='Lorem'
							width={2100}
							height={1333}
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
							style={{ objectFit: 'cover' }}
							priority
						/>
						<p className='mt-6 text-center font-bold'>
							多目的ホール「紫陽閣（しようかく）」を予約制でお貸ししています。
							これまで、ヨガ教室や音楽演奏会などでご利用いただいたことがあります。
							月例の{' '}
							<Link href='../events#zazen' className='text-primary underline'>
								早朝坐禅会
							</Link>{' '}
							や{' '}
							<Link href='../scarlet-seal' className='text-primary underline'>
								仏前結婚式
							</Link>
							での披露宴も、ここで行います。
						</p>
					</div>

					<div className='mx-auto max-w-screen-md'>
						<p className='text-center'>
							<ImageAboveHeading imageName='priest2' />
						</p>
						<h2 className='mt-2 text-center font-serif'>ご利用のご案内</h2>
						<p className='mt-6'>
							ご利用をご希望の方は、お電話または
							問合せフォームで、「ご希望の日時」「利用時間」「参加人数」「イベント内容」をお知らせください。
							お伺いした情報を基に、案内やご利用のための準備を進めさせていただきます。
						</p>

						<Card className='mt-4 px-4 py-3'>
							<ul className='list-inside list-disc marker:text-tertiary'>
								<li>
									<b>広さ：</b>
									約30畳の広々とした空間をご提供し、最大80名様までのテーブルとイスを使用した食事会に対応可能です
								</li>
								<li>
									<b>設備：</b>
									快適な環境を整えるため、座布団及び完全な冷暖房設備を完備しております
								</li>
								<li>
									<b>参考：</b>
									お心遣いとして、3〜5千円程度の志納金をお納めくださる方が多いです
								</li>
							</ul>
						</Card>
						<p className='mt-8 text-center'>
							<Button asChild>
								<Link href='../contact'>電話番号・問合せフォーム</Link>
							</Button>
						</p>
					</div>
					<Gellary photos={photos} col={1} colMd={3} colLg={3} />
				</section>
			</div>
		</ArticleWrapper>
	)
}
