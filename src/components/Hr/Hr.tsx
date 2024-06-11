import { cn } from "@/utils";
import styles from "./Hr.module.css";

function Hr({
	type,
	className,
	...delegated
}: {
	type?: "square";
	className?: string;
}) {
	return <hr className={cn(type && styles[type], className)} {...delegated} />;
}

export default Hr;
