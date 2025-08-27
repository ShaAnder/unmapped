import style from "../assets/css/About.module.scss";
import about from "../assets/images/about.jpeg";

export const About = () => {
	return (
		<>
			<section className="section" id="about">
				<div className="section-title">
					<h2>
						about <span>us</span>
					</h2>
				</div>

				<div className={["section-center", style["about-center"]].join(" ")}>
					<div className={style["about-img"]}>
						<img
							src={about}
							className={style["about-photo"]}
							alt="awesome beach"
						/>
					</div>
					<article className={style["about-info"]}>
						<h3>explore the difference</h3>
						<p>
							unMapped is a nature‑first, scenic tour service designed to slow
							you down and draw you in. We stitch together quiet forest byways,
							misty overlooks, and hidden river bends into a curated journey
							that rewards curiosity. Think sunrise trailheads, picnic pull‑offs
							you won’t find on billboards, and small towns where maps give way
							to local stories.
						</p>
						<p>
							Our routes favor low‑impact travel and seasonal
							highlights—wildflower corridors in spring, cool canopy drives in
							summer, fiery ridgelines in fall. With clear waypoints, optional
							detours, and safety notes, unMapped helps you roam confidently
							while leaving room for serendipity. Pack light, tread softly, and
							let the landscape set the pace.
						</p>
						<a href="#" className={style.btn}>
							read more
						</a>
					</article>
				</div>
			</section>
		</>
	);
};
