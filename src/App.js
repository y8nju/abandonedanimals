import { useEffect, useState } from 'react';
import List from './components/list/list'
import Detail from './components/detail/detail';
import Search from './components/search/search';
import './App.css';
import Loading from './loading';

function App() {
	document.title = '유기동물 조회 서비스'
	const [pets, setPets] = useState([]);
	const [uprCd, setUprCd] = useState([]);
	const [selected, setSelected] = useState();
	const [loading, setLoading] =useState(true);
	const handleSelected = (data) => {
		setSelected(data);
	}

	useEffect(() => {
		setLoading(true);
		const key = process.env.REACT_APP_API_KEY;
		fetch(`https://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=${key}&_type=json&numOfRows=30`)
			.then(response => response.json())
			.then(json => {
			setPets(json.response.body.items.item);
			setLoading(false);
			})
			.catch(e => {
			console.log(e);
			});

		fetch(`https://apis.data.go.kr/1543061/abandonmentPublicSrvc/sido?numOfRows=17&serviceKey=${key}&_type=json`)
		.then(response => response.json())
		.then(json => {
			setUprCd(json.response.body.items.item);
			setLoading(false);
		})
		.catch(e => {
			console.log(e);
		});
		}, []);
	
	const handleSearch = (bgnde, endde, upr_cd) =>{
		const key = process.env.REACT_APP_API_KEY;
		
		fetch(`https://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=${key}&_type=json&numOfRows=30&bgnde=${bgnde}&endde=${endde}&upr_cd=${upr_cd}`)
			.then(response => response.json())
			.then(json => {
			setPets(json.response.body.items.item);
			setSelected(null);
			setLoading(false);
			})
			.catch(e => {
				console.log(e);
			});
		}
		console.log(loading);
	return (
		<div className="App">
			{loading? <Loading /> : null}
			<Search onSearch={handleSearch} uprCd={uprCd}/>

			<section className="container">
				{selected ? <Detail target={selected}/> : <></> }
				<List pets={pets} onSelected={handleSelected} selected={selected}/>
			</section>
		</div>
	);
}

export default App;
