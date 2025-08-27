import style from "../assets/css/Footer.module.css";
import type { NavLink, SocialLink } from "../types/domain/navigation";

type FooterProps = {
	links: NavLink[];
	socialLinks: SocialLink[];
};

export const Footer = ({ links, socialLinks }: FooterProps) => {
	return (
		<footer className={`section ${style.footer}`}>
			<ul className={style["footer-links"]}>
				{links.map((link) => (
					<li key={link.id}>
						<a href={link.href} className={style["footer-link"]}>
							{link.label}
						</a>
					</li>
				))}
			</ul>
			<ul className={style["footer-icons"]}>
				{socialLinks.map((social) => (
					<li key={social.platform}>
						<a
							href={social.url}
							target="_blank"
							rel="noopener noreferrer"
							className={style["footer-icon"]}
							aria-label={social.label}
						>
							<i className={social.icon}></i>
						</a>
					</li>
				))}
			</ul>
			<p className={style.copyright}>
				copyright &copy; unMapped
				<span id="date"></span> all rights reserved
			</p>
		</footer>
	);
};
