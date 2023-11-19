import Logo from '@/components/Logo'
import { SITE_TITLE } from '@/constants'
import { cn } from '@/utils'
import Link from 'next/link'

function SiteFooter() {
  return (
    <footer>
      <div className='bg-gray-50 px-8 py-16 text-foreground/80 lg:px-0'>
        <div className='container flex max-w-screen-xl flex-col-reverse justify-between gap-12 md:flex-row'>
          <div className='max-w-xl text-center md:text-left'>
            <Logo tagline='タグラインです' taglinePosition='top'>
              {SITE_TITLE}
            </Logo>
            <p className='mt-3'>
              住所などの情報です。★★ダミーコピーです手はおっかさんの演奏硝子屋をセロに思ったばこだた。それから思わ口まし勝た(50)しはでまた箱のダミーコピーです上手どもっさと俄たますて、みんなまでぶんを弾いとだまし(100文字)。
            </p>
          </div>
          <nav className='flex flex-col gap-8 lg:flex-row lg:gap-12'>
            <div>
              <h2 className='font-bold'>Links 1</h2>
              <ul
                className={cn(
                  'mt-4 flex flex-col leading-tight',
                  '[&>li>a]:block [&>li>a]:py-3 lg:[&>li>a]:py-2',
                  'divide-y divide-dashed divide-primary-200 lg:divide-none',
                )}
              >
                <li>
                  <Link href='/' className='lg:hover:text-primary-400'>
                    RSS feed
                  </Link>
                </li>
                <li>
                  <Link href='/' className='lg:hover:text-primary-400'>
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link href='/' className='lg:hover:text-primary-400'>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <a href='https://twitter.com/JoshWComeau'>Twitter</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='font-bold'>Links 2</h2>
              <ul
                className={cn(
                  'mt-4 flex flex-col leading-tight',
                  '[&>li>a]:block [&>li>a]:py-3 lg:[&>li>a]:py-2',
                  'divide-y divide-dashed divide-primary-200 lg:divide-none',
                )}
              >
                <li>
                  <Link href='/' className='lg:hover:text-primary-400'>
                    RSS feed
                  </Link>
                </li>
                <li>
                  <Link href='/' className='lg:hover:text-primary-400'>
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link href='/' className='lg:hover:text-primary-400'>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <a href='https://twitter.com/JoshWComeau'>Twitter</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='font-bold'>Links 3</h2>
              <ul
                className={cn(
                  'mt-4 flex flex-col leading-tight',
                  '[&>li>a]:block [&>li>a]:py-3 lg:[&>li>a]:py-2',
                  'divide-y divide-dashed divide-primary-200 lg:divide-none',
                )}
              >
                <li>
                  <Link href='/' className='lg:hover:text-primary-400'>
                    RSS feed
                  </Link>
                </li>
                <li>
                  <Link href='/' className='lg:hover:text-primary-400'>
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link href='/' className='lg:hover:text-primary-400'>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <a href='https://twitter.com/JoshWComeau'>Twitter</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <p className='mt-12 text-center text-sm'>
          Copyright ©︎ {new Date().getFullYear()} name
        </p>
      </div>
    </footer>
  )
}

export default SiteFooter
