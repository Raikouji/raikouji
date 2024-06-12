/** @ref: https://react-photo-album.com/documentation */
"use client";
import NextJsImage from "@/components/NextJsImage";
import PhotoAlbum from "react-photo-album";

function Gallery({
	photos,
	col = 2,
	colMd = 3,
	colLg = 4,
}: {
	photos: {
		src: string;
		width: number;
		height: number;
		alt?: string;
	}[];
	col?: number;
	colMd?: number;
	colLg?: number;
}) {
	return (
		<PhotoAlbum
			layout="masonry"
			photos={photos}
			renderPhoto={NextJsImage}
			defaultContainerWidth={1140}
			sizes={{
				size: "1140px",
				sizes: [
					{ viewport: "(max-width: 640px)", size: "100vw" },
					{ viewport: "(max-width: 1024px)", size: "calc(100vw - 20px)" },
					{ viewport: "(max-width: 1199px)", size: "calc(100vw - 30px)" },
				],
			}}
			columns={(containerWidth) => {
				if (containerWidth < 640) return col;
				if (containerWidth < 1024) return colMd;
				return colLg;
			}}
		/>
	);
}

export default Gallery;
