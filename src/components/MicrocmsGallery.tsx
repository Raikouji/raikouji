/*
  Usage:
  <MicrocmsGallery
    queries={{ // MicroCMSQueries
      limit: 100,
      filters: { category: { equals: 'gallery' } },
      orders: 'system:default', // '-publishedAt' or 'publishedAt'
    }}
    cols={2} // default
    colsMd={3} // optional
    colsLg={4} // optional
    colsXL={5} // optional
    imageWidth={600} // default
    className='gap-2' // default
    childClassName='mb-2' //default
  />

  // その他のデータ
  totalCount: {totalCount}, offset: {offset}, limit: {limit}
 */
import Fadein from "@/components/FadeIn";
import { getGalleryList } from "@/lib/microcms";
import { cn } from "@/utils";
import type { MicroCMSQueries } from "microcms-js-sdk";
import Image from "next/image";

type Props = {
	queries: MicroCMSQueries;
	cols?: number;
	colsMd?: number;
	colsLg?: number;
	colsXL?: number;
	className?: string;
	childClassName?: string;
	imageWidth?: number;
	imageClassName?: string;
};

async function MicrocmsGallery({
	queries,
	cols = 1,
	colsMd = 2,
	colsLg = 3,
	colsXL = 4,
	className,
	childClassName,
	imageWidth = 600,
	imageClassName,
	...delegated
}: Props) {
	const { contents } = await getGalleryList(queries);

	if (!contents || contents.length === 0) {
		return <p>No contents</p>;
	}

	return (
		<ul
			className={cn(
				`columns-${cols}`,
				// colsMd && `@md\:columns-${colsMd}`,
				// colsLg && `@lg\:columns-${colsLg}`,
				// colsXL && `@xl\:columns-${colsXL}`,
				"lg:columns-3",
				colsMd && `@3xl:columns-${colsMd}`, // md, 768px
				colsLg && `@5xl:columns-${colsLg}`, // lg, 1024px
				colsXL && `@7xl:columns-${colsXL}`, // xl, 1280px
				className,
			)}
			{...delegated}
		>
			{contents.map((post) => {
				return (
					<li key={post.id} className={childClassName}>
						<Fadein tag="figure" className="relative break-inside-avoid shadow">
							<>
								<Image
									alt={post?.caption || ""}
									src={post.photo.url}
									width={imageWidth}
									height={
										(imageWidth * Number(post.photo?.height)) /
										Number(post.photo?.width)
									}
									className={cn("w-full", imageClassName && imageClassName)}
								/>
								{post?.caption && (
									<figcaption className="absolute bottom-1 left-1 inline-block rounded bg-black/60 px-1 text-xs leading-tight text-white md:text-sm">
										{post?.caption}
									</figcaption>
								)}
								<p className="hidden p-1 text-sm">
									{post?.category[0]} / {post?.isDisplayOnHome}
								</p>
							</>
						</Fadein>
					</li>
				);
			})}
		</ul>
	);
}

export default MicrocmsGallery;
