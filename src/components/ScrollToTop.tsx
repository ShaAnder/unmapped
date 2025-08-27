import { useState, useEffect } from "react";
import styles from "../assets/css/ScrollToTop.module.scss";

export function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			// Show button when user scrolls past the hero section (roughly 100vh)
			if (window.pageYOffset > window.innerHeight) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<button
			className={`${styles.scrollToTop} ${isVisible ? styles.visible : ""}`}
			onClick={scrollToTop}
			aria-label="Scroll to top"
			type="button"
		>
			<i className="fas fa-chevron-up" />
		</button>
	);
}
