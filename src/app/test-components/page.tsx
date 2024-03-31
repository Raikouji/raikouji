import ArticleWrapper from '@/components/ArticleWrapper'
import Card from '@/components/ui/Card'
import { cn } from '@/utils'

export default function Page() {
  return (
    <ArticleWrapper pageTitle='コンポーネント まとめ'>
      <section>
        <CardNarrow />
      </section>
    </ArticleWrapper>
  )
}

export function CardNarrow() {
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
        <h3 className='text-center text-secondary-dark'>
          Card スタイル - 幅の狭いカード
        </h3>
        <p className='mt-4'>
          ★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。
          それから思わ口まし勝た(50)しはでまた箱のダミーコピーです上手どもっさと俄たますて、
          みんなまでぶんを弾いとだまし(100文字)。
        </p>
        <ul className='mt-4 list-inside list-disc marker:text-tertiary'>
          <li>リスト項目１</li>
          <li>リスト項目２</li>
        </ul>
      </Card>
    </div>
  )
}
