import React from 'react';

import axios from 'axios';
import {prefix} from "../config/config";
import searchStyle from '../styles/Search.module.css';

const Index = (props) => (
    <main>
        <div className={searchStyle.search}>
            <input type="text" id="search-name" placeholder="검색어 입력" className={searchStyle.input}/>
            <img id="search-button"
                 src={`${prefix}/images/search.png`}
                 className={searchStyle.img}
                 onClick={searchClick}
                 alt="13"/>
            <ul id="search-list">

            </ul>
        </div>
        <div style={{ width: "50%"}} className={searchStyle.margin}>
            <div className={searchStyle.aa}>
                {/*<div style={{border: "1px solid gold", float: "left", width: "25%"}}>*/}
                <div>
                    첫번째 영역
                </div>
                <div>
                    첫번째 영역
                </div>
                <div>
                    첫번째 영역
                </div>
                <div>
                    첫번째 영역
                </div>
            </div>
            <div className={searchStyle.aa}>
                <div>
                    첫번째 영역
                </div>
                <div>
                    두번째 영역
                </div>
                <div>
                    세번째 영역
                </div>
                <div>
                    세번째 영역
                </div>
                <div>
                    세번째 영역
                </div>
            </div>
            <div className={searchStyle.aa}>
                <div>
                    첫번째 영역
                </div>
                <div>
                    두번째 영역
                </div>
                <div>
                    세번째 영역
                </div>
                <div>
                    세번째 영역
                </div>
                <div>
                    세번째 영역
                </div>
                <div>
                    세번째 영역
                </div>
            </div>
            <div className={searchStyle.aa}>
                <div>
                    첫번째 영역
                </div>
                <div>
                    두번째 영역
                </div>
                <div>
                    세번째 영역
                </div>
                <div>
                    세번째 영역
                </div>
                <div>
                    세번째 영역
                </div>
                <div>
                    세번째 영역
                </div>
            </div>
            <div className={searchStyle.aa}>
                <div>
                    첫번째 영역
                </div>
                <div>
                    두번째 영역
                </div>
                <div>
                    세번째 영역
                </div>
                <div>
                    세번째 영역
                </div>
                <div>
                    세번째 영역
                </div>
            </div>
            <div className={searchStyle.aa}>
                <div>
                    첫번째 영역
                </div>
                <div>
                    두번째 영역
                </div>
                <div>
                    세번째 영역
                </div>
                <div>
                    네번째 영역
                </div>
            </div>
        </div>
    </main>

);

async function searchClick() {
    const value = await document.getElementById("search-name").value;
    const res = await axios.get('https://5nft.link/search?word=' + value);
    const data = await res.data;
    const li = await document.getElementById('search-list');
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