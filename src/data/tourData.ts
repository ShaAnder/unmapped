import type { TourData } from "../types/domain/tour";

import tibetAdventure from "../assets/images/tibetAdventure.jpeg";
import bestOfJava from "../assets/images/bestOfJava.jpeg";
import alpineWilderness from "../assets/images/alpineWilderness.jpeg";
import kenyaHighlights from "../assets/images/kenyaHighlights.jpeg";
import patagoniaTrek from "../assets/images/patagoniaTrek.jpeg";
import alpineLakesLoop from "../assets/images/alpineLakesLoop.jpeg";

export const tours: TourData[] = [
	{
		title: "Tibet Adventure",
		date: "august 26th, 2025",
		image: tibetAdventure,
		location: "china",
		days: "6 days",
		price: "from $2100",
	},
	{
		title: "best of java",
		date: "october 12th, 2024",
		image: bestOfJava,
		location: "indonesia",
		days: "11 days",
		price: "from $1400",
	},
	{
		title: "alpine wilderness",
		date: "september 15th, 2025",
		image: alpineWilderness,
		location: "new zealand",
		days: "8 days",
		price: "from $3200",
	},
	{
		title: "kenya highlights",
		date: "december 5th, 2024",
		image: kenyaHighlights,
		location: "kenya",
		days: "20 days",
		price: "from $3300",
	},
	// New tours
	{
		title: "patagonia trek",
		date: "november 3rd, 2025",
		image: patagoniaTrek,
		location: "argentina • chile",
		days: "9 days",
		price: "from $2900",
	},
	{
		title: "alpine lakes loop",
		date: "july 18th, 2024",
		image: alpineLakesLoop,
		location: "switzerland",
		days: "7 days",
		price: "from $2600",
	},
];
