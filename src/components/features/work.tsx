import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Work() {
	return (
		<div id="work" className="flex flex-col w-full h-screen justify-center items-center text-center font-code relative">
			<div className="text-6xl md:text-8xl font-bold -mt-20">WORK</div>
			<div className="absolute bottom-20 text-slate-500 hover:text-slate-800 dark:hover:text-slate-100 transition">
				<Link href="#experience">
					<FontAwesomeIcon icon={faArrowDown} size="2xl" />
				</Link>
			</div>
		</div>
	);
}
