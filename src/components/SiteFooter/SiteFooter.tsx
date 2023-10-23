import Logo from '@/components/Logo'
import { SITE_TITLE } from '@/constants'
import Link from 'next/link'

function SiteFooter() {
  return (
    <footer>
      <div className='bg-gray-50 py-12'>
        <div className='container flex max-w-screen-xl flex-col-reverse justify-between gap-12 text-center md:flex-row md:text-left'>
          <div>
            <Logo tagline='タグラインです' taglinePosition='top'>
              {SITE_TITLE}
            </Logo>
            <p className='mt-3 text-sm'>
              Blog template created by{' '}
              <a href='https://www.joshwcomeau.com/'>Josh W. Comeau</a>. Check
              out <a href='https://www.joyofreact.com/'>The Joy of React</a> to
              learn how to build dynamic React apps like this one!
            </p>
          </div>
          <nav className='text-sm'>
            <h2 className='font-bold'>Links 1</h2>
            <ul className='mt-4 flex flex-col gap-3'>
              <li>
                <Link href='/'>RSS feed</Link>
              </li>
              <li>
                <Link href='/'>Terms of Use</Link>
              </li>
              <li>
                <Link href='/'>Privacy Policy</Link>
              </li>
              <li>
                <a href='https://twitter.com/JoshWComeau'>Twitter</a>
              </li>
            </ul>
          </nav>
          <nav className='text-sm'>
            <h2 className='font-bold'>Links 2</h2>
            <ul className='mt-4 flex flex-col gap-3'>
              <li>
                <Link href='/'>RSS feed</Link>
              </li>
              <li>
                <Link href='/'>Terms of Use</Link>
              </li>
              <li>
                <Link href='/'>Privacy Policy</Link>
              </li>
              <li>
                <a href='https://twitter.com/JoshWComeau'>Twitter</a>
              </li>
            </ul>
          </nav>
          <nav className='text-sm'>
            <h2 className='font-bold'>Links 3</h2>
            <ul className='mt-4 flex flex-col gap-3'>
              <li>
                <Link href='/'>RSS feed</Link>
              </li>
              <li>
                <Link href='/'>Terms of Use</Link>
              </li>
              <li>
                <Link href='/'>Privacy Policy</Link>
              </li>
              <li>
                <a href='https://twitter.com/JoshWComeau'>Twitter</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className='bg-gray-400 py-3 text-gray-300'>
        <p className='container text-center'>©︎name</p>
      </div>
    </footer>
  )
}

export default SiteFooter
