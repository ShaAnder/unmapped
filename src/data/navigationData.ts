import type { NavLink, SocialLink } from "../types/domain/navigation";

export const navLinks: NavLink[] = [
	{ id: "home", href: "#home", label: "home" },
	{ id: "about", href: "#about", label: "about" },
	{ id: "services", href: "#services", label: "services" },
	{ id: "tours", href: "#tours", label: "tours" },
];

export const socialLinks: SocialLink[] = [
	{
		platform: "facebook",
		url: "https://facebook.com/unmapped",
		icon: "fab fa-facebook",
		label: "Follow us on Facebook",
	},
	{
		platform: "twitter",
		url: "https://twitter.com/unmapped",
		icon: "fab fa-twitter",
		label: "Follow us on Twitter",
	},
	{
		platform: "instagram",
		url: "https://instagram.com/unmapped",
		icon: "fab fa-instagram",
		label: "Follow us on Instagram",
	},
];
