import React from 'react';

import axios from 'axios';
import { prefix } from "../config/config";
import style from '../styles/Search.module.css';

const Index = (props) => (
    <main>
      <div className={style.search}>
        <input type="text" id="search-name" placeholder="검색어 입력" className={style.input}/>
        <img id="search-button"
             src={`${prefix}/images/search.png`}
             className={style.img}
             onClick={searchClick}
             alt="13"/>
        <ul id="search-list">

        </ul>
      </div>
      <div>TEST22</div>
    </main>

);
async function searchClick() {
  const value = await document.getElementById("search-name").value;
  const res = await axios.get('https://5nft.link/search?word=' + value);
  const data = await res.data;
  const li =  await document.getElementById('search-list');
  li.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    li.innerHTML +=
        "<ul>" +
        "<li>" + data[i].word + "/" + data[i].count + "</li>" +
        "</ul>";
  }

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    data: data
  }
}

export default Index