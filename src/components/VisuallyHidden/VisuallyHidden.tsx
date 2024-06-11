import clsx from "clsx";
import type React from "react";

import styles from "./VisuallyHidden.module.css";

function VisuallyHidden({
	as: Element = "span",
	className,
	children,
	...delegated
}: {
	as?: React.ElementType;
	className?: string;
	children: React.ReactNode;
}) {
	return (
		<Element className={clsx(styles.wrapper, className)} {...delegated}>
			{children}
		</Element>
	);
}

export default VisuallyHidden;
