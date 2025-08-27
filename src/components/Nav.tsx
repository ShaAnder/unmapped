import { useRef, useEffect } from "react";
import styles from "../assets/css/Nav.module.css";
import type { NavLink } from "../types/domain/navigation";

type NavProps = {
	links: NavLink[];
};

export const Nav = ({ links }: NavProps) => {
	// set up our refs
	const btnRef = useRef<HTMLButtonElement>(null);
	const linksRef = useRef<HTMLUListElement>(null);

	// use effect to check current refs
	useEffect(() => {
		const btn = btnRef.current;
		const links = linksRef.current;
		// if no btn or links guard with early return
		if (!btn || !links) return;

		// on click handler to check for "show-links" and toggles if found / not found, also adds semantic aria tags
		const onToggle = () => {
			const showClass = styles["show-links"];
			const nextOpen = !links.classList.contains(showClass);
			links.classList.toggle(showClass);
			btn.setAttribute("aria-expanded", String(nextOpen));
		};

		// close menu when a link is clicked
		const onLinkClick = () => {
			const showClass = styles["show-links"];
			links.classList.remove(showClass);
			btn.setAttribute("aria-expanded", "false");
		};

		// add event listeners
		btn.addEventListener("click", onToggle);

		// add click listeners to all nav links
		const navLinks = links.querySelectorAll("a");
		navLinks.forEach((link) => {
			link.addEventListener("click", onLinkClick);
		});

		// cleanup function
		return () => {
			btn.removeEventListener("click", onToggle);
			navLinks.forEach((link) => {
				link.removeEventListener("click", onLinkClick);
			});
		};
	}, []);

	// nav jsx
	return (
		<>
			<nav className={styles.navbar}>
				<div className={styles["nav-center"]}>
					<div className={styles["nav-header"]}>
						<a
							href="#home"
							className={styles["nav-logo"]}
							aria-label="unMapped - Return to homepage"
						>
							<span className={styles["nav-logo-un"]}>un</span>
							<span className={styles["nav-logo-mapped"]}>Mapped</span>
						</a>
						<button
							ref={btnRef}
							type="button"
							className={styles["nav-toggle"]}
							aria-controls="nav-links"
							aria-expanded="false"
							aria-label="Toggle navigation menu"
						>
							<i className="fas fa-bars"></i>
						</button>
					</div>
					<ul ref={linksRef} className={styles["nav-links"]} id="nav-links">
						{links.map((link) => (
							<li key={link.id}>
								<a href={link.href} className={styles["nav-link"]}>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</div>
			</nav>
		</>
	);
};
