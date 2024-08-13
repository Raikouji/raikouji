/**
 * アプリ全体で使う定数
 */

export const SITE_TITLE = '頼光寺 (川西市、あじさい寺)'
export const BASE_URL = 'https://ajisai-raikouji.com'

export const SITE_DESCRIPTION =
	'兵庫県川西市にある「祥雲山・頼光寺 (賴光寺)」の公式ウェブサイト。' +
	'源氏ゆかりのお寺で、境内には歴史にゆかりある墓地が点在しています。' +
	'初夏のあじさいの季節が見どころで、毎年多くの方にご参拝いただいております。'

export const BREAKPOINTS = {
	DESKTOP: 1024,
	TABLET: 768,
	MOBILE: 375,
}

export const NAVIGATION_ITEMS = [
	{ href: '/', title: 'Home' },
	{
		href: 'about',
		title: '頼光寺について',
		subMenu: [
			{ href: '/about', title: 'ごあいさつ・沿革' },
			{ href: '/gallery', title: 'ギャラリー' },
			{ href: '/scarlet-seal', title: '御朱印、仏前結婚式' },
			{ href: '/multi-purpose-hall', title: '紫陽閣の貸し出し' },
		],
	},
	{ href: '/events', title: '行事案内' },
	{ href: '/cemetery', title: '墓地の案内' },
	{ href: '/access', title: 'アクセス' },
	{ href: '/contact', title: 'お問合せ' },
]
