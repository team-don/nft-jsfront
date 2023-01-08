// import Layout from '../components/Layout';
import Link from 'next/link';
import React from 'react';

import axios from 'axios';
import { prefix } from "../config/config";
import style from '../styles/Search.module.css';
import router from 'next/router'
import Image from "next/image";

const Index = (props) => (
    <main>
        <div className={style.search}>
            <input type="text" id="search-name" placeholder="검색어 입력" className={style.input}/>
                <img id="search-button"
                     // src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"
                     src={`${prefix}/images/search.png`}
                     className={style.img}
                     // th:onclick="searchClick()"aa
                    onClick={searchClick}
                 alt="13"/>
                    <ul id="search-list">

                    </ul>
        </div>
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
            // "<li> " + json[i].count + "</>" +
            // "<td> " + json[i].body + "</td>" +
            "</ul>";
    }

    console.log(`Show data fetched. Count: ${data.length}`);

    return {
        data: data
    }
}

// Index.getInitialProps = async function() {
//     const res = await axios.get('https://5nft.link/search?word=개죽')
//     const data = await res.data;
//     const li =  await document.getElementById('search-list');
//
//     for (let i = 0; i < data.length; i++) {
//         li.innerHTML +=
//             "<ul>" +
//             "<li>" + data[i].word + "/" + data[i].count + "</li>" +
//             // "<li> " + json[i].count + "</>" +
//             // "<td> " + json[i].body + "</td>" +
//             "</ul>";
//     }
//
//     console.log(`Show data fetched. Count: ${data.length}`);
//
//     return {
//         data: data
//     }
// };

export default Index