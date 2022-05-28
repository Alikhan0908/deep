import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

import Slider1 from './../../images/main-slider/slide1.jpg';
import Slider2 from './../../images/main-slider/slide2.jpg';
import Slider3 from './../../images/main-slider/slide3.jpg';


function SampleNextArrow(props) {
	const { onClick } = props;
	return (
		<div className="owl-nav">
			<div className="owl-next la la-angle-right" onClick={onClick} />
		</div>
	);
}

function SamplePrevArrow(props) {
	const { onClick } = props;
	return (
		<div className="owl-nav">
			<div className=" owl-prev la la-angle-left" onClick={onClick} style={{ zIndex: 1 }} />
		</div>
	);
}

class HomeOwlSlider extends Component {

	render() {
		var settings = {
			arrows: true,
			dots: true,
			slidesToShow: 1,
			infinite: true,
			autoplay: true,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 1,

					}
				},
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 1,

					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,

					}
				}
			]
		};
		return (

			<Slider className="owl-slider owl-carousel owl-theme owl-none" {...settings}>
				<div className="item slide-item">
					<div className="slide-item-img"><img src={Slider1} className="w-100" alt="" /></div>
					<div className="slide-content overlay-primary">
						<div className="slide-content-box container">
							<div className="max-w600 text-white">
								<h2 className="text-white font-weight-400">SMM (Social Media Marketing)<br /> Biznesingiz ijtimoiy tarmoqda mavjudmi ? <br /></h2>
								<p>Ijtimoiy tarmoqda biznesingizni ommaga taniting</p>
								<Link to={"#"} className="site-button m-r10 white button-lg">Tezkor Start...</Link>

							</div>
						</div>
					</div>
				</div>
				<div className="item slide-item">
					<div className="slide-item-img"><img src={Slider3} className="w-100" alt="" /></div>
					<div className="slide-content overlay-primary">
						<div className="slide-content-box container">
							<div className="max-w600 text-white">
								<h2 className="text-white font-weight-400">Mobil ilova yaratish xizmatlari...<br />Biznesingizni mobil ilovalar orqali rivojlantirish haqida o'ylab ko'rganmisiz ?<br /></h2>
								<p>G'oyalaringizni mobil ilovalar yordamida real daromadga aylantiring !</p>
								<Link to={"#"} className="site-button m-r10 white button-lg">Tezkor Start...</Link>

							</div>
						</div>
					</div>
				</div>
				<div className="item slide-item">
					<div className="slide-item-img"><img src={Slider2} className="w-100" alt="" /></div>
					<div className="slide-content overlay-primary">
						<div className="slide-content-box container">
							<div className="max-w600 text-white">
								<h2 className="text-white font-weight-400">Web sayt yaratish xizmatlari...<br />Shaxsiy yoki Biznes web sahifalar zamon talabi !</h2>
								<p>Web Saytga ega bo'lish bilan biznesingizni kiyingi bosqishga olib chiqing !</p>
								<Link to={"#"} className="site-button m-r10 white button-lg">Tezkor Start...</Link>

							</div>
						</div>
					</div>
				</div>
			</Slider>
		)

	}

}

export default HomeOwlSlider;