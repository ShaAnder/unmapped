import type { ServiceData } from "../types/domain/service";

export const services: ServiceData[] = [
	{
		id: "route-planning",
		title: "Route Planning",
		description:
			"Custom-designed scenic routes that connect hidden gems, local favorites, and breathtaking viewpoints. Our experienced guides research every mile to ensure you discover the road less traveled.",
		icon: "fas fa-map",
	},
	{
		id: "wildlife-tracking",
		title: "Wildlife Tracking",
		description:
			"Expert-led wildlife observation experiences in pristine habitats. Learn to identify tracks, calls, and behaviors while maintaining respectful distance from nature's inhabitants.",
		icon: "fas fa-paw",
	},
	{
		id: "backcountry-camping",
		title: "Backcountry Camping",
		description:
			"Leave-no-trace camping in remote locations with minimal impact. We provide lightweight gear recommendations and teach sustainable practices for overnight wilderness adventures.",
		icon: "fas fa-campground",
	},
	{
		id: "trail-navigation",
		title: "Trail Navigation",
		description:
			"Master the art of reading terrain, using compass and map, and understanding natural landmarks. Build confidence to explore safely beyond marked paths and discover untouched landscapes.",
		icon: "fas fa-compass",
	},
	{
		id: "nature-photography",
		title: "Nature Photography",
		description:
			"Capture stunning landscapes and wildlife through expert guidance on composition, lighting, and ethical photography practices. Perfect your skills while preserving the moment forever.",
		icon: "fas fa-camera",
	},
	{
		id: "conservation-education",
		title: "Conservation Education",
		description:
			"Learn about local ecosystems, conservation efforts, and how to be a responsible outdoor enthusiast. Understand the delicate balance of nature and your role in protecting it.",
		icon: "fas fa-leaf",
	},
];
