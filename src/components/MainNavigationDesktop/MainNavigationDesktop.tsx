import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/utils";
import React from "react";

function MainNavigationDesktop({
	items,
	segment,
}: {
	items: {
		title: string;
		href: string;
		subMenu?: { title: string; href: string }[];
	}[];
	segment: string | null;
}) {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				{items.map((item) => (
					<NavigationMenuItem key={crypto.randomUUID()}>
						{item.subMenu ? (
							<>
								<NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[400px] gap-3 p-4 text-sm md:w-[26em] md:grid-cols-2">
										{item.subMenu.map((subItem) => (
											<ListItem
												key={crypto.randomUUID()}
												title={subItem.title}
												href={subItem.href}
											/>
										))}
									</ul>
								</NavigationMenuContent>
							</>
						) : (
							<ListItem title={item.title} href={item.href} segment={segment} />
						)}
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
}

export default MainNavigationDesktop;

type ListItemProps = React.ComponentPropsWithoutRef<"a"> & {
	segment?: string | null;
	className?: string;
	title: string;
};

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
	({ segment, className, title, ...props }, ref) => {
		return (
			<>
				<NavigationMenuLink asChild>
					<a
						ref={ref}
						className={cn(
							segment === props.href && "font-bold",
							"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors" +
								" hover:bg-primary-100 hover:text-accent-foreground focus:bg-primary-100 focus:text-accent-foreground",
							className,
						)}
						{...props}
					>
						{title}
					</a>
				</NavigationMenuLink>
			</>
		);
	},
);
ListItem.displayName = "ListItem";
