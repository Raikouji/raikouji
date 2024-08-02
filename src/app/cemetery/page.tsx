import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import ArticleWrapper from '@/components/ArticleWrapper'
import Gallery from '@/components/Gallery'
import ImageAboveHeading from '@/components/ImageAboveHeading'
import TocLink, { TocLinkItem } from '@/components/TocLink'
import Card from '@/components/ui/Card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/cn'
import { getMetadata } from '@/lib/get-metadata'

const pageTitle = '墓地の案内'
const pageDescription =
	'頼光寺のお墓は、静かで緑豊かな心安らぐ空間です。永代供養共同墓、水子供養塔もあります。能勢電鉄「畦野駅」から徒歩５分とアクセスもしやすい立地です。'
const headerImage =
	'https://images.microcms-assets.io/assets/2954660cbcb2468c91911ef67d43d6dc/22ef56d8a6544574afa8d49e9bd17ac3/flower.jpg'

export const metadata: Metadata = getMetadata({
	title: pageTitle,
	description: pageDescription,
})

const photos = [
	{
		src: '/images/genji.jpg',
		width: 900,
		height: 600,
		alt: '源頼光',
	},
	{
		src: '/images/grave1.jpg',
		width: 900,
		height: 600,
		alt: '代替テキスト2',
	},
	{
		src: '/images/grave3.jpg',
		width: 900,
		height: 600,
		alt: '代替テキスト1',
	},
	{
		src: '/images/grave2.jpg',
		width: 900,
		height: 600,
		alt: '代替テキスト1',
	},
]

export default function Page() {
	return (
		<ArticleWrapper
			className='mb-0'
			pageTitle={pageTitle}
			headerImage={headerImage}
		>
			<div className='mx-auto max-w-screen-md'>
				<p className='font-bold lg:text-center'>
					頼光寺のお墓は、静かで緑豊かな心安らぐ空間で、永遠の憩いの場所としてふさわしい場所。
					<br />
					能勢電鉄「畦野駅」から徒歩５分とアクセスもしやすい立地です。
				</p>
				<TocLink>
					<TocLinkItem id='public-grave'>永代供養共同墓</TocLinkItem>
					<TocLinkItem id='mizuko-kuyou'>水子供養</TocLinkItem>
					<TocLinkItem id='general-cemetery'>一般墓地（檀家様）</TocLinkItem>
					<TocLinkItem id='historic-graves'>歴史にまつわるお墓</TocLinkItem>
				</TocLink>
			</div>

			<section className='mx-auto max-w-screen-lg py-12'>
				<div
					id='public-grave'
					className='mt-8 flex flex-col items-center gap-4 md:flex-row md:gap-8 lg:gap-12'
				>
					<p>
						<Image
							src='/images/cemetery.jpg'
							alt='永代供養共同墓'
							width={384}
							height={256}
						/>
					</p>
					<div className='md:w-3/5'>
						<p className='text-center'>
							<ImageAboveHeading imageName='asagao' />
						</p>
						<h2 className='mt-3 text-center tracking-widest'>永代供養共同墓</h2>
						<p className='mt-8'>
							当寺境内の永代供養共同墓にご納骨後、当寺の続く限り(永代にわたり)管理、毎年のお盆・春秋両彼岸には法要を執り行い丁重に供養いたします。
						</p>
						<h3 className='mt-4'>宗旨・宗派は問いません</h3>
						<p className='mt-2'>
							法要は当寺(曹洞宗)の方式で行いますが、仏教各派はもとより、どんな宗旨・宗派の方にも、門戸を開いています。
							永代供養がご自身やご家族・ご親族のお考えに合っている場合はお気軽にご利用ください。
						</p>
						<h3 className='mt-4'>こんな方におすすめします</h3>
						<ul className='mt-2 list-inside list-disc marker:text-primary'>
							<li>安心できるお墓をお求めの方</li>
							<li>ご家族、子どもの負担を減らしたい方</li>
							<li>転勤が多く墓所を定めにくい方</li>
							<li>高齢でお墓参りが困難な方</li>
							<li>経済的な理由で負担を減らしたい方</li>
							<li>後継者がいない方</li>
							<li>分家された方</li>
							<li>お寺とのご縁をお持ちでない方</li>
							<li>諸事情で墓所を持つことが難しい方</li>
						</ul>
						<Card
							className={cn(
								'relative mx-auto mt-8 p-8',
								'bg-[url("/images/bg-paper.png")] bg-repeat',
								'rounded-xl shadow-lg',
							)}
						>
							<h3 className='text-center text-secondary-dark'>
								永代供養納骨塔のご案内
							</h3>
							<p className='mt-4'>
								当寺永代供養納骨塔へのご納骨をご検討の方は、ご予約の上、当寺にご訪問いただきご見学ください。
								ご見学の際に、納骨塔の詳細やお手続きの流れについてご説明させていただきます。
							</p>
							<ul className='mt-4 list-inside list-disc text-sm marker:text-tertiary'>
								<li>墓石はありません。</li>
								<li>志納金：15万円から</li>
								<li>申込み後の管理料はかかりません</li>
							</ul>
						</Card>
					</div>
				</div>
			</section>

			<div className='full-width bg-secondary-50 px-8 py-12 lg:px-2'>
				<section className='mx-auto max-w-screen-md'>
					<div id='mizuko-kuyou' className='mt-8'>
						<p className='mx-auto max-w-screen-sm'>
							<Image
								src='/images/statue-and-ajisai.jpg'
								alt='水子供養'
								width={2000}
								height={1333}
							/>
						</p>
						<p className='mt-12 text-center'>
							<ImageAboveHeading imageName='momiji' />
						</p>
						<h2 className='mt-3 text-center tracking-widest'>水子供養</h2>
						<div className='mt-12 flex flex-col gap-4 lg:gap-12'>
							<div className=''>
								<p>
									心を込めて水子供養を行います。手厚く供養し、大切に管理しております。緑に囲まれ、初夏には庭を彩る紫陽花が心の安らぎを与えてくれます。
								</p>
								<p className='mt-4'>
									都会の喧騒からは遠く、しかし大阪からは１時間以内とアクセスも良好。心静かな環境で故人を偲び、供養することができます。
								</p>
							</div>
							<div className=''>
								<Card
									className={cn(
										'relative mx-auto p-8',
										'bg-[url("/images/bg-paper.png")] bg-repeat',
										'rounded-xl shadow-lg',
									)}
								>
									<h3 className='text-center text-secondary-dark'>
										水子供養のご案内
									</h3>
									<p className='mt-4'>
										ご依頼・お問合せは、お電話にて承っております。ご家族の想いやご希望をお聞きした上で、法要の日時を決めさせていただきます。供養の法要は、本堂にて行います。
									</p>
									<ul className='mt-4 list-inside list-disc text-sm marker:text-tertiary'>
										<li>お布施の目安：５千円から</li>
										<li>墓石はありません。</li>
										<li>納骨ご希望の方はご相談ください。</li>
									</ul>
									<div className='mt-4 border border-secondary-300 p-3'>
										<h4>【来山(来寺)が困難な方】</h4>
										<p className='mt-2'>
											当寺へのお越しが難しい方は、来寺なしでの供養も可能です。問合せフォームまたはお電話でご連絡いただければ、お聞きした内容に基づき、法要を執り行います。ご希望の方には、供養が行われたことを証明する「回向証」の発行も承ります。
										</p>
									</div>
								</Card>
							</div>
						</div>
					</div>
				</section>
			</div>

			<section className='mx-auto max-w-screen-lg py-12'>
				<div
					id='general-cemetery'
					className='mt-8 flex flex-col items-center gap-4 md:flex-row md:gap-8 lg:gap-12'
				>
					<p className='md:w-1/2'>
						<Image
							src='/images/general-cemetery.jpg'
							alt='一般墓地 (檀家)'
							width={2000}
							height={1333}
						/>
					</p>
					<div className='md:w-1/2'>
						<p className='text-center'>
							<ImageAboveHeading imageName='chime' />
						</p>
						<h2 className='mt-3 text-center tracking-widest'>
							一般墓地 (宗旨宗派問わず)
						</h2>
						<p className='mt-12'>
							当寺の一般墓地は緑豊かな環境に囲まれた静かな環境にあります。
							大阪から１時間以内のアクセスが可能な、お参りにしやすい便利な立地です。
						</p>
					</div>
				</div>
			</section>

			<div className='full-width bg-primary-950 px-8 py-12 lg:px-2'>
				<section
					id='historic-graves'
					className='mx-auto w-full max-w-screen-lg py-12 text-white'
				>
					<p className='text-center'>
						<ImageAboveHeading imageName='uguisu' />
					</p>
					<h2 className='mt-3 text-center'>歴史にまつわるお墓</h2>
					<p className='mx-auto mt-8 max-w-screen-sm lg:text-center'>
						境内には、本寺の設立者や源氏ゆかりの歴史にちなんだ古いお墓があります。
						<br />
						詳しくは
						<Link
							href='/about'
							className='text-primary-300 underline hover:no-underline'
						>
							「頼光寺の沿革」
						</Link>
						をご覧ください。
					</p>

					<div className='mt-8'>
						<Gallery photos={photos} col={1} colMd={2} colLg={2} />
					</div>

					<p className='mt-8 text-center'>
						<Button asChild>
							<Link href='/about'>ご挨拶・頼光寺の沿革</Link>
						</Button>
					</p>
				</section>
			</div>
		</ArticleWrapper>
	)
}
