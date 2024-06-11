import { getBlogList } from "@/lib/microcms";
import { format, parseISO } from "date-fns";
import Link from "next/link";

export default async function StaticPage() {
	const { contents } = await getBlogList();
	const time = new Date().toLocaleString();

	if (!contents || contents.length === 0) {
		return <p>No contents</p>;
	}

	return (
		<div>
			<p>Update: {time}</p>
			<ul>
				{contents.map((post) => {
					const date = parseISO(post.publishedAt as string);
					return (
						<li key={post.id} className="flex gap-1">
							<Link
								href={`/blog/${post.id}`}
								className="text-blue-600 underline hover:text-blue-400"
							>
								{post.title}
							</Link>
							<span className="inline-block text-sm">
								{format(date, "MM月dd日")}
							</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
