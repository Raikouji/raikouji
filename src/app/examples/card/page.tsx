import ArticleWrapper from '@/components/ArticleWrapper'
import Card from '@/components/ui/Card'
import { cn } from '@/lib/cn'

export default function Page() {
	return (
		<ArticleWrapper pageTitle='Card'>
			<section className='border p-4'>
				<h2>Card (幅が狭い)</h2>
				<CardNarrow />
			</section>
		</ArticleWrapper>
	)
}

function CardNarrow() {
	return (
		//幅狭い、カード
		<div className='mx-auto mt-12 max-w-screen-md'>
			<Card
				className={cn(
					'relative mx-auto p-8',
					'bg-[url("/images/bg-paper.png")] bg-cover',
					'rounded-xl shadow-lg',
				)}
			>
				<h3 className='text-secondary-dark text-center'>
					Card スタイル - 幅の狭いカード
				</h3>
				<p className='mt-4'>
					★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。
					それから思わ口まし勝た(50)しはでまた箱のダミーコピーです上手どもっさと俄たますて、
					みんなまでぶんを弾いとだまし(100文字)。
				</p>
				<ul className='marker:text-tertiary mt-4 list-inside list-disc'>
					<li>リスト項目１</li>
					<li>リスト項目２</li>
				</ul>
			</Card>
		</div>
	)
}
