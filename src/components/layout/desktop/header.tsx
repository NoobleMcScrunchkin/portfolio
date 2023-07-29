import Link from "next/link";

export default function DesktopHeader() {
	return (
		<nav className="w-full h-20 md:grid grid-cols-[20%,1fr,20%] font-code hidden fixed bg-slate-100 dark:bg-slate-800 z-10">
			<div className="flex flex-col justify-center px-4 text-2xl">
				<Link href="/#home">
					<span className="font-bold">Riley</span>
					<span className="text-slate-500 text-sm">Aslett</span>
				</Link>
			</div>
			<div className="flex flex-row gap-6 justify-center text-slate-500">
				<div className="flex flex-col justify-center">
					<Link href="/#home" className="dark:hover:text-white hover:text-slate-800 transition-all">
						{"//"} home
					</Link>
				</div>
				<div className="flex flex-col justify-center">
					<Link href="/#expertise" className="dark:hover:text-white hover:text-slate-800 transition-all">
						{"//"} expertise
					</Link>
				</div>
				<div className="flex flex-col justify-center">
					<Link href="/#work" className="dark:hover:text-white hover:text-slate-800 transition-all">
						{"//"} work
					</Link>
				</div>
				<div className="flex flex-col justify-center">
					<Link href="/#experience" className="dark:hover:text-white hover:text-slate-800 transition-all">
						{"//"} experience
					</Link>
				</div>
				<div className="flex flex-col justify-center">
					<Link href="/#contact" className="dark:hover:text-white hover:text-slate-800 transition-all">
						{"//"} contact
					</Link>
				</div>
			</div>
			<div></div>
		</nav>
	);
}
