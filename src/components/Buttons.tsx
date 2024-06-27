import { Icon } from "./icons/icon";

const Button = ({ title, link, color, hoverColor }: ButtonProps) => {
	const style = `inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[${color}] hover:bg-[${hoverColor}]`;

	return (
		<a href={link} className={style}>
			{title}
			<Icon />
		</a>
	);
};

export { Button };
