import React, {useState, useEffect} from 'react';
import './App.css';
import Buscador from './components/Buscador';
import Imgs from './components/Imgs';
import Paginacion from './components/Paginacion';

function App() {
	const [buscar, setBuscar] = useState('');
	const [img, setImg] = useState([]);
	const [pag, setPag] = useState(1);

	function consultarApi() {
		fetch(
			`https://pixabay.com/api/?key=17524305-24102e0e160309fe6df6f43db&q=${buscar}&per_page=20&page=${pag}`,
		)
			.then(resp => resp.json())
			.then(json => {
				if (json.hits) {
					setImg(json.hits);
				} else {
					return <p style={'color: white'}>Imagen no encontrada</p>;
				}
			});
	}

	function search(buscar) {
		setBuscar(buscar);
		setPag(1);
	}

	const paginaAnterior = () => {
		if (pag === 1) return null;
		setPag(pag - 1);
		document.querySelector('#nav').scrollIntoView({block: 'start', behavior: 'smooth'});
	};

	const paginaSiguiente = () => {
		setPag(pag + 1);
		document.querySelector('#nav').scrollIntoView({block: 'end', behavior: 'smooth'});
	};

	useEffect(() => {
		consultarApi();
	}, [buscar, pag]);

	return (
		<div className="App">
			<Buscador onSearch={search} />
			<Imgs img={img} />
			<Paginacion paginaAnterior={paginaAnterior} paginaSiguiente={paginaSiguiente} />
		</div>
	);
}

export default App;
