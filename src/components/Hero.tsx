import styles from "../assets/css/Hero.module.css";

export const Hero = () => {
	return (
		<>
			<section className={styles.hero} id="home">
				<div className={styles["hero-banner"]}>
					<h1>Explore Together</h1>
					<p>
						Join us as we embark on tours across the world exploring the beauty
						and undiscovered harmony of nature and everything it has to offer.
					</p>
					<a href="#tours" className={`btn ${styles["hero-btn"]}`}>
						explore tours
					</a>
				</div>
			</section>
		</>
	);
};
