import MicrocmsGallery from "@/components/MicrocmsGallery";

export default function StaticPage() {
	return (
		<>
			<div className="flex flex-col gap-6 md:flex-row">
				<div className="w-1/2 bg-gray-200">サイトバー</div>
				<div className="bg-yellow @container grow">
					<MicrocmsGallery
						queries={{
							limit: 100,
							orders: "system:default",
							filters: "isDisplayOnHome[equals]true",
						}}
						cols={2}
						colsMd={3}
						colsLg={4}
						colsXL={5}
						className="gap-2"
						childClassName="mb-2"
						imageWidth={600}
						imageClassName="rounded-lg"
					/>
				</div>
			</div>
			<div className="mt-12">
				<p>
					<a
						href="https://github.com/tailwindlabs/tailwindcss-container-queries?tab=readme-ov-file"
						className="text-blue-600 underline"
					>
						@tailwindcss/container-queries - Github
					</a>
				</p>
				<ul className="mt-4 list-inside list-disc">
					<li>@xs @container (min-width: 20rem /* 320px */)</li>
					<li>@sm @container (min-width: 24rem /* 384px */)</li>
					<li>@md @container (min-width: 28rem /* 448px */)</li>
					<li>@lg @container (min-width: 32rem /* 512px */)</li>
					<li>@xl @container (min-width: 36rem /* 576px */)</li>
					<li>@2xl @container (min-width: 42rem /* 672px */)</li>
					<li>@3xl @container (min-width: 48rem /* 768px */)</li>
					<li>@4xl @container (min-width: 56rem /* 896px */)</li>
					<li>@5xl @container (min-width: 64rem /* 1024px */)</li>
					<li>@6xl @container (min-width: 72rem /* 1152px */)</li>
					<li>@7xl @container (min-width: 80rem /* 1280px */)</li>
				</ul>
			</div>
		</>
	);
}
