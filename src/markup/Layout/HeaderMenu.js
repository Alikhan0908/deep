import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderMenu extends Component {
	render() {
		return (
			<>
				<ul className="nav navbar-nav">
					<li className=""><Link to={'/'}>Deep</Link>
					</li>
					<li><Link to={'./about-1'}>Biz haqimizda </Link>

					</li>
					<li><Link to={'./service'}>Xizmatlarimiz</Link>
					</li>

					<li><Link to={'./portfolio-full-width'}> Portfolio </Link>

					</li>

					<li><Link to={'./short-team'}>Bizning Jamoa </Link>

					</li>
				</ul>
			</>
		)
	}
}
export default HeaderMenu;