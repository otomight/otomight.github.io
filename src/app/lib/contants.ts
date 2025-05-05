interface Page {
	id: string;
	name: string;
}

export const PAGES: { [key: string]: Page } = {
	home: {
		id: "home",
		name: "Home"
	},
	contact: {
		id: "contact",
		name: "Contact"
	},
	kappaJourney: {
		id: "kappaJourney",
		name: "Kappa Journey"
	}
}
