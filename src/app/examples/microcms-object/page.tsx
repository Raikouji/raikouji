import { getBasicInformation } from "@/lib/microcms";
import type { BasicInformation } from "@/types/post";
import Image from "next/image";

export default async function StaticPage() {
	let data: BasicInformation | null = null;
	let errorMassage = "";

	try {
		data = await getBasicInformation();
	} catch (error) {
		errorMassage = `Error fetching basic information: ${error}`;
	}

	if (errorMassage) {
		return <p>{errorMassage}</p>;
	}

	if (!data) {
		return <p>No data.</p>;
	}

	return (
		<>
			<h1 className="text-4xl">MicroCMS オブジェクトデータの取得</h1>
			<p>data: {data.isActive.toString()}</p>
			<p>flowerState: {data.flowerState}</p>
			{data.flowerPhoto?.length &&
				data.flowerPhoto.map((photo, index) => {
					return (
						<p key={crypto.randomUUID()}>
							<Image
								src={photo.url}
								width={photo.height}
								height={photo.width}
								style={{
									width: "300px",
									height: "auto",
								}}
								alt={`頼光寺の開花状況の写真 ${index}`}
							/>
						</p>
					);
				})}
		</>
	);
}
