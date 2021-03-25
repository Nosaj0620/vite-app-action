import React from 'react'
import MapBox from './MapBox'
import '../assets/css/content.scss'
import moreImg from '../assets/img/more.png'
import search from '../assets/img/search.png'
import { global } from '../global'
export default function name() {
    const goArt = (res: any) => {
        console.log(res);
    }
    const searchLiaison = () => {
        console.log('search');
    }
    const repTypeFun = () => {
        console.log('repTypeFun');
    }
    return (
        <div className="wrapper content">
            <div className="mapBox">
                <MapBox></MapBox>
                <div className="section">
                    <div className="left">
                        <div className="box notice-box">
                            <h4>通知公告 <span>更多<img src={moreImg} alt="" /></span></h4>
                            <ul style={{ height: '482px' }}>
                                {
                                    global.noticeList.map((item: any, index: number) => {
                                        return (
                                            <li onClick={() => { goArt(item) }} key={index}> {item.title}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="box work-box">
                            <h4>工作动态 <span>更多<img src={moreImg} alt="" /></span></h4>
                            <ul style={{ height: '482px' }}>
                                {
                                    global.workList.map((item: any, index: number) => {
                                        return (
                                            <li onClick={() => { goArt(item) }} key={index}> {item.title}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="right">
                        <div className="box station-box">
                            <h4>示范{global.GROUP_TITLE}站点 <span>更多<img src={moreImg} alt="" /></span></h4>
                            <ul style={{ height: '482px' }}>
                                {
                                    global.stationList.map((item: any, index: number) => {
                                        return (
                                            <li onClick={() => { goArt(item) }} key={index}> {item.name}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="box rep-box">
                            <h4>查询留言</h4>
                            <div className="search">
                                <input className="searchBar" style={{ width: "320px", paddingLeft: "10px" }} type="text" placeholder="请填写手机号" />
                                <button className="searchBtn" style={{ width: "100px" }} onClick={searchLiaison}>获取验证码</button>
                            </div>
                            <div className="search">
                                <input className="searchBar" style={{ paddingLeft: "10px" }} type="text" placeholder="请填写验证码" />
                                <button className="searchBtn" onClick={searchLiaison}>查询</button>
                            </div>
                        </div>
                        <div className="box search-box">
                            <h4>查询{global.GROUP_TITLE}</h4>
                            <div className="search">
                                <input className="searchBar" type="text" />
                                <img src={search} className="searchImg" alt="" />
                                <button className="searchBtn" onClick={searchLiaison}>查询</button>
                            </div>
                        </div>
                        <div className="box rep-box">
                            <h4>查询代表</h4>
                            <div className="selector clearFix">
                                <select className="select" onChange={repTypeFun} v-model="repType">
                                    <option value={undefined} disabled selected style={{ display: 'none' }}>请选择查询类型</option>
                                    <option value="4">乡镇（街道）人大代表</option>
                                    <option value="0">县（市/区）代表</option>
                                    <option value="1">市级人大代表</option>
                                    <option value="2">省级人大代表</option>
                                    <option value="3">全国人大代表</option>
                                </select>
                            </div>
                            <div className="search">
                                <input className="searchBar" type="text" />
                                <img src={search} className="searchImg" alt="" />
                                <button className="searchBtn" onClick={searchLiaison}>查询</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )

}