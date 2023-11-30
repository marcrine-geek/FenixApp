import React from 'react';
import BookHome from '../../components/BookHome/BookHome';
import Footer from '../../components/Footer/Footer';
import Navbarhome from '../../components/Navbar/Navbarhome';
import About from '../About/About';

const HomePage = () => {
	return (
		<div className='holder'>
			<header className='header'>
				<Navbarhome />
				<div className='header-content flex flex-c text-center text-white'>
					<h1 className='header-title text-capitalize'>
						Data Insights Hub.
					</h1>
					<br />
					<p className='header-text fs-18 fw-3'>
						<h3>This is a Smart Student Progress Analytics App </h3>
						<h2 className='text-capitalize'><b></b></h2>
					</p>
				</div>
			</header>
			<BookHome />
			<About />
			<Footer />
		</div>
	);
};

export default HomePage;
