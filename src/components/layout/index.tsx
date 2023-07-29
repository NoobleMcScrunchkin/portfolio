import { Metadata } from "next";
import Head from "next/head";
import { ReactNode } from "react";
import DesktopHeader from "@/components/layout/desktop/header";
import DesktopFooter from "@/components/layout/desktop/footer";
import MobileHeader from "@/components/layout/mobile/header";
import MobileFooter from "@/components/layout/mobile/footer";

interface LayoutProps {
	children: ReactNode;
}

export const metadata: Metadata = {
	title: "Riley Aslett",
	description: "Riley Aslett - Portfolio",
};

export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<Head>
				<title>Riley Aslett</title>
			</Head>
			<div className="w-full min-h-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white flex flex-col">
				<DesktopHeader />
				<MobileHeader />
				<main className="mt-20 flex flex-col w-full grow">{children}</main>
				<DesktopFooter />
				<MobileFooter />
			</div>
		</>
	);
}
