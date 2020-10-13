import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
	height: 350px;
	border-style: dotted;
	border-width: 2px;
	border-color: #2f1234;
`;

const Imagen = styled.img`
	height: 180px;
	width: 98%;
	margin-top: 1%;
`;
const Texto = styled.div`
	box-sizing: border-box;
	padding: 3px 25px;
`;
const Txt = styled.p`
	display: flex;
	align-items: center;
	justify-content: center;
	color: #ffe0ff;
	margin-top: 8px;
`;

const Ucode = styled.span`
	margin-right: 10px;
	font-size: 30px;
	color: #6a0a63;
`;

const A = styled.a`
	text-decoration: none;
	color: #f0b8f0;
	background-color: #792675;
	border-radius: 5px;
	border-top: 4px solid #792675;
	display: block;
	height: 30px;
	&:hover {
		background-color: #a0499c;
		border-top: 4px solid #a0499c;
	}
`;

function Img({previewURL, largeURL, tags, views, likes, id}) {
	return (
		<Div>
			<Imagen src={previewURL} alt={tags} />
			<Texto>
				<Txt>
					<Ucode role="img" aria-label="heart">
						&#9829;
					</Ucode>
					{likes} Me gusta
				</Txt>
				<Txt>
					<Ucode role="img" aria-label="eye">
						&#128065;
					</Ucode>
					{views} Vistas
				</Txt>
				<A href={largeURL} target="_blank">
					Ver imagen
				</A>
			</Texto>
		</Div>
	);
}

export default Img;
