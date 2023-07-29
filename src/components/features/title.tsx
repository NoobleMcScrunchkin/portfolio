import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Title() {
	return (
		<div id="home" className="flex flex-col w-full h-screen justify-center items-center text-center font-code relative -mt-20">
			<div className="text-8xl font-bold -mt-20">RILEY ASLETT</div>
			<div className="mt-4 text-xl">FULL STACK SOFTWARE DEVELOPER</div>
			<div className="absolute bottom-20 text-slate-500 hover:text-slate-800 dark:hover:text-slate-100 transition">
				<Link href="#expertise">
					<FontAwesomeIcon icon={faArrowDown} size="2xl" />
				</Link>
			</div>
		</div>
	);
}
