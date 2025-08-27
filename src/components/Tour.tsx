import style from "../assets/css/Tours.module.css";
import type { TourData } from "../types/domain/tour";

type Props = { tour: TourData };

export function Tour({ tour }: Props) {
	return (
		<article className={style["tour-card"]}>
			<div className={style["tour-img-container"]}>
				<img src={tour.image} className={style["tour-img"]} alt={tour.title} />
				<p className={style["tour-date"]}>{tour.date}</p>
			</div>

			<div className={style["tour-info"]}>
				<div className={style["tour-title"]}>
					<h4>{tour.title}</h4>
				</div>
				<div className={style["tour-footer"]}>
					<p>
						<span>
							<i className="fas fa-map"></i>
						</span>
						{tour.location}
					</p>
					<p>{tour.days}</p>
					<p>{tour.price}</p>
				</div>
			</div>
		</article>
	);
}
