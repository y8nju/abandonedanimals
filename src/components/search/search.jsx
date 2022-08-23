import { useEffect, useRef } from "react";
import './search.css'
function Search({onSearch, uprCd}) {
    const bgnde = useRef();
    const endde = useRef();
    const upr_cd = useRef();
    useEffect(() => {
        const today = new Date().toISOString().slice(0, 10);
        endde.current.value = today
    }, [])
    const searchHandle = (event) =>{
        event.preventDefault();
        console.log()
        onSearch(
            bgnde.current.value.replaceAll("-",""), 
            endde.current.value.replaceAll("-",""),
            upr_cd.current.value ? upr_cd.current.value: 6290000
            );
    };
    return ( <div className="serchBar">
        <form onSubmit={searchHandle}>
            <select ref={upr_cd}>
                {uprCd.map(code => {
                    return (<option value={code.orgCd} key={code.orgCd} >{code.orgdownNm}</option>)
                })}
            </select>
            <input type="date" ref={bgnde} /> ~ <input type="date" ref={endde} /> <button type="submit">검색</button>
        </form>
    </div> );
}

export default Search;