"use client";

import Link from "next/link";
import * as React from "react";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/utils";

const components: { title: string; href: string; description: string }[] = [
	{
		title: "ごあいさつ・頼光寺の沿革",
		href: "/about",
		description:
			"A modal dialog that interrupts the user with important content and expects a response.",
	},
	{
		title: "写真ギャラリー",
		href: "/gallery",
		description:
			"For sighted users to preview content available behind a link.",
	},
	{
		title: "リンク",
		href: "/links",
		description:
			"For sighted users to preview content available behind a link.",
	},
];

const components2: { title: string; href: string; description: string }[] = [
	{
		title: "御朱印、仏前結婚式",
		href: "/red-seal",
		description:
			"A modal dialog that interrupts the user with important content and expects a response.",
	},
	{
		title: "紫陽閣(多目的ホール)の貸し出し",
		href: "/multi-purpose-hall",
		description:
			"For sighted users to preview content available behind a link.",
	},
];

const components3: { title: string; href: string; description: string }[] = [
	{
		title: "永代供養合同墓",
		href: "/cemetery",
		description:
			"A modal dialog that interrupts the user with important content and expects a response.",
	},
	{
		title: "水子供養",
		href: "/cemetery",
		description:
			"A modal dialog that interrupts the user with important content and expects a response.",
	},
	{
		title: "一般墓地 (檀家様)",
		href: "/cemetery",
		description:
			"A modal dialog that interrupts the user with important content and expects a response.",
	},
];

export default function NavigationMenuDemo() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>頼光寺について</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
							{components.map((component) => (
								<ListItem
									key={component.title}
									title={component.title}
									href={component.href}
								>
									{component.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/events" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							行事案内
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>奉仕 (サービス)</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
							{components2.map((component) => (
								<ListItem
									key={component.title}
									title={component.title}
									href={component.href}
								>
									{component.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<NavigationMenuTrigger>墓地の案内</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
							{components3.map((component) => (
								<ListItem
									key={component.title}
									title={component.title}
									href={component.href}
								>
									{component.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<Link href="/access" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							アクセス
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<Link href="/contact" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							お問合せ
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className,
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";
