import { BodyContent } from "./components/BodyContent";
import { Button } from "./components/Buttons";
import { dataButtons } from "./dataButtons";

const App = () => (
	<BodyContent>
		<div className="py-8 px-4 mx-auto max-w-[80ch] text-center lg:py-16">
			<h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
				Javier Molines
			</h1>
			<p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
				Links of interest
			</p>
			<div className="flex flex-col flex-wrap space-y-4 sm:flex-row sm:justify-center gap-5 sm:space-y-0">
				{dataButtons.map(({ title, link, color, hoverColor }, index) => {
					return (
						<Button
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={index}
							title={title}
							link={link}
							hoverColor={hoverColor}
							color={color}
						/>
					);
				})}
			</div>
		</div>
	</BodyContent>
);

export default App;
