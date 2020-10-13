import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
	height: 42px;
	width: 120px;
	border-radius: 5px;
	font-size: 1rem;
	border: 2px;
	background-color: #f0b8f0;
	margin: 40px 15px;
	&:hover {
		background-color: #b769b7;
	}
`;

export default function Paginacaion({paginaAnterior, paginaSiguiente}) {
	return (
		<div>
			<Btn onClick={paginaAnterior}>Anterior &larr;</Btn>
			<Btn onClick={paginaSiguiente}>Siguiente &rarr;</Btn>
		</div>
	);
}
