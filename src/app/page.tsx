"use client";

import { useEffect } from "react";
import ContactSection from "./sections/Contact";
import HomeSection from "./sections/Home";
import ProjectExampleSection from "./sections/KappaJourney";
import { PAGES } from "./lib/contants";

export default function Page() {
	useEffect(() => {
		if (!window.location.hash) {
			window.location.replace(`#${PAGES.home.id}`);
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
