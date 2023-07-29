import Layout from "@/components/layout/";
import Title from "@/components/features/title";
import Expertise from "@/components/features/expertise";
import Work from "@/components/features/work";
import CV from "@/components/features/cv";
import Contact from "@/components/features/contact";

export default function Home() {
	return (
		<Layout>
			<Title />
			<Expertise />
			<Work />
			<CV />
			<Contact />
		</Layout>
	);
}
