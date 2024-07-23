import NewsList from '@/components/NewsList'
import { getBasicInformation } from '@/lib/microcms'
import type { BasicInformation } from '@/types/post'
import { cn } from '@/utils'
import { format, parseISO } from 'date-fns'
import Image from 'next/image'
export default async function Information() {
	let data: BasicInformation | null = null
	let errorMassage = ''

	try {
		data = await getBasicInformation()
	} catch (error) {
		errorMassage = `Error fetching basic information: ${error}`
	}

	if (errorMassage) {
		return <p>{errorMassage}</p>
	}

	if (!data || !data.flowerPhoto || data.flowerPhoto.length === 0) {
		return <p>No data or no flower photo.</p>
	}

	const date = parseISO(data.publishedAt as string)

	return (
		<div
			className={cn(
				'relative mx-auto max-w-screen-md w-full p-8',
				'bg-[url("/images/bg-paper.png")] bg-cover bg-top',
				'rounded-xl shadow-lg',
			)}
		>
			<h2
				className={cn(
					'absolute -left-6 top-3',
					'border-t-4 border-gray-800 bg-primary-dark px-2 py-3 shadow-lg',
					'text-sm tracking-widest text-white ',
				)}
				style={{ writingMode: 'vertical-rl' }}
			>
				お知らせ
			</h2>
			<div className='flex flex-col md:flex-row md:gap-8'>
				<div className='order-1 md:w-2/3'>
					{data.isActive && (
						<div className='flex items-center justify-start md:-ml-6'>
							<div className='hidden w-3 overflow-hidden md:block'>
								<div className='h-4 origin-bottom-right rotate-45 transform bg-primary' />
							</div>
							<div className='w-fit bg-primary px-4 py-2 text-white md:rounded-3xl'>
								<h3 className='text-center text-base md:text-left'>
									あじさいの開花状況
								</h3>
								<p className='text-center text-sm text-yellow-200 md:text-left'>
									{format(date, 'MM月dd日 H時m分')} 更新
								</p>
								<p className='mt-1 text-sm'>{data.flowerState}</p>
							</div>
						</div>
					)}
					<div className={data.isActive ? 'mt-4' : undefined}>
						<NewsList className='mt-4 flex flex-col' />
					</div>
				</div>
				<div className='md:w-1/3'>
					<p className='aspect-w-1 aspect-h-1'>
						<Image
							src={data.flowerPhoto[0].url}
							width={data.flowerPhoto[0].width}
							height={data.flowerPhoto[0].height}
							alt='開花状況 1'
							className='mx-auto w-full h-full object-cover shadow-lg md:rounded-lg'
							objectFit='cover'
						/>
					</p>
				</div>
			</div>
		</div>
	)
}
