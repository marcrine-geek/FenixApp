import { MDBContainer, MDBFooter } from 'mdb-react-ui-kit';
import React from 'react';

export default function App() {
	return (
		<MDBFooter
			className='text-center text-white'
			style={{ backgroundColor: '#953bd5' }}
		>
			<MDBContainer className='p-4 pb-0'>
				<section className=''>
					
				</section>
			</MDBContainer>

			<div
				className='text-center p-3'
				style={{ backgroundColor: '#071952', height: '50px', paddingTop: '15px' }}
			>
				© 2023 Copyright:
				<a className='text-white' href='http://localhost:3000/'>
					fenixhub
				</a>
			</div>
		</MDBFooter>
	);
}
