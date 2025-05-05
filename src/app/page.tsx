"use client";

import { useEffect } from "react";
import ContactSection from "./sections/Contact";
import HomeSection from "./sections/Home";
import ProjectExampleSection from "./sections/ProjectExample";
import { PAGE_IDS } from "./lib/contants";

export default function Page() {
	useEffect(() => {
		if (!window.location.hash) {
			window.location.replace(`#${PAGE_IDS.home}`);
		}
	}, []);
	return (
		<>
			<HomeSection />
			<ProjectExampleSection />
			<ContactSection />
		</>
	);
}
