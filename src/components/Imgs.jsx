import React from 'react';
import Img from './Img';
import styled from 'styled-components';

const Container = styled.div`
	display: grid;
	width: 80%;
	grid-template-columns: repeat(4, 1fr);
	gap: 25px;
	margin-left: 10%;
	margin-right: 10%;
	margin-top: 50px;
`;

function Imgs({img}) {
	return (
		<Container>
			{img &&
				img.map(el => (
					<Img
						previewURL={el.previewURL}
						likes={el.likes}
						tags={el.tags}
						largeURL={el.largeImageURL}
						views={el.views}
						key={el.id}
					/>
				))}
		</Container>
	);
}

export default Imgs;
