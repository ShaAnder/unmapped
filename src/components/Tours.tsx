import style from "../assets/css/Tours.module.scss";
import type { TourData } from "../types/domain/tour";
import { Tour } from "./Tour";

type Props = { items: TourData[] };

export const Tours = ({ items }: Props) => {
	const halfLength = Math.ceil(items.length / 2);
	const mobileTours = items.slice(0, halfLength);

	return (
		<section className="section" id="tours">
			<div className="section-title">
				<h2>
					featured <span>tours</span>
				</h2>
			</div>

			{/* Desktop version - show all tours */}
			<div className={style["desktop-tours"]}>
				<div className={style.grid}>
					{items.map((t) => (
						<Tour key={`${t.title}-${t.date}`} tour={t} />
					))}
				</div>
			</div>

			{/* Mobile version - show limited tours */}
			<div className={style["mobile-tours"]}>
				<div className={style.grid}>
					{mobileTours.map((t) => (
						<Tour key={`${t.title}-${t.date}`} tour={t} />
					))}
				</div>
				<div className={style["see-more"]}>
					<a href="#tours" className={style["see-more-link"]}>
						see more tours
					</a>
				</div>
			</div>
		</section>
	);
};
