import { useEffect, useRef } from "react";
import './detail.css'
function Detail({target, onClose}) {
    const detail =useRef();
	
    useEffect(()=> {
		window.scrollTo({top: 0, behavior: 'smooth'})
    },[target])
   
	return ( <div className="detail" ref={detail}>
		<div className="detailHeader">
			<h1>
				<small className="state">[ {target.processState} ] </small>
				{target.noticeNo} 
			</h1>
			<button className="closeBtn" onClick={onClose}><i class="fas fa-times"></i></button>
		</div>
		<div className="detailContent">
			<img src={target.popfile} alt={target.desertionNo + ' thumbnail'} className='popfile' />
			<div className="inform">
				<table>
					<tbody>
						<tr>
							<th>유기번호</th>
							<td>{target.desertionNo}</td>
						</tr>
						<tr>
							<th>발견장소</th>
							<td>{target.happenPlace}</td>
						</tr>
						<tr>
							<th>품종</th>
							<td>{target.kindCd}</td>
						</tr>
						<tr>
							<th>나이</th>
							<td>{target.age}</td>
						</tr>
						<tr>
							<th>체중</th>
							<td>{target.weight}</td>
						</tr>
						<tr>
							<th>성별</th>
							<td>{target.sexCd}</td>
						</tr>
						<tr>
							<th>특징</th>
							<td>{target.specialMark}</td>
						</tr>
						<tr>
							<th>보호소</th>
							<td>{target.careNm}</td>
						</tr>
						<tr>
							<th>보호소 전화번호</th>
							<td>{target.careTel}</td>
						</tr>
						<tr>
							<th>보호소 주소</th>
							<td>{target.careAddr}</td>
						</tr>
						<tr>
							<th>관활기관</th>
							<td>{target.orgNm}</td>
						</tr>
						<tr>
							<th>담당자</th>
							<td>{target.chargeNm}</td>
						</tr>
						<tr>
							<th>담당자 연락처</th>
							<td>{target.officetel}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div> );
}

export default Detail;