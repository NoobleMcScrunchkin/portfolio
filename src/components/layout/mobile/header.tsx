import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function MobileHeader() {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<>
			<div className="w-full h-20 flex flex-row font-code md:hidden p-4 fixed bg-slate-100 dark:bg-slate-800 z-10">
				<div className="flex flex-col justify-center text-2xl">
					<Link href="/#home">
						<span className="font-bold">Riley</span>
						<span className="text-slate-500 text-sm">Aslett</span>
					</Link>
				</div>
				<div className="grow"></div>
				<div className="flex flex-col justify-center text-xl">
					<FontAwesomeIcon icon={faBars} onClick={toggleMenu} />
				</div>
			</div>

			<div className={`md:hidden block fixed left-full ${menuOpen ? "-translate-x-full" : ""} transition-all w-screen h-screen bg-slate-200 dark:bg-slate-900 flex flex-col z-10`}>
				<div className="w-full h-20 font-code md:hidden p-4 flex flex-row">
					<div className="flex flex-col justify-center text-2xl">
						<Link href="/#home" onClick={toggleMenu}>
							<span className="font-bold">Riley</span>
							<span className="text-slate-500 text-sm">Aslett</span>
						</Link>
					</div>
					<div className="grow"></div>
					<div className="flex flex-col justify-center text-xl">
						<FontAwesomeIcon icon={faClose} onClick={toggleMenu} />
					</div>
				</div>
				<div className="flex flex-col gap-6 p-4 justify-center text-slate-500 text-lg">
					<div className="flex flex-col justify-center">
						<Link href="/#home" className="dark:hover:text-white hover:text-slate-800 transition-all" onClick={toggleMenu}>
							{"//"} home
						</Link>
					</div>
					<div className="flex flex-col justify-center">
						<Link href="/#expertise" className="dark:hover:text-white hover:text-slate-800 transition-all" onClick={toggleMenu}>
							{"//"} expertise
						</Link>
					</div>
					<div className="flex flex-col justify-center">
						<Link href="/#work" className="dark:hover:text-white hover:text-slate-800 transition-all" onClick={toggleMenu}>
							{"//"} work
						</Link>
					</div>
					<div className="flex flex-col justify-center">
						<Link href="/#experience" className="dark:hover:text-white hover:text-slate-800 transition-all" onClick={toggleMenu}>
							{"//"} experience
						</Link>
					</div>
					<div className="flex flex-col justify-center">
						<Link href="/#contact" className="dark:hover:text-white hover:text-slate-800 transition-all" onClick={toggleMenu}>
							{"//"} contact
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
