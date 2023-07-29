import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faBook, faCode, faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Expertise() {
	return (
		<div id="expertise" className="flex flex-col w-full items-center font-code relative pt-48 p-8">
			<div className="text-6xl md:text-8xl font-bold -mt-20">Expertise</div>
			<div className="border border-slate-500 grid md:grid-cols-2 w-full mt-12 max-w-7xl">
				<div className="border border-slate-500 p-6 flex flex-col">
					<div className="flex flex-row gap-2 items-center font-bold mb-2">
						<FontAwesomeIcon className="aspect-square" icon={faCode} size="3x" />
						<div className="ml-2 text-2xl">
							Software
							<br />
							Development
						</div>
					</div>
					<div className="ml-6 text-slate-500">
						{"/*"}
						<div className="pl-4 ml-2 border-l-2 border-dashed border-slate-500">Proficient in functional and object oriented programming: Javascript, Typescript, Python, Java, PHP, and learning Rust.</div>
						{"*/"}
					</div>
				</div>
				<div className="border border-slate-500 p-6 flex flex-col">
					<div className="flex flex-row gap-2 items-center  font-bold mb-2">
						<FontAwesomeIcon className="aspect-square" icon={faReact} size="3x" />
						<div className="ml-2 text-2xl">
							Frontend
							<br />
							Development
						</div>
					</div>
					<div className="ml-6 text-slate-500">
						{"/*"}
						<div className="pl-4 ml-2 border-l-2 border-dashed border-slate-500">Highly passionate and love being involved in UI/UX design. Plenty of experience in HTML, CSS, JS, Laravel, React and other JS frameworks.</div>
						{"*/"}
					</div>
				</div>
				<div className="border border-slate-500 p-6 flex flex-col">
					<div className="flex flex-row gap-2 items-center  font-bold mb-2">
						<FontAwesomeIcon className="aspect-square" icon={faServer} size="3x" />
						<div className="ml-2 text-2xl">
							Backend
							<br />
							Development
						</div>
					</div>
					<div className="ml-6 text-slate-500">
						{"/*"}
						<div className="pl-4 ml-2 border-l-2 border-dashed border-slate-500">Extensive background using Laravel & Backpack as a backend framework. Lots of experience working with REST and GraphQL APIs as well as creating them.</div>
						{"*/"}
					</div>
				</div>
				<div className="border border-slate-500 p-6 flex flex-col">
					<div className="flex flex-row gap-2 items-center  font-bold mb-2">
						<FontAwesomeIcon className="aspect-square" icon={faBook} size="3x" />
						<div className="ml-2 text-2xl">
							Learning
							<br />
							and Adaptation
						</div>
					</div>
					<div className="ml-6 text-slate-500">
						{"/*"}
						<div className="pl-4 ml-2 border-l-2 border-dashed border-slate-500">Always learning and easily adapting to any situation. Experienced in working with legacy codebases and always learning and testing new technologies.</div>
						{"*/"}
					</div>
				</div>
			</div>
		</div>
	);
}
