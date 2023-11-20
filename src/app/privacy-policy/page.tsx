import Breadcrumbs from '@/components/Breadcrumbs'
import PageHeader from '@/components/PageHeader'
import { outputMetadata } from '@/utils'
import type { Metadata } from 'next'

// for metadata
const pageTitle = 'プライバシーポリシー'
const pageDescription =
  '頼光寺ホームページの個人情報保護方針(プライバシーポリシー)です。'

export const metadata: Metadata = outputMetadata({
  title: pageTitle,
  description: pageDescription,
})

export default function Page() {
  return (
    <div className='container max-w-screen-xl'>
      <main>
        <PageHeader fullWidth>{pageTitle}</PageHeader>
        <Breadcrumbs className='mt-2' />

        <div className='mx-auto my-12 flex max-w-screen-md flex-col gap-12'>
          <div className='mx-auto max-w-screen-sm'>
            <p className='text-center font-bold'>
              賴光寺は以下のように個人情報保護方針を定め、
              個人情報保護が重要かつ守秘性の高いものであることを認識することで、
              個人情報の適切な保護に取り組みます。
            </p>
          </div>

          <section>
            <h2 className='mt-4 text-center text-xl'>
              1. 個人情報の取得・利用・提供について
            </h2>
            <p className='mt-4'>
              賴光寺では、事業内容、及び、事業規模を考慮して、適切に個人情報を取得すると共に、
              予め定めた利用目的の範囲内でのみ、個人情報を取り扱います。目的を超えた個人情報の利用や、
              個人情報を本人の同意なくして第三者に提供をいたしません。
            </p>
          </section>

          <section>
            <h2 className='mt-4 text-center text-xl'>
              2. 法令等の遵守について
            </h2>
            <p className='mt-4'>
              個人情報を取り扱う上で、個人情報保護法をはじめとした個人情報の関連ガイドライン等、
              国の定める指針や条例、その他の規範を確認し、遵守していきます。
            </p>
          </section>

          <section>
            <h2 className='mt-4 text-center text-xl'>
              3. 個人情報保護のための安全対策の実施について
            </h2>
            <p className='mt-4'>
              個人情報を適切に安全かつ適切に取り扱うことを確実にするため、
              個人情報保護に関する教育を徹底し、
              個人情報の滅失、破壊、改ざん、毀損、漏洩等の予防に努めます。
              また、日々の確認、内部監査等を通じて、不備があった際には、
              早期に検出すると共に、原因を精査し、是正措置を講じることで再発防止に努めます。
            </p>
          </section>

          <section>
            <h2 className='mt-4 text-center text-xl'>
              4. 個人情報の取り扱いに関する苦情及び相談
            </h2>
            <p className='mt-4'>
              個人情報の取り扱いに関する苦情、相談等に対して、遅滞なく、速やかに対応を行います。
            </p>
          </section>

          <section>
            <div className='mt-6 rounded-xl bg-tertiary-100 p-6 shadow-lg lg:p-8'>
              <h3 className='mt-2 text-center text-tertiary-dark'>
                お問い合わせ先
              </h3>
              <p className='mt-3 text-center'>・住所、電話、フォームリンク</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
