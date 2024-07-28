import Image from 'next/image'
import Link from 'next/link'

import Gallery from '@/components/Gallery'
import Card from '@/components/ui/Card'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import ArticleWrapper from '@/components/ArticleWrapper'
import Hr from '@/components/ui/Hr'
import { outputMetadata } from '@/utils'
import { ChevronRightIcon } from 'lucide-react'
import type { Metadata } from 'next'

const photos = [
	{
		src: '/images/lorem.jpg',
		width: 900,
		height: 600,
		alt: '代替テキスト1',
	},
	{
		src: '/images/dummy-01.jpg',
		width: 900,
		height: 600,
		alt: '代替テキスト2',
	},
	{ src: '/images/dummy-02.jpg', width: 600, height: 900 },
	{
		src: '/images/dummy-03.jpg',
		width: 900,
		height: 600,
		alt: '代替テキスト4',
	},
	{
		src: '/images/dummy-02.jpg',
		width: 600,
		height: 900,
		alt: '代替テキスト5',
	},
	{ src: '/images/lorem.jpg', width: 900, height: 600 },
	{
		src: '/images/dummy-01.jpg',
		width: 900,
		height: 600,
		alt: '代替テキスト7',
	},
	{
		src: '/images/dummy-03.jpg',
		width: 900,
		height: 600,
		alt: '代替テキスト8',
	},
]

// for metadata
const pageTitle = '子ページのタイトルです'
const pageDescription = '子ページのディスクリプションです'

export const metadata: Metadata = outputMetadata({
	title: pageTitle,
	description: pageDescription,
})

export default function Page() {
	return (
		<ArticleWrapper pageTitle={pageTitle}>
			<section className='flex flex-col gap-4'>
				<h2>Colors</h2>
				<h3>Semantic Color</h3>
				<div>
					<h4>primary</h4>
					<div className='grid grid-cols-3 gap-1 text-center md:grid-cols-6 lg:grid-cols-12'>
						<div className='bg-primary text-primary-foreground'>(600)</div>
						<div className='bg-primary-50'>50</div>
						<div className='bg-primary-100'>100</div>
						<div className='bg-primary-200'>200</div>
						<div className='bg-primary-300'>300</div>
						<div className='bg-primary-400'>400</div>
						<div className='bg-primary-500 text-primary-foreground'>500</div>
						<div className='bg-primary-600 text-primary-foreground'>600</div>
						<div className='bg-primary-700 text-primary-foreground'>700</div>
						<div className='bg-primary-800 text-primary-foreground'>800</div>
						<div className='bg-primary-900 text-primary-foreground'>900</div>
						<div className='bg-primary-950 text-primary-foreground'>950</div>
					</div>
				</div>
				<div>
					<h4>secondary</h4>
					<div className='grid grid-cols-3 gap-1 text-center md:grid-cols-6 lg:grid-cols-12'>
						<div className='bg-secondary text-secondary-foreground'>(600)</div>
						<div className='bg-secondary-50'>50</div>
						<div className='bg-secondary-100'>100</div>
						<div className='bg-secondary-200'>200</div>
						<div className='bg-secondary-300'>300</div>
						<div className='bg-secondary-400'>400</div>
						<div className='bg-secondary-500 text-secondary-foreground'>
							500
						</div>
						<div className='bg-secondary-600 text-secondary-foreground'>
							600
						</div>
						<div className='bg-secondary-700 text-secondary-foreground'>
							700
						</div>
						<div className='bg-secondary-800 text-secondary-foreground'>
							800
						</div>
						<div className='bg-secondary-900 text-secondary-foreground'>
							900
						</div>
						<div className='bg-secondary-950 text-secondary-foreground'>
							950
						</div>
					</div>
				</div>
				<div>
					<h4>tertiary</h4>
					<div className='grid grid-cols-3 gap-1 text-center md:grid-cols-6 lg:grid-cols-12'>
						<div className='bg-tertiary text-tertiary-foreground'>(500)</div>
						<div className='bg-tertiary-50'>50</div>
						<div className='bg-tertiary-100'>100</div>
						<div className='bg-tertiary-200'>200</div>
						<div className='bg-tertiary-300'>300</div>
						<div className='bg-tertiary-400'>400</div>
						<div className='bg-tertiary-500 text-tertiary-foreground'>500</div>
						<div className='bg-tertiary-600 text-tertiary-foreground'>600</div>
						<div className='bg-tertiary-700 text-tertiary-foreground'>700</div>
						<div className='bg-tertiary-800 text-tertiary-foreground'>800</div>
						<div className='bg-tertiary-900 text-tertiary-foreground'>900</div>
						<div className='bg-tertiary-950 text-tertiary-foreground'>950</div>
					</div>
				</div>
				<h3>Color Tokens</h3>
			</section>

			<section className='flex flex-col gap-4'>
				<h2>Header 1</h2>
				<h3>Header 2</h3>
				<h3>Header 3</h3>
				<h4>Header 4</h4>
				<h5>Header 5</h5>
				<h6>Header 6</h6>
			</section>

			<section>
				<h2>Buttons</h2>
				<div className='mt-4 flex flex-wrap gap-4'>
					<Button>Primary(default)</Button>
					<Button variant='secondary'>Secondary</Button>
					<Button variant='destructive'>Destructive</Button>
					<Button variant='outline'>Outline</Button>
					<Button variant='ghost'>Ghost</Button>
					<Button variant='link'>Link</Button>
					<Button size='sm'>size: sm</Button>
					<Button size='lg'>size: lg</Button>
					<Button variant='outline' size='icon'>
						<ChevronRightIcon className='h-4 w-4' />
					</Button>
					<Button>
						<ChevronRightIcon className='mr-2 h-4 w-4' /> Icon and Text
					</Button>
					<Button asChild>
						<Link href='/'>As Child (Link)</Link>
					</Button>
				</div>
			</section>

			<section>
				<h2>Badges</h2>
				<div className='mt-4 flex flex-wrap gap-4'>
					<Badge>Default</Badge>
					<Badge variant='secondary'>Secondary</Badge>
					<Badge variant='destructive'>Destructive</Badge>
					<Badge variant='outline'>outline</Badge>
				</div>
			</section>

			<section>
				<h2>Grid</h2>
				<h3 className='mt-4'>
					grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-4
				</h3>
				<div className='mt-4 grid grid-cols-3 gap-4 md:grid-cols-6 lg:grid-cols-12 [&>*]:bg-gray-200'>
					<div>col</div>
					<div>col</div>
					<div>col</div>
					<div>col</div>
					<div>col</div>
					<div>col</div>
					<div>col</div>
					<div>col</div>
					<div>col</div>
					<div>col</div>
					<div>col</div>
					<div>col</div>
					<div>col</div>
					<div>col</div>
				</div>

				<h3 className='mt-8'>
					grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4
				</h3>
				<div className='mt-4 grid grid-cols-2 justify-center gap-4 md:grid-cols-3 lg:grid-cols-4 [&>*]:bg-gray-200'>
					<div>col</div>
					<div>col</div>
					<div>col</div>
					<div>col</div>
					<div>col</div>
					<div>col</div>
					<div>col</div>
				</div>

				<h3 className='mt-8'>.grid.gap-4.lg:grid-cols-3</h3>
				<div className='mt-4 grid gap-8 lg:grid-cols-3 [&>*]:bg-gray-200'>
					<div>
						.col 指定なし:
						ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱のダミーコピーです上手どもっさと俄たますて、みんなまでぶんを弾いとだまし(100文字)。
					</div>
					<div className='col-span-2'>
						.col-span-2:
						ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱のダミーコピーです上手どもっさと俄たますて、みんなまでぶんを弾いとだまし(100文字)。
					</div>
				</div>
			</section>

			<section>
				<h2>hr</h2>
				<h3 className='my-4'>No class</h3>
				<hr />
				<h3 className='my-4'>hr.line-with-three-dots</h3>
				<Hr type='square' />
			</section>

			<section>
				<h2>Flexbox</h2>
				<h3 className='mt-4'>flex w-fit items-center gap-4</h3>
				<div className='mt-4 flex w-fit items-center gap-4 rounded border p-2'>
					<img
						src='/images/lorem.jpg'
						className='h-12 w-12 rounded-full'
						alt=''
					/>
					<div>
						<p className='leading-tight'>
							<strong>Andrew Alfred</strong>
							<br />
							Technical advisor
						</p>
					</div>
				</div>

				<h3 className='mt-8'>flex flex-wrap gap-4 [&amp;&gt;*]:grow</h3>
				<div className='mt-4 flex flex-wrap gap-4 [&>*]:grow [&>*]:bg-gray-200'>
					<div>column column column column column column</div>
					<div>column column column</div>
					<div>column column column</div>
					<div>column column column</div>
					<div>column column column</div>
					<div>column column column</div>
					<div>column column column</div>
				</div>
			</section>

			<section className='flex flex-col gap-4'>
				<h2>Container</h2>
				<div className='container mt-4 max-w-screen-sm border'>
					<p>
						.container.max-w-screen-sm /
						ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。
						それから思わ口まし勝た(50)しはでまた箱のダミーコピーです上手どもっさと俄たますて
						みんなまでぶんを弾いとだまし(100文字)。
					</p>
				</div>
				<div className='container max-w-screen-md border'>
					<p>
						.container.max-w-screen-md /
						ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。
						それから思わ口まし勝た(50)しはでまた箱のダミーコピーです上手どもっさと俄たますて
						みんなまでぶんを弾いとだまし(100文字)。
					</p>
				</div>
				<div className='container max-w-screen-lg border'>
					<p>
						.container.max-w-screen-lg /
						ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。
						それから思わ口まし勝た(50)しはでまた箱のダミーコピーです上手どもっさと俄たますて
						みんなまでぶんを弾いとだまし(100文字)。
					</p>
				</div>
				<div className='container max-w-screen-xl border'>
					<p>
						.container.max-w-screen-xl /
						ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。
						それから思わ口まし勝た(50)しはでまた箱のダミーコピーです上手どもっさと俄たますて
						みんなまでぶんを弾いとだまし(100文字)。
					</p>
				</div>
				<div className='container max-w-screen-2xl border'>
					<p>
						.container.max-w-screen-2xl /
						ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。
						それから思わ口まし勝た(50)しはでまた箱のダミーコピーです上手どもっさと俄たますて
						みんなまでぶんを弾いとだまし(100文字)。
					</p>
				</div>
				<div className='container w-full border'>
					<p>
						.container.w-full /
						ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。
						それから思わ口まし勝た(50)しはでまた箱のダミーコピーです上手どもっさと俄たますて
						みんなまでぶんを弾いとだまし(100文字)。
					</p>
				</div>
				<div className='container w-screen border'>
					<p className='text-red-500'>
						.container.w-screen / ※ `.container.w-screen`
						は使わない。ブラウザ全幅はスクロール幅を考慮した `.full-width`
						を使う(下記参照)
					</p>
				</div>
			</section>

			<section className='full-width flex flex-col gap-6 bg-amber-200 py-8'>
				<h2>Full Width</h2>
				<p className='mt-4'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
					eiusmod tempor incididunt ut 500 labore et dolore magna aliqua. Ut
					enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
					ut aliquip ex ea commodo consequat.
				</p>
				<div className='px-8'>
					<h3>幅いっぱい、余白あり .px-8</h3>
					<p className='mt-2'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut 500 labore et dolore magna aliqua. Ut
						enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
						ut aliquip ex ea commodo consequat.
					</p>
				</div>
				<div className='container max-w-screen-xl'>
					<h3>最大幅 .max-w-screen-xl</h3>
					<p className='mt-2'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut 500 labore et dolore magna aliqua. Ut
						enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
						ut aliquip ex ea commodo consequat.
					</p>
				</div>
				<div className='container max-w-screen-lg'>
					<h3>最大幅 .max-w-screen-lg</h3>
					<p className='mt-2'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut 500 labore et dolore magna aliqua. Ut
						enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
						ut aliquip ex ea commodo consequat.
					</p>
				</div>
				<div className='container max-w-screen-md'>
					<h3>最大幅 .max-w-screen-md</h3>
					<p className='mt-2'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut 500 labore et dolore magna aliqua. Ut
						enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
						ut aliquip ex ea commodo consequat.
					</p>
				</div>
				<div className='container max-w-screen-sm'>
					<h3>最大幅 .max-w-screen-sm</h3>
					<p className='mt-2'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut 500 labore et dolore magna aliqua. Ut
						enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
						ut aliquip ex ea commodo consequat.
					</p>
				</div>
				<div className='container max-w-[300px]'>
					<h3>最大幅 .max-w-[300px]</h3>
					<p className='mt-2'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut 500 labore et dolore magna aliqua. Ut
						enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
						ut aliquip ex ea commodo consequat.
					</p>
				</div>
			</section>

			<section className='full-width-xl bg-amber-200 py-8'>
				<h2>Full Width (xl)</h2>
				<p className='mt-4'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
					eiusmod tempor incididunt ut 500 labore et dolore magna aliqua. Ut
					enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
					ut aliquip ex ea commodo consequat.
				</p>
			</section>

			<section className='full-width-lg bg-amber-200 py-8'>
				<h2>Full Width (lg)</h2>
				<p className='mt-4'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
					eiusmod tempor incididunt ut 500 labore et dolore magna aliqua. Ut
					enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
					ut aliquip ex ea commodo consequat.
				</p>
			</section>

			<section className='full-width-md bg-amber-200 py-8'>
				<h2>Full Width (md)</h2>
				<p className='mt-4'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
					eiusmod tempor incididunt ut 500 labore et dolore magna aliqua. Ut
					enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
					ut aliquip ex ea commodo consequat.
				</p>
			</section>

			<section className='full-width-sm bg-amber-200 py-8'>
				<h2>Full Width (sm)</h2>
				<p className='mt-4'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
					eiusmod tempor incididunt ut 500 labore et dolore magna aliqua. Ut
					enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
					ut aliquip ex ea commodo consequat.
				</p>
			</section>

			<section className='bg-amber-200 py-8'>
				<h2>Not Full Width</h2>
				<p className='mt-4'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
					eiusmod tempor incididunt ut 500 labore et dolore magna aliqua. Ut
					enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
					ut aliquip ex ea commodo consequat.
				</p>
			</section>

			<section className='flex flex-col gap-4'>
				<h2>Card</h2>
				<Card className='mt-4 shadow'>
					<p>
						★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。
						それから思わ口まし勝た(50)しはでまた箱のダミーコピーです上手どもっさと俄たますて
						みんなまでぶんを弾いとだまし(100文字)。
					</p>
					<p>
						★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。
						それから思わ口まし勝た(50)しはでまた箱のダミーコピーです上手どもっさと俄たますて
						みんなまでぶんを弾いとだまし(100文字)。
					</p>
				</Card>
				<Card className='mx-auto max-w-screen-sm rounded-lg p-8 shadow'>
					<h3>見出し</h3>
					<p className='mt-4'>
						★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。
						それから思わ口まし勝た(50)しはでまた箱のダミーコピーです上手どもっさと俄たますて
						みんなまでぶんを弾いとだまし(100文字)。
					</p>
					<p className='mt-4'>
						★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。
						それから思わ口まし勝た(50)しはでまた箱のダミーコピーです上手どもっさと俄たますて
						みんなまでぶんを弾いとだまし(100文字)。
					</p>
				</Card>
			</section>

			<hr />

			<section>
				<h2>Aspect ratio</h2>
				<div className='mt-4 grid grid-cols-7 gap-8'>
					<div>
						<AspectRatio ratio={3303 / 1000}>
							<Image
								src='/lorem.jpg'
								alt='Lorem'
								width={2100}
								height={1400}
								className='h-full w-full object-cover'
								priority
							/>
						</AspectRatio>
						Bronze ratio (3.303:1)
					</div>
					<div>
						<AspectRatio ratio={16 / 9}>
							<Image
								src='/lorem.jpg'
								alt='Lorem'
								width={2100}
								height={1400}
								className='h-full w-full object-cover'
								priority
							/>
						</AspectRatio>
						16:9
					</div>
					<div>
						<AspectRatio ratio={1618 / 1000}>
							<Image
								src='/lorem.jpg'
								alt='Lorem'
								width={2100}
								height={1400}
								className='h-full w-full object-cover'
								priority
							/>
						</AspectRatio>
						Golden ratio (1.618/1)
					</div>
					<div>
						<AspectRatio ratio={3 / 2}>
							<Image
								src='/lorem.jpg'
								alt='Lorem'
								width={2100}
								height={1400}
								className='h-full w-full object-cover'
								priority
							/>
						</AspectRatio>
						3:2
					</div>
					<div>
						<AspectRatio ratio={1414 / 1000}>
							<Image
								src='/lorem.jpg'
								alt='Lorem'
								width={2100}
								height={1400}
								className='h-full w-full object-cover'
								priority
							/>
						</AspectRatio>
						Silver ratio (1.414:1)
					</div>
					<div>
						<AspectRatio ratio={1}>
							<Image
								src='/lorem.jpg'
								alt='Lorem'
								width={2100}
								height={1400}
								className='h-full w-full object-cover'
								priority
							/>
						</AspectRatio>
						Square
					</div>
					<div>
						<AspectRatio ratio={2 / 3}>
							<Image
								src='/lorem.jpg'
								alt='Lorem'
								width={2100}
								height={1400}
								className='h-full w-full object-cover'
								priority
							/>
						</AspectRatio>
						2:3
					</div>
				</div>
			</section>

			<section>
				<h2>Media</h2>
				<div className='mt-4 flex gap-8'>
					<div className='w-1/4'>
						<AspectRatio ratio={2 / 3}>
							<Image
								src='/lorem.jpg'
								alt='Lorem'
								width={2100}
								height={1400}
								className='h-full w-full object-cover'
								priority
							/>
						</AspectRatio>
						.w-1/4
					</div>
					<div className='w-3/4'>
						<h2>タイトル</h2>
						<p className='mt-4'>
							★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱のダミーコピーです上手どもっさと俄たますて、みんなまでぶんを弾いとだまし(100文字)。
							, w-3/4
						</p>
					</div>
				</div>
				<Card className='mx-auto my-8 max-w-screen-md p-12'>
					<div className='flex gap-8'>
						<div className='w-1/4'>
							<AspectRatio ratio={2 / 3}>
								<Image
									src='/lorem.jpg'
									alt='Lorem'
									width={2100}
									height={1400}
									className='h-full w-full object-cover'
									priority
								/>
							</AspectRatio>
						</div>
						<div className='w-3/4'>
							<h2>タイトル</h2>
							<p className='mt-4'>
								★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱のダミーコピーです上手どもっさと俄たますて、みんなまでぶんを弾いとだまし(100文字)。
							</p>
						</div>
					</div>
				</Card>
				<Card className='mx-auto my-8 max-w-screen-sm'>
					<div className='flex gap-8'>
						<div className='w-1/4'>
							<AspectRatio ratio={2 / 3}>
								<Image
									src='/lorem.jpg'
									alt='Lorem'
									width={2100}
									height={1400}
									className='h-full w-full object-cover'
									priority
								/>
							</AspectRatio>
						</div>
						<div className='w-3/4 py-8 pr-8'>
							<h2>タイトル</h2>
							<p className='mt-4'>
								★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱のダミーコピーです上手どもっさと俄たますて、みんなまでぶんを弾いとだまし(100文字)。
							</p>
						</div>
					</div>
				</Card>
			</section>

			<section>
				<h2>Background Images</h2>
				<p className='mt-4'>tailwind.config.ts で設定</p>
				<div className='mt-4 grid grid-cols-3 gap-4'>
					<div className='h-40 border bg-dots bg-repeat'>.bg-dots</div>
				</div>
				<h3 className='mt-6'>Background Attachment</h3>
				<div className='mt-4 grid grid-cols-3 gap-4'>
					<div className='h-40 border bg-dots bg-fixed bg-repeat'>
						.bg-fixed
					</div>
					<div className='h-40 overflow-auto border bg-dots bg-local bg-repeat'>
						<div className='bg-black/40 p-6 sm:px-16 sm:py-12'>
							<p className='text-center font-serif text-base italic leading-6 text-white sm:text-2xl sm:leading-8'>
								.bg-local / "Because the mail never stops. It just keeps coming
								and coming and coming, there's never a let-up. It's relentless.
								Every day it piles up more and more and more. And you gotta get
								it out but the more you get it out the more it keeps coming in.
								And then the barcode reader breaks and it's Publisher's Clearing
								House day."
							</p>
						</div>
					</div>
					<div className='h-40 overflow-auto border bg-dots bg-scroll bg-repeat'>
						<div className='bg-black/40 p-6 sm:px-16 sm:py-12'>
							<p className='text-center font-serif text-base italic leading-6 text-white sm:text-2xl sm:leading-8'>
								.bg-scroll / "Because the mail never stops. It just keeps coming
								and coming and coming, there's never a let-up. It's relentless.
								Every day it piles up more and more and more. And you gotta get
								it out but the more you get it out the more it keeps coming in.
								And then the barcode reader breaks and it's Publisher's Clearing
								House day."
							</p>
						</div>
					</div>
				</div>
				<h3 className='mt-6'>Background Clip</h3>
				<p>テキストの形状に合わせて要素の背景をトリミング</p>
				<div className='text-5xl font-extrabold'>
					<span className='bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent'>
						Hello world
					</span>
				</div>
			</section>

			<section>
				<h2>Gallery</h2>
				<h3 className='my-4'>No Prop</h3>
				<Gallery photos={photos} />
				<h3 className='mt-4'>With Props</h3>
				<p>{'col={1} colMd={2} colLg={3}'}</p>
				<Gallery photos={photos} col={1} colMd={2} colLg={3} />
			</section>

			<section className='full-width bg-amber-200 py-8'>
				<div className='container mt-8 max-w-screen-xl'>
					<h2 className='mb-4'>Gallery with Background</h2>
					<Gallery photos={photos} />
				</div>
			</section>

			<section className='full-width bg-amber-200 py-8'>
				<div className='container mt-8'>
					<h2 className='mb-4'>Gallery with Background (No max-width)</h2>
					<Gallery photos={photos} />
				</div>
			</section>
		</ArticleWrapper>
	)
}
