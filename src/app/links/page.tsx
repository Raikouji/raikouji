import ArticleWrapper from '@/components/ArticleWrapper'
import ImageAboveHeading from '@/components/ImageAboveHeading'
import { cn, outputMetadata } from '@/utils'
import type { Metadata } from 'next'

// for metadata
const pageTitle = 'リンク'
const pageDescription = '関連しているサイトのリンク集です。'
const headerImage = '/images/spider.jpg'

export const metadata: Metadata = outputMetadata({
	title: pageTitle,
	description: pageDescription,
})

type Link = {
	title: string
	url: string
	kind: string
}

const events: Link[] = [
	{
		title: '全日本仏教会',
		url: 'https://www.jbf.ne.jp/',
		kind: 'attribution',
	},
	{
		title: '曹洞宗 曹洞禅ネット 公式',
		url: 'https://www.sotozen-net.or.jp/',
		kind: 'attribution',
	},
	{
		title: '曹洞宗近畿管区教化センター',
		url: 'https://www.soto-kinki.net/',
		kind: 'attribution',
	},
	{
		title: '頼光寺（あじさい寺）- 能勢電鉄',
		url: 'https://noseden.hankyu.co.jp/guide/spot/ypcvp8g2j1/',
		kind: 'media',
	},
	{
		title: '頼光寺 清和源氏ゆかりの社寺 - 川西市',
		url: 'https://www.city.kawanishi.hyogo.jp/shiseijoho/shokai/kankouannai/1003058/kankou_raiko.html',
		kind: 'media',
	},
	{
		title: '頼光寺(川西市) - ウィキペディア',
		url: 'https://ja.wikipedia.org/wiki/%E9%A0%BC%E5%85%89%E5%AF%BA_(%E5%B7%9D%E8%A5%BF%E5%B8%82)',
		kind: 'media',
	},
]

function LinkList({
	events,
	kind,
	className,
}: {
	events: Link[]
	kind: 'attribution' | 'media'
	className?: string
}) {
	const filteredEvents = events.filter((event) => {
		return event.kind === kind
	})

	return (
		<ul
			className={cn(
				'border-t-1 list-inside list-disc border-t border-dotted border-t-gray-300 marker:text-primary-200',
				className,
			)}
		>
			{filteredEvents.map(({ title, url }) => (
				<li
					key={crypto.randomUUID()}
					className='border-b-1 border-b border-dotted border-b-gray-300 px-4 py-4'
				>
					<a
						href={url}
						className='tracking-widest text-primary-700 hover:text-primary-400'
					>
						{title}
					</a>
				</li>
			))}
		</ul>
	)
}

export default function Page() {
	return (
		<ArticleWrapper pageTitle={pageTitle} headerImage={headerImage}>
			<div className='my-12 flex flex-col gap-12 lg:flex-row lg:gap-20'>
				<section className='lg:w-1/2'>
					<div className='mx-auto max-w-screen-lg'>
						<p className='text-center'>
							<ImageAboveHeading imageName='momiji' />
						</p>
						<h2 id='scarlet-seal' className='mt-2 text-center font-serif'>
							関連リンク
						</h2>
						<LinkList
							events={events}
							kind='attribution'
							className='my-8 font-bold'
						/>
					</div>
					<hr className='line-with-three-dots lg:hidden' />
				</section>

				<section className='lg:w-1/2'>
					<div className='mx-auto max-w-screen-lg'>
						<p className='text-center'>
							<ImageAboveHeading imageName='uguisu' />
						</p>
						<h2 id='scarlet-seal' className='mt-3 text-center font-serif'>
							頼光寺を紹介いただいているサイト
						</h2>
						<LinkList events={events} kind='media' className='my-8 font-bold' />
					</div>
				</section>
			</div>
		</ArticleWrapper>
	)
}
