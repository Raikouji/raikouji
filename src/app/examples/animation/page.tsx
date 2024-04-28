'use client'

import confetti from 'canvas-confetti'
import { motion, useScroll } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function Home() {
  const motionContainerRef = useRef(null)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    /* @ref: https://zenn.dev/a_saya_108/articles/13f8a52eef9de6 */
    /* @ref: https://blog.kimizuka.org/entry/2022/12/08/124903 */
    const duration = 15 * 1000
    const animationEnd = Date.now() + duration
    let skew = 1

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min
    }

    ;(function frame() {
      const timeLeft = animationEnd - Date.now()
      const ticks = Math.max(100, 500 * (timeLeft / duration))
      skew = Math.max(0.8, skew - 0.001)

      confetti({
        particleCount: 2,
        startVelocity: 0,
        ticks: ticks,
        origin: {
          x: Math.random(),
          // since particles fall down, skew start toward the top
          y: Math.random() * skew - 0.2,
        },
        colors: ['#fbe8ff', '#dbe9ff'],
        shapes: ['circle'],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(0.4, 1),
        drift: randomInRange(-0.4, 0.4),
      })

      if (timeLeft > 0) {
        requestAnimationFrame(frame)
      }
    })()
  })

  return (
    <div className={`container flex max-w-screen-xl flex-col gap-12`}>
      <motion.div
        className='full-width sticky left-0 top-0 z-50 h-10 bg-primary'
        style={{
          scaleX: scrollYProgress,
        }}
      />

      <main className='h-[3000px] bg-gray-100'>
        <p>メイン 3000px</p>
      </main>

      <div ref={motionContainerRef} style={{ overflow: 'scroll' }}>
        <p>
          Framer Motion スクロールで表示テスト：この親要素に ref
          を設定しており、これが画面内に入った時にアニメーションが発火
        </p>
        <motion.div
          className='translate-y-24 text-4xl font-bold text-tertiary'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{
            amount: 'all' /* root: motionContainerRef */,
            once: true,
          }}
          animate={{ y: 0 }}
          transition={{ duration: 2 }}
          // margin={'0px -20px 0px 100px'}
          // amount={100} // 交差量
        >
          祥雲山。
          頼光寺は紀元1000年頃に源氏の一族によって創立、真言律宗の寺院として始まりました
          その後数々の戦火により衰退したものの二度の再興を経て、1804年に尼寺となりました。
          尼僧たちの坐禅道場として活用されたりしましたが、1875年には維持が困難となり、法常寺に合併しました。
          その後、旧信徒たちの支援により建物や什物は引き継がれ、現在では曹洞宗に属し、
          地域の人々に「あじさい寺」として親しまれています
        </motion.div>
      </div>
    </div>
  )
}
