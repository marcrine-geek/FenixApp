import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import analysisImg from '../../images/dih3.jpg';
import './BookHome.css';

//https://covers.openlibrary.org/b/id/240727-S.jpg

const BookHome = () => {
	

	return (
		<section className='booklist'>
			<div className='container'>
				<div className='image-row'>
					<div>
						<div className='analysis-img'>
							<img src={analysisImg} alt='' />
						</div>
						<div>
							<p>Find best results...</p>
						</div>
					</div>

					<div>
						<div className='analysis-img'>
							<img src={analysisImg} alt='' />
						</div>
						<div>
							<p>Find best results...</p>
						</div>
					</div>

					<div>
						<div className='analysis-img'>
							<img src={analysisImg} alt='' />
						</div>
						<div>
							<p>Find best results...</p>
						</div>
					</div>

					<div>
						<div className='analysis-img'>
							<img src={analysisImg} alt='' />
						</div>
						<div>
							<p>Find best results...</p>
						</div>
					</div>
				</div>

				<div className='image-row'>
					<div>
						<div className='analysis-img'>
							<img src={analysisImg} alt='' />
						</div>
						<div>
							<p>Find best results...</p>
						</div>
					</div>

					<div>
						<div className='analysis-img'>
							<img src={analysisImg} alt='' />
						</div>
						<div>
							<p>Find best results...</p>
						</div>
					</div>

					<div>
						<div className='analysis-img'>
							<img src={analysisImg} alt='' />
						</div>
						<div>
							<p>Find best results...</p>
						</div>
					</div>

					<div>
						<div className='analysis-img'>
							<img src={analysisImg} alt='' />
						</div>
						<div>
							<p>Find best results...</p>
						</div>
					</div>
				</div>
				
				
				
				
			</div>
		</section>
	);
};

export default BookHome;
