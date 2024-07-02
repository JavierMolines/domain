import { Icon } from "./icons/icon";

const Button = ({ id, title, link }: ButtonProps) => {
	let className = "";

	switch (id) {
		case "000":
			className =
				"inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#47476b] hover:bg-[#3d3d5c]";
			break;
		case "001":
			className =
				"inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#b30047] hover:bg-[#99003d]";
			break;
		case "002":
			className =
				"inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#008000] hover:bg-[#006600]";
			break;
		case "003":
			className =
				"inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#ff3300] hover:bg-[#cc2900]";
			break;
	}

	return (
		<a href={link} className={className}>
			{title}
			<Icon />
		</a>
	);
};

export { Button };
