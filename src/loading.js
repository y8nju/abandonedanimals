import React from 'react';
import './loading.css'

export const Loading = () => {
  return (<div id='loading'>
    <ul>
        <li className="loadingItem" style={{'--i': 1}}><i class="fas fa-paw"></i></li>
        <li className="loadingItem" style={{'--i': 2}}><i class="fas fa-paw"></i></li>
        <li className="loadingItem" style={{'--i': 3}}><i class="fas fa-paw"></i></li>
        <li className="loadingItem" style={{'--i': 4}}><i class="fas fa-paw"></i></li>
    </ul>
</div>);
};

export default Loading;