import ArticleWrapper from '@/components/ArticleWrapper'
import ImageAboveHeading from '@/components/ImageAboveHeading'
import MicrocmsGallery from '@/components/MicrocmsGallery'
import TocLink, { TocLinkItem } from '@/components/TocLink'
import { getMetadata } from '@/lib/get-metadata'

import type { Metadata } from 'next'

const pageTitle = 'ギャラリー'
const pageDescription =
	'境内の様子、あじさい、イベントなど、頼光寺の風景の写真ギャラリーです。'
const headerImage = '/images/monochrome.jpg'

export const metadata: Metadata = getMetadata({
	title: pageTitle,
	description: pageDescription,
})

export default async function Page() {
	return (
		<ArticleWrapper pageTitle={pageTitle} headerImage={headerImage}>
			<div className='my-12 flex flex-col'>
				<p className='text-center font-bold'>
					頼光寺の風景やイベントなどの写真です。
					<br />
					秋には紅葉をお楽しみいただけます。
				</p>
				<div className='mx-auto mt-4 max-w-screen-md'>
					<TocLink>
						<TocLinkItem id='temple'>境内の風景</TocLinkItem>
						<TocLinkItem id='ajisai'>あじさい</TocLinkItem>
						<TocLinkItem id='events'>イベント</TocLinkItem>
					</TocLink>
				</div>

				<section className='full-width px-4 py-16'>
					<p className='text-center'>
						<ImageAboveHeading imageName='bell' />
					</p>
					<h2 id='temple' className='mt-3 text-center'>
						境内の風景
					</h2>
					<div className='@container mx-auto mt-8 max-w-screen-2xl'>
						<MicrocmsGallery
							queries={{
								limit: 32,
								orders: 'system:default',
								filters: 'category[contains]境内の風景',
							}}
							cols={2}
							colsMd={3}
							colsLg={4}
							colsXL={5}
							className='gap-2'
							childClassName='mb-2'
							imageWidth={600}
							imageClassName='rounded-lg'
						/>
					</div>
				</section>

				<section className='full-width bg-secondary-50 px-4 py-16'>
					<p className='text-center'>
						<ImageAboveHeading imageName='statue' />
					</p>
					<h2 id='ajisai' className='mt-2 text-center'>
						あじさい
					</h2>
					<div className='@container mx-auto mt-8 max-w-screen-2xl'>
						<MicrocmsGallery
							queries={{
								limit: 32,
								orders: 'system:default',
								filters: 'category[contains]あじさい',
							}}
							cols={2}
							colsMd={3}
							colsLg={4}
							colsXL={5}
							className='gap-2'
							childClassName='mb-2'
							imageWidth={600}
							imageClassName='rounded-lg'
						/>
					</div>
				</section>

				<section className='full-width px-4 py-16'>
					<p className='text-center'>
						<ImageAboveHeading imageName='asagao' />
					</p>
					<h2 id='events' className='mt-2 text-center'>
						イベント
					</h2>
					<div className='@container mx-auto mt-8 max-w-screen-2xl'>
						<MicrocmsGallery
							queries={{
								limit: 32,
								orders: 'system:default',
								filters: 'category[contains]行事・イベント',
							}}
							cols={2}
							colsMd={3}
							colsLg={4}
							colsXL={5}
							className='gap-2'
							childClassName='mb-2'
							imageWidth={600}
							imageClassName='rounded-lg'
						/>
					</div>
				</section>
			</div>
		</ArticleWrapper>
	)
}
