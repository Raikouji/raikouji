import { getBlogList } from "@/lib/microcms";
import { format, parseISO } from "date-fns";
import Link from "next/link";

export default async function NewsList({
	className,
	...delegated
}: {
	className?: string;
}) {
	const { contents } = await getBlogList();

	if (!contents || contents.length === 0) {
		return <p>No contents</p>;
	}

	return (
		<ul className={className} {...delegated}>
			{contents.map((post) => {
				const date = parseISO(post.publishedAt as string);
				return (
					<Link
						key={post.id}
						href={`/blog/${post.id}`}
						className="border-b border-dashed border-b-secondary-200 py-2 hover:opacity-80"
					>
						<li className="flex gap-1">
							<span className="inline-block w-16 pt-0.5 text-sm">
								{format(date, "MM月dd日")}
							</span>
							<p className="grow text-base text-primary-dark underline">
								{post.title}
							</p>
						</li>
					</Link>
				);
			})}
		</ul>
	);
}
