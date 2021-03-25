import React, { useEffect, useRef } from 'react';
import '../assets/css/map.scss'
function MapBox() {
    const mapEl: any = useRef();
    const resizeMap = () => {
        console.log(mapEl)
        const a = mapEl.current;
        a.style.height = a.parentNode.parentNode.offsetHeight + 'px';
        console.log(a.parentNode.parentNode.offsetHeight)
    }
    const initMap = () => {
        const { BMap } = window
        const map = new BMap.Map("allmap"); // 创建Map实例
        map.centerAndZoom(new BMap.Point(118.180222, 39.630451), 12); // 初始化地图,设置中心点坐标和地图级别
    }
    useEffect(() => {
        initMap();
        resizeMap();
        window.addEventListener("resize", resizeMap)
        return () => {
            window.removeEventListener("resize", resizeMap)
        };
    }, []);

    return (
        <div style={{ backgroundColor: '#F5F3F0' }} id="all">
            <div id="allmap" ref={mapEl}></div>
        </div>
    )
}

export default MapBox;
