import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import ArticleWrapper from '@/components/ArticleWrapper'
import ImageAboveHeading from '@/components/ImageAboveHeading'
import TocLink, { TocLinkItem } from '@/components/TocLink'
import Card from '@/components/ui/Card'
import Hr from '@/components/ui/Hr'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/cn'
import { getMetadata } from '@/lib/get-metadata'
import { FaExclamationTriangle } from 'react-icons/fa'

type RouteDataItem = {
	description: string
	image: string
}

const pageTitle = 'アクセス'
const pageDescription = '頼光寺へのアクセスです。駐車場情報も。'
const headerImage =
	'https://images.microcms-assets.io/assets/2954660cbcb2468c91911ef67d43d6dc/2eaf5b5bf2374009a0f468fc1c47fa07/lotus.jpg'

export const metadata: Metadata = getMetadata({
	title: pageTitle,
	description: pageDescription,
})

const routeDataByTrain = [
	{
		description:
			'改札（１つしかありません）を出たら、突き当たりを右側に進みます。',
		image: '/images/route-train-01.jpg',
	},
	{
		description: '左右に階段がありますので、右側の階段を降りてください。',
		image: '/images/route-train-02.jpg',
	},
	{
		description:
			'勾配を降り、道路に出て突き当たり（郵便局が見えます）まで進み左に曲ます。',
		image: '/images/route-train-03.jpg',
	},
	{
		description: '郵便局を右手に直進し、郵便局のある角を右に曲がります。',
		image: '/images/route-train-04.jpg',
	},
	{
		description: '郵便局を右手に見ながらそのまままっすぐ進みます。',
		image: '/images/route-train-05.jpg',
	},
	{
		description: '大きい矢印の付いた「頼光寺」の看板のある三叉路を右折します。',
		image: '/images/route-train-06.jpg',
	},
	{
		description:
			'まっすぐ進むと、電車の高架下にトンネルが見えますので、くぐって入ってください。',
		image: '/images/route-train-07.jpg',
	},
	{
		description: '高架をくぐれば、頼光寺の境内。階段を登ると本堂の前に出ます。',
		image: '/images/route-train-08.jpg',
	},
]

// 下の駐車場
const routeDataByCar = [
	{
		description:
			'「東畦野」交差点で東に曲がります。(※ 写真は池田/川西方面から来たときのものです。)',
		image: '/images/route-car-a-01.jpg',
	},
	{
		description:
			'交差点からすぐの高架には乗らずに左の側道に入ってください。そして、郵便局の角を左に曲がります。',
		image: '/images/route-car-a-02.jpg',
	},
	{
		description:
			'しばらく直進します。十分な幅のある道ではないので、対向車とすれ違う際はお気を付けください。',
		image: '/images/route-car-a-03.jpg',
	},
	{
		description:
			'右手に「頼光寺→」と書かれた大きな看板のある三叉路を左折します。',
		image: '/images/route-car-a-04.jpg',
	},
	{
		description:
			'道なりに進み、行き止まりを左に入ったところが頼光寺の駐車場です。',
		image: '/images/route-car-a-05.jpg',
	},
	{
		description:
			'空いている駐車スペースに停めてください。降車し入り口を出てすぐのトンネルをくぐると当寺の境内です。',
		image: '/images/route-car-a-06.jpg',
	},
]

// 上の駐車場
const routeDataByCar2 = [
	{
		description:
			'「東畦野」交差点で東に曲がります。(※ 写真は池田/川西方面から来たときのものです。)',
		image: '/images/route-car-b-01.jpg',
	},
	{
		description: '交差点を曲ったら、すぐに右側にある高架に乗ってください。',
		image: '/images/route-car-b-02.jpg',
	},
	{
		description:
			'すぐの交差点(左に緑のひさしの建物、右にTimes駐車場)を左折します。',
		image: '/images/route-car-b-03.jpg',
	},
	{
		description: '３つ目の交差点まで直進します。',
		image: '/images/route-car-b-04.jpg',
	},
	{
		description: '３つ目の交差点を左折します。',
		image: '/images/route-car-b-05.jpg',
	},
	{
		description: '１つ目の交差点（一旦停止してください）は直進してください。',
		image: '/images/route-car-b-06.jpg',
	},
	{
		description: '２つ目の交差点（下り坂になっている手前）を右折します。',
		image: '/images/route-car-b-07.jpg',
	},
	{
		description: '直進し左折します。',
		image: '/images/route-car-b-08.jpg',
	},
	{
		description: '下り坂になっているので、道なりに進みます。',
		image: '/images/route-car-b-09.jpg',
	},
	{
		description: '道なりに進むと門がありますので、そのまま進入してください。',
		image: '/images/route-car-b-10.jpg',
	},
	{
		description: '突き当たりが頼光寺の駐車場となります。',
		image: '/images/route-car-b-11.jpg',
	},
]
export default function Page() {
	return (
		<ArticleWrapper pageTitle={pageTitle} headerImage={headerImage}>
			<TocLink>
				<TocLinkItem id='google-map'>Google マップ</TocLinkItem>
				<TocLinkItem id='access-by-train'>電車でのアクセス</TocLinkItem>
				<TocLinkItem id='access-by-car'>車でのアクセス</TocLinkItem>
			</TocLink>

			<section id='google-map' className='my-16'>
				<div className='mx-auto max-w-screen-lg'>
					<p className='text-center'>
						<ImageAboveHeading imageName='frog' />
					</p>
					<h2 className='mt-2 text-center'>Google マップ</h2>
					<p className='mx-auto mt-4 max-w-screen-md'>
						Google マップのナビの案内に従うと「裏の駐車場」に案内されます。
						表の駐車場をご利用の方は、上記の地図をご参照ください。
					</p>
					<div className='relative mt-8 h-0 overflow-hidden pb-[61.804697%]'>
						<iframe
							title='道順案内'
							src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6545.583216547808!2d135.41242965476988!3d34.88657891179472!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000f7d363fc0129%3A0x931d2d3f56786ea7!2z6LO05YWJ5a-6!5e0!3m2!1sja!2sjp!4v1700881280115!5m2!1sja!2sjp'
							allowFullScreen={false}
							loading='lazy'
							referrerPolicy='no-referrer-when-downgrade'
							className='absolute left-0 top-0 h-full w-full border-none'
						/>
					</div>
					<p className='mt-6 text-center'>
						<Button asChild>
							<Link
								href='https://www.google.com/maps?ll=34.887776,135.413674&z=16&t=m&hl=ja&gl=JP&mapclient=embed&cid=10600678847956938407'
								target='_blank'
							>
								Google マップのページへ <small>(外部サイト)</small>
							</Link>
						</Button>
					</p>
				</div>
			</section>

			<div className='full-width bg-secondary-50 px-8 lg:px-2'>
				<section id='access-by-train' className='mx-auto max-w-screen-xl py-16'>
					<p className='text-center'>
						<ImageAboveHeading imageName='asagao' />
					</p>
					<h2 className='mt-3 text-center'>電車でのアクセス</h2>
					<p className='mx-auto mt-6 max-w-lg text-center'>
						能勢電鉄「畦野駅」より徒歩5分です。
						<br />
						大阪からなら、阪急電車宝塚線「梅田駅」から「川西能勢口駅」まで約20分、能勢電鉄に乗り換え「畦野駅」まで約10分です。
					</p>
					<h3 className='mt-8 text-center'>能勢電鉄「畦野駅」からの道順</h3>
					<List
						className='mt-16 text-sm md:text-base'
						items={routeDataByTrain}
						renderItem={(item, index) => (
							<Media
								key={index}
								description={item.description}
								image={item.image}
								index={index}
							/>
						)}
					/>
				</section>
			</div>

			<section id='access-by-car' className='my-16'>
				<div className='mx-auto max-w-screen-xl'>
					<div className='mx-auto mt-4 max-w-screen-md text-center'>
						<p className='text-center'>
							<ImageAboveHeading />
						</p>
						<h2 className='mt-3 text-center'>車でのアクセス</h2>
						<p className='mt-4'>
							国道173号線
							「東畦野」交差点を東に側道に入り、５分以内の場所にあります。
						</p>
					</div>

					<div className='mx-auto mt-8 max-w-screen-md'>
						<Card
							className={cn('relative mx-auto p-8', 'bg-red-50', 'rounded-xl')}
						>
							<h3 className='flex text-xl text-red-500'>
								<FaExclamationTriangle className='mr-2 text-2xl' />
								カーナビで来られる方へ
							</h3>
							<p className='mt-3'>
								カーナビで頼光寺やその住所を目的地に設定すると、わかりづらい墓地上の駐車場に案内されてしまうことがあります。事前に下記の道順説明や地図などで道順をご確認されておくことをおすすめします。
							</p>
						</Card>
					</div>

					<div className='mx-auto max-w-screen-lg'>
						<div
							className={cn(
								'relative mt-10 p-8 lg:p-12',
								'bg-[url("/images/bg-paper.png")] bg-repeat',
								'rounded-xl shadow-lg',
							)}
						>
							<h3 className='mt-2 text-center text-secondary-dark'>
								2つの駐車場があります
							</h3>
							<p className='mt-3 text-center'>
								「下の駐車場」と「上の駐車場」の２つがございます。
								<br />
								下の駐車場の方が国道から近くて行きやすく、また十分な収容台数があります。
								<br />
								Google
								マップの場合、「賴光寺参拝者駐車場」を目的地にセットしていただくと、下の駐車場に案内されます。
							</p>
							<div className='mt-4 rounded bg-white px-4 py-2'>
								<h4 className='text-lg text-red-500'>
									※ 足の不自由な方がおられる場合は、上の駐車場をご利用ください
								</h4>
								<p className='mt-2'>
									下の駐車場に停められた場合、境内に入るまでに急斜面の階段がございます。なので、車椅子の方、足の不自由な方は、段差なく境内に入れる上の駐車場をご利用ください。
								</p>
							</div>
							<div className='mt-8 flex flex-col items-center justify-center gap-4 text-center md:flex-row md:gap-8 lg:gap-12'>
								<figure>
									<Image
										src='/images/parking-1.jpg'
										alt='下の駐車場'
										width={900}
										height={600}
									/>

									<figcaption className='mt-2'>下の駐車場</figcaption>
								</figure>
								<figure>
									<Image
										src='/images/parking-2-1.jpg'
										alt='上の駐車場'
										width={900}
										height={600}
									/>
									<figcaption className='mt-2'>上の駐車場</figcaption>
								</figure>
							</div>
						</div>
					</div>

					<h3 className='mt-16 text-center'>
						国道173号線から
						<br />
						『下の駐車場』への道順
					</h3>
					<p className='mt-3 text-center'>
						<b className='text-red-500 underline'>
							※
							東畦野交差点を東に折れてすぐの高架には乗らず側道へ進んでください。
						</b>
					</p>
					<List
						className='mt-16 text-sm md:text-base'
						items={routeDataByCar}
						renderItem={(item, index) => (
							<Media
								key={index}
								description={item.description}
								image={item.image}
								index={index}
							/>
						)}
					/>

					<Hr type='square' className='my-16' />

					<h3 className='mt-12 text-center'>
						国道173号線から
						<br />
						『上の駐車場』への道順
					</h3>
					<p className='mt-3 text-center'>
						<b className='text-red-500 underline'>
							※ 東畦野交差点を東に折れてすぐの高架に乗ってください。
						</b>
					</p>
					<List
						className='mt-16 text-sm md:text-base'
						items={routeDataByCar2}
						renderItem={(item, index) => (
							<Media
								key={index}
								description={item.description}
								image={item.image}
								index={index}
							/>
						)}
					/>
				</div>
			</section>
		</ArticleWrapper>
	)
}

function List({
	items,
	renderItem = (item: RouteDataItem, index: number) => (
		<React.Fragment key={index} />
	), // TODO: 呼び出し元で指定した型を適用できるように
	tag = 'ol',
	className,
	...delegated
}: {
	items: RouteDataItem[]
	tag?: 'section' | 'aside' | 'div' | 'ol' | 'ul'
	className?: string
	renderItem?: (item: RouteDataItem, index: number) => React.ReactElement
}) {
	const Tag = tag as React.ElementType

	return (
		<Tag
			className={cn(
				'grid gap-4 md:grid-cols-2 md:gap-x-6 md:gap-y-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12',
				className,
			)}
			{...delegated}
		>
			{items.map((item, index) => {
				return renderItem(item, index)
			})}
		</Tag>
	)
}

function Media({
	image,
	description,
	index,
	tag = 'li',
	className,
	...delegated
}: {
	image: string
	description: string
	index: number
	tag?: 'div' | 'p' | 'li' | 'span'
	className?: string
}) {
	const Tag = tag as React.ElementType

	return (
		<Tag className={cn('grid grid-cols-2 gap-4', className)} {...delegated}>
			<p className='order-1 text-left leading-snug tracking-normal'>
				<span className='text-3xl font-bold text-primary'>{index + 1}.</span>{' '}
				{description}
			</p>
			<Image
				src={image}
				alt={`Step ${index + 1}`}
				width={240}
				height={160}
				className='rounded-sm shadow-sharp shadow-primary-300'
			/>
		</Tag>
	)
}
