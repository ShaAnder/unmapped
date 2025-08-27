import style from "../assets/css/Services.module.scss";
import type { ServiceData } from "../types/domain/service";

type Props = { items: ServiceData[] };

export const Services = ({ items }: Props) => {
	const halfLength = Math.ceil(items.length / 2);
	const mobileItems = items.slice(0, halfLength);

	return (
		<section className="section services" id="services">
			<div className="section-title">
				<h2>
					our <span>services</span>
				</h2>
			</div>
			<div className={["section-center", style["services-center"]].join(" ")}>
				{/* Show all items on desktop */}
				<div className={style["desktop-services"]}>
					{items.map((service) => (
						<article key={service.id} className={style.service}>
							<span className={style["service-icon"]} aria-hidden="true">
								<i className={`${service.icon} fa-fw`}></i>
							</span>
							<div className={style["service-info"]}>
								<h4 className={style["service-title"]}>{service.title}</h4>
								<p className={style["service-text"]}>{service.description}</p>
							</div>
						</article>
					))}
				</div>

				{/* Show limited items on mobile */}
				<div className={style["mobile-services"]}>
					{mobileItems.map((service) => (
						<article key={service.id} className={style.service}>
							<span className={style["service-icon"]} aria-hidden="true">
								<i className={`${service.icon} fa-fw`}></i>
							</span>
							<div className={style["service-info"]}>
								<h4 className={style["service-title"]}>{service.title}</h4>
								<p className={style["service-text"]}>{service.description}</p>
							</div>
						</article>
					))}
					<div className={style["see-more"]}>
						<a href="#services" className={style["see-more-link"]}>
							see more services
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};
