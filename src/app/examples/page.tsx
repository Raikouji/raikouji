import ArticleWrapper from '@/components/ArticleWrapper'

export default function Page() {
	return (
		<ArticleWrapper pageTitle='Examples'>
			<section className='border p-4'>
				<h2>Examples</h2>
				<ul className='list-inside list-disc [&>li]:text-blue-600 [&>li]:underline'>
					<li>
						<a href='examples/animation'>animation</a>
					</li>
					<li>
						<a href='examples/card'>card</a>
					</li>
					<li>
						<a href='examples/hamburger-menu'>hamburger-menu</a>
					</li>
					<li>
						<a href='examples/microcms'>microcms</a>
					</li>
					<li>
						<a href='examples/microcms-gallery'>microcms-gallery</a>
					</li>
					<li>
						<a href='examples/navigation-menu'>navigation-menu</a>
					</li>
				</ul>
			</section>
		</ArticleWrapper>
	)
}
