import { BodyContent } from "./components/BodyContent";
import { Button } from "./components/Buttons";
import { dataButtons } from "./dataButtons";

const App = () => (
	<BodyContent>
		<div className="mx-auto max-w-[80ch] py-8 px-4 text-center lg:py-16">
			<h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
				Javier Molines
			</h1>
			<p className="mb-8 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 lg:px-48">
				Links of interest
			</p>
			<div className="flex flex-col flex-wrap space-y-4 sm:flex-row sm:justify-center gap-5 sm:space-y-0">
				{dataButtons.map(({ id, title, link }, index) => {
					return (
						<Button
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={index}
							id={id}
							title={title}
							link={link}
						/>
					);
				})}
			</div>
		</div>
	</BodyContent>
);

export default App;
