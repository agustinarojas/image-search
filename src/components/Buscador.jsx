import React, {useRef} from 'react';
import styled from 'styled-components';

const Form = styled.form`
	box-sizing: border-box;
	background: rgb(2, 0, 36);
	background: linear-gradient(
		90deg,
		rgba(2, 0, 36, 1) 0%,
		rgba(82, 15, 176, 1) 31%,
		rgba(210, 116, 231, 1) 100%
	);
	height: 180px;
	margin-top: 0;
`;

const H1 = styled.h1`
	font-size: 35px;
	color: white;
	margin: 0;
	padding-top: 20px;
`;

const Div = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Input = styled.input`
	margin: 35px 10px;
	height: 37px;
	width: 390px;
	border-radius: 7px;
	border: 2px;
	font-size: 20px;
	padding-left: 15px;
	&::placeholder {
		font-size: 1rem;
	}
`;

const BtnInput = styled.input`
	height: 42px;
	width: 120px;
	border-radius: 5px;
	font-size: 1rem;
	border: 2px;
	background-color: #f0b8f0;
	&:hover {
		background-color: #b769b7;
	}
`;

export default function Buscador({onSearch}) {
	const inputRef = useRef();

	function handleSubmit(e) {
		e.preventDefault();
		onSearch(inputRef.current.value);
	}
	return (
		<Form id="nav" onSubmit={handleSubmit}>
			<H1>Busca y Descarga Imágenes Gratis</H1>
			<Div>
				<Input ref={inputRef} type="text" placeholder="Buscar imágenes. Ejemplo: café" />
				<BtnInput type="submit" value="Buscar" />
			</Div>
		</Form>
	);
}
