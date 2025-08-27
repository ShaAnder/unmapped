import { useRef, useEffect } from "react";
import styles from "../assets/css/Nav.module.css";

import logo from "../assets/images/logo.png";

// strongly typed guarded navbar

export const Nav = () => {
	// set up our refs
	const btnRef = useRef<HTMLButtonElement>(null);
	const linksRef = useRef<HTMLElement>(null);

	// use effect to check current refs
	useEffect(() => {
		const btn = btnRef.current;
		const links = linksRef.current;
		// if no btn or links guard with early return
		if (!btn || !links) return;

		// on click handler to check for "show-links" and toggles if found / not found, also adds semantic aria tags
		const onClick = () => {
			const showClass = styles.showLinks;
			const nextOpen = !links.classList.contains(showClass);
			links.classList.toggle(showClass);
			btn.setAttribute("aria-expanded", String(nextOpen));
		};

		// add and remove the event listener as needed
		btn.addEventListener("click", onClick);
		return () => btn.removeEventListener("click", onClick);
	}, []);

	// nav jsx
	return (
		<>
			<nav className={styles.navbar}>
				<div className={styles["nav-center"]}>
					<div className={styles["nav-header"]}>
						<img src={logo} className={styles["nav-logo"]} alt="unMapped" />
						<button
							type="button"
							className={styles["nav-toggle"]}
							id={styles["nav-toggle"]}
						>
							<i className="fas fa-bars"></i>
						</button>
					</div>
					<ul className={styles["nav-links"]} id={styles["nav-links"]}>
						<li>
							<a href="#home" className={styles["nav-link"]}>
								home
							</a>
						</li>

						<li>
							<a href="#about" className={styles["nav-link"]}>
								about
							</a>
						</li>

						<li>
							<a href="#services" className={styles["nav-link"]}>
								services
							</a>
						</li>

						<li>
							<a href="#tours" className={styles["nav-link"]}>
								tours
							</a>
						</li>
					</ul>

					<ul className={styles["nav-icons"]}>
						<li>
							<a
								href="https://www.twitter.com"
								target="_blank"
								className={styles["nav-icon"]}
							>
								<i className="fab fa-facebook"></i>
							</a>
						</li>
						<li>
							<a
								href="https://www.twitter.com"
								target="_blank"
								className={styles["nav-icon"]}
							>
								<i className="fab fa-twitter"></i>
							</a>
						</li>
						<li>
							<a
								href="https://www.twitter.com"
								target="_blank"
								className={styles["nav-icon"]}
							>
								<i className="fab fa-squarespace"></i>
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};
