import './item.css'
function Item({data, onSelected, selected}) { // props.data를 받아올거임
    let sel = data == selected ? true :false;
    return (<div className="item" id={sel ? 'selected' : 'unselected'} onClick={()=> onSelected(data) }>
        <img src={data.filename} alt={data.desertionNo + ' thumbnail'} className='thumbnail' />
        <div className='infrom'>
            <h4 className="noticeNo">{data.noticeNo}</h4>
            <p>{data.kindCd} ({data.colorCd})</p>
            <p>{data.orgNm} {data.happenPlace}</p>
        </div>
    </div>);
}

export default Item;
