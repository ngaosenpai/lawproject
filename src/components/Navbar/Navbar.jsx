import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'

function Navbar(props){

	const [show, setShow] = useState(false)

	const handleClickIcon = () => {
		
		let temp = show ? false : true
		console.log(temp);

		setShow(temp)
	}

	return (

			<nav className="navbar">

				<span className="navbar__logo">
					<Link to="/" className="logo-link  " >Brand</Link>
				</span>

				{/* nav for mobile */}
				<div className="navbar__sub-menu">

					<div className="nav--mobi">
						<span 
							className={ `nav--mobi__icon ${show ? 'icon-active' : ''}` }
							onClick={handleClickIcon} 
						>
							<img src="./icons/navmenu.svg" alt=""/>
						</span>
						<div className = { `nav--mobi__menu ${show ? "show" : "unshow"}` } >

							<ul className="menu--mobi">
								<li className="menu--mobi__item">
									<Link className="nav-link" to="/">Home</Link>
								</li>
								<li className="menu--mobi__item">
									<Link className="nav-link" to="/">Home</Link>
								</li>
								<li className="menu--mobi__item">
									<Link className="nav-link" to="/">Home</Link>
								</li>
								<li className="menu--mobi__item">
									<Link className="nav-link" to="/">Home</Link>
								</li>
								
							</ul>

						</div>	

					</div>

				</div>

				{/* nav for desktop */}
				<div className="navbar__main-menu">
					
					<ul className="nav--pc">
						<li className="nav--pc__item">
							<Link className="nav-link" to="/">Home</Link>
						</li>
						<li className="nav--pc__item">
							<Link className="nav-link" to="/">Home</Link>
						</li>
						<li className="nav--pc__item">
							<Link className="nav-link" to="/">Home</Link>
						</li>
						<li className="nav--pc__item">
							<Link className="nav-link" to="/">Home</Link>
						</li>
						
					</ul>

				</div>

				<div 
					className={`navbar__background ${show ? "show" : "unshow"} `}
					onClick={ handleClickIcon }
				></div>
			</nav>
	
	)
}

export default Navbar